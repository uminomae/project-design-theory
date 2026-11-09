#!/usr/bin/env python3
"""scripts/find_source.py のテスト。ネットワークにも PDF にも触らない（書誌の読み取り・分類・判定・突き合わせの中身だけ）。

  python3 -I scripts/test_find_source.py

例は、cs のレビュー（Issue #73・2026-11-08〜09）で実際に起きたことから取った。
"""

import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import find_source as fs  # noqa: E402


class ParseCite(unittest.TestCase):
    def test_article(self):
        c = fs.parse_cite("Bak, P., Tang, C. & Wiesenfeld, K. (1987). Self-organized criticality: An explanation of the "
                          "1/f noise. *Phys. Rev. Lett.* 59, 381-384.")
        self.assertEqual(c["author"], "Bak; Tang; Wiesenfeld")
        self.assertEqual((c["year"], c["journal"], c["volume"], c["pages"]), (1987, "Phys. Rev. Lett.", "59", "381-384"))
        self.assertEqual(c["title"], "Self-organized criticality: An explanation of the 1/f noise")
        self.assertFalse(c["book"])

    def test_book(self):
        c = fs.parse_cite("Lakatos (1976). *Proofs and Refutations*. Cambridge UP.")
        self.assertEqual((c["title"], c["book"]), ("Proofs and Refutations", True))

    def test_quoted_title_and_question_mark(self):
        self.assertEqual(fs.parse_cite('Pratt, M. L. (1991). "Arts of the Contact Zone." *Profession* 91: 33-40. MLA.')["title"],
                         "Arts of the Contact Zone")
        c = fs.parse_cite("Wilson, J.T. (1966). Did the Atlantic Close and then Re-Open? *Nature* 211(5050), 676-681.")
        self.assertEqual((c["title"], c["journal"]), ("Did the Atlantic Close and then Re-Open?", "Nature"))

    def test_chapter_is_book(self):
        c = fs.parse_cite("Gibson (1977). The theory of affordances. In Shaw & Bransford (Eds.), *Perceiving, Acting, "
                          "and Knowing*, pp.67–82")
        self.assertEqual((c["title"], c["book"], c["pages"]), ("The theory of affordances", True, "67-82"))

    def test_short_form_without_title(self):
        # Issue の表の短い書き方。誌名を題と取り違えない
        for cite, j in [("Wilson (1966). *Nature* 211, 676", "Nature"), ("Holling, C. S. (1973). *Ann. Rev. Ecol. Syst.*, 4, 1-23.",
                                                                          "Ann. Rev. Ecol. Syst.")]:
            c = fs.parse_cite(cite)
            self.assertEqual((c["title"], c["journal"], c["book"]), ("", j, False))

    def test_doi_from_notes_and_japanese_note(self):
        c = fs.parse_cite("Fleming, A. (1945). Penicillin（ノーベル講演）. *Nobel Lectures*", "DOI: 10.1103/PhysRevLett.59.381。APS")
        self.assertEqual((c["doi"], c["title"]), ("10.1103/PhysRevLett.59.381", "Penicillin"))

    def test_names(self):
        self.assertEqual(fs.family_names("Stern, V. M., Smith, R. F., van den Bosch, R. & Hagen, K. S."),
                         ["Stern", "Smith", "Bosch", "Hagen"])
        self.assertEqual(fs.family_names("Drążkowska, J. ほか"), ["Drążkowska"])
        self.assertEqual(fs.family_names("Rayleigh, Lord"), ["Rayleigh"])
        self.assertEqual(fs.norm("Muñoz Hénon が"), "munoz henon が")  # アクセントは外すが、かなの濁点は残す

    def test_pages(self):
        self.assertEqual(fs.page_count_expected("381-384"), 4)
        self.assertEqual(fs.page_count_expected("1201–4"), 4)
        self.assertIsNone(fs.page_count_expected("2290"))

    def test_clean_title(self):
        self.assertEqual(fs.clean("An explanation of the 1/\n   <i>f</i>\n   noise"), "An explanation of the 1/ f noise")


class Classify(unittest.TestCase):
    def test_kinds(self):
        self.assertEqual(fs.classify("https://www.jneurosci.org/content/jneuro/18/24/10464.full.pdf")[0], "出版社")
        self.assertEqual(fs.classify("http://digitallibrary.amnh.org/bitstream/2246/6567/1/x.pdf")[0], "大学・機関リポジトリ")
        self.assertEqual(fs.classify("https://archive.org/details/anthropologyofpe0000turn")[0], "個人")
        self.assertEqual(fs.classify("https://zenodo.org/record/1/files/x.pdf")[0], "不明")
        self.assertTrue(fs.classify("https://www.ling.upenn.edu/~wlabov/Papers/x.pdf")[0].startswith("授業"))
        # 道の「their.pdf」が「ir.」に当たって機関リポジトリになる取り違えをしない
        self.assertEqual(fs.classify("https://example.com/their.pdf")[0], "不明")
        self.assertEqual(fs.classify("https://web.archive.org/web/2013/http://www.cook-greuter.com/x.pdf",
                                     roles={"cook-greuter.com": "著者のサイト"})[0], "著者のサイト")

    def test_browser_hosts(self):
        self.assertTrue(fs.browser_host("https://pubs.aeaweb.org/doi/pdf/10.1257/0895330027247"))
        self.assertTrue(fs.browser_host("https://pmc.ncbi.nlm.nih.gov/articles/PMC45074/pdf/x.pdf"))
        self.assertFalse(fs.browser_host("https://arxiv.org/pdf/1234.5678"))
        # Wayback の写しは web.archive.org が出すので、確認画面のホストに数えない
        self.assertFalse(fs.browser_host("https://web.archive.org/web/2020/https://www.jneurosci.org/x.full.pdf"))

    def test_grade_and_verdict(self):
        hits = [fs.Hit("OpenAlex", "https://doi.org/10.1038/211676a0", "出版社", "publishedVersion", oa=False),
                fs.Hit("OpenAlex", "https://www.jneurosci.org/content/x.full.pdf", "出版社", "publishedVersion", oa=True, pdf=True),
                fs.Hit("Wayback", "https://web.archive.org/web/2020/https://www.jneurosci.org/content/x.full.pdf", "出版社", oa=True, pdf=True),
                fs.Hit("OpenAlex", "http://content.ub.hu-berlin.de/monographs/toc/ethnologie/BV004164294.pdf", "不明", oa=True, pdf=True),
                fs.Hit("Internet Archive", "https://archive.org/details/x", "不明", note="1988 の版・貸出（ログインして借りる形）", oa=None),
                fs.Hit("OpenAlex", "https://arxiv.org/pdf/1234.5678", "大学・機関リポジトリ", "submittedVersion", oa=True, pdf=True)]
        tiers = [fs.grade(h).tier for h in hits]
        self.assertEqual(tiers, [9, 3, 1, 6, 5, 0])
        self.assertEqual(hits[5].version, "著者稿（投稿時）")
        self.assertEqual(fs.verdict(hits)[0], 0)
        self.assertEqual(fs.verdict(hits[:2])[0], 3)  # OA はあるが確認画面のホストだけ
        self.assertEqual(fs.verdict([])[0], 9)


class CheckText(unittest.TestCase):
    def check(self, head, n_pages, **want):
        base = {"title": None, "authors": [], "year": None, "pages": "", "journal": "", "doi": "", "book": False}
        base.update(want)
        return fs.check_text(head, n_pages, base)

    BODY = " lorem ipsum dolor sit amet" * 12

    def test_frontmatter_only_book(self):
        # D02 Haken 1983：手元の PDF が 12 頁の前付けだけだった
        ok, lines, warn = self.check("Hermann Haken Synergetics An Introduction Springer" + self.BODY, 12,
                                     title="Synergetics: An Introduction", authors=["Haken"], year=1983, book=True)
        self.assertFalse(ok)
        self.assertTrue(any("本なのに" in l for l in lines))

    def test_reprint_mark(self):
        # D25 Pratt 1991：手元の写しは Ways of Reading への再録だった
        ok, lines, warn = self.check("Arts of the Contact Zone By Mary Louise Pratt From Ways of Reading, 5th edition" + self.BODY,
                                     9, title="Arts of the Contact Zone", authors=["Pratt"], year=1991, pages="33-40",
                                     journal="Profession")
        self.assertTrue(ok)
        self.assertIn("再録・訳・抜粋の印", warn)
        self.assertIn("掲載誌の名が頭の頁に無い", warn)

    def test_wrong_title(self):
        # D02 Nelson & Kosterlitz 1977：台帳の題が別の題だった
        ok, lines, warn = self.check("Universal Jump in the Superfluid Density of Two-Dimensional Superfluids "
                                     "David R. Nelson and J. M. Kosterlitz 1977" + self.BODY, 5,
                                     title="Renormalization Group Analysis of the Two-Dimensional Superfluid",
                                     authors=["Nelson", "Kosterlitz"], year=1977, pages="1201-1204")
        self.assertFalse(ok)

    def test_same_author_other_paper(self):
        # D24 Di Marzio：同じ著者・同じ誌の別の論文を掴んでいた（2026-11-09 にこの道具で見つかった）
        ok, lines, warn = self.check("The Journal of CESNUR People Trapped Inside Shincheonji: Broadcasting the Darker Side of "
                                     "Deprogramming Raffaella Di Marzio" + self.BODY, 13,
                                     title="Experiences of Affiliation, Conversion, 'Brainwashing,' and Departure",
                                     authors=["Marzio"], year=2019, journal="The Journal of CESNUR")
        self.assertFalse(ok)

    def test_other_doi_and_short_pages(self):
        ok, lines, warn = self.check("Some Paper Title Smith doi:10.1186/1939-4551-7-12" + self.BODY, 3, title="Some Paper Title",
                                     authors=["Smith"], doi="10.1186/1939-4551-7-23", pages="100-120")
        self.assertFalse(ok)
        self.assertTrue(any("DOI が狙いと違う" in l for l in lines))
        self.assertTrue(any("頁が足りない" in l for l in lines))

    def test_preprint_is_warning_not_mismatch(self):
        # arXiv の著者稿は頁が多い。合わないとはせず、注意にする
        ok, lines, warn = self.check("A Powerful Local Shear Instability Balbus Hawley 1991" + self.BODY, 20,
                                     title="A Powerful Local Shear Instability", authors=["Balbus", "Hawley"], pages="214-222")
        self.assertTrue(ok)
        self.assertIn("頁が書誌より多い", warn)

    def test_letter_spaced_and_accents(self):
        # ノーベル講演の PDF は字間を空けて組んである。アクセントつきの著者名も当てる
        ok, lines, warn = self.check("S U P R A M O L E C U L A R  C H E MI S T R Y  J E A N - M A R I E  L E H N" + self.BODY, 48,
                                     title="Supramolecular Chemistry", authors=["Lehn"])
        self.assertTrue(ok)
        ok, lines, warn = self.check("Criticality and dynamical scaling in living systems Miguel A. Munoz" + self.BODY, 30,
                                     title="Criticality and dynamical scaling in living systems", authors=["Muñoz"])
        self.assertTrue(ok)

    def test_image_only(self):
        ok, lines, warn = self.check("  ", 300, title="On the Origin of Species", authors=["Darwin"], book=True)
        self.assertIsNone(ok)  # 合わないのでなく、機械では確かめられない


if __name__ == "__main__":
    unittest.main()
