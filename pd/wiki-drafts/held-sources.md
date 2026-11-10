# 出典ページを作らずにおく原典

cs の台帳で読める原典で、精読ノートもあるが、wiki の出典ページをまだ作らないもの。`pd/scripts/wiki-gen-check.mjs` は、ここに行がある原典を「出典ページが無い原典」の知らせから外し、数だけを別に出す。

決まり：公開文に載せるのは、原典の本文を読み、しかも載せてよい写しで読んだものだけ（`docs/rules/sources.md` §3-3・§5 の決まり 8）。出典ページの材料は精読ノートで、ノートの引用が原文と合わないときは、ノートが材料にならない。

戻すとき：理由の欄の条件が満ちたら（載せてよい写しで読み直した・ノートを原文で読み直した）、`.claude/skills/wiki-compile/SKILL.md` の手順で出典ページを作り、ここの行を消す。

| 原典 | 書誌 | 理由 | 決めた日 |
|---|---|---|---|
| D02-S07 | Haken (1983). *Synergetics: An Introduction* | 手元の PDF が前付け（序文と目次）だけで、本文を読んでいない | 2026-11-10 |
| D13-S02 | Simondon (1958). *Du mode d'existence des objets techniques* | 読んだ写し（Monoskop）は上げた人と権利が分からない。パブリックドメインでない | 2026-11-10 |
| D13-S07 | Dewey (1938). *Logic: The Theory of Inquiry* | 読んだ写しは Internet Archive の利用者が上げたもので、権利が分からない（創造とはの哲学の照合の記録も未照合） | 2026-11-10 |
| D15-S08 | Heidegger, The Origin of the Work of Art（Hofstadter 訳 1971） | 読んだ写しは上げた人の分からない写し | 2026-11-10 |
| D16-S09 | Ibn Khaldun, *The Muqaddimah*（Rosenthal 訳・Dawood 抄・2015 年の版） | 読んだ写しは Internet Archive の写しで、2015 年の版はパブリックドメインでない（創造とはの歴史学の照合の記録も、写しの性格からこの訳だけでは本文照合済としない） | 2026-11-10 |
| D16-S10 | Wallerstein (1974). *The Modern World-System I* | 読んだ写しは Internet Archive の利用者が上げたもの（創造とはの歴史学の照合の記録も未照合） | 2026-11-10 |
| D21-S03 | Schumpeter (1942). *Capitalism, Socialism and Democracy* | 写しは通る（インド政府の電子図書館の走査）が、精読ノートの引用 12 のうち 8 が原文の文字の層に見つからない。ノートを原文で読み直すまで作らない | 2026-11-10 |
| D13-S11 | Bergson (1911). *Creative Evolution*（Mitchell 訳） | 写しは通る（パブリックドメイン）が、精読ノートの引用 4 のうち 3 が原文に見つからない（要約を引用の形で書いている）。ノートを読み直すまで作らない | 2026-11-10 |
| D19-S13 | Polti (1916). *The Thirty-Six Dramatic Situations*（Ray 訳） | 写しは通る（パブリックドメイン）が、精読ノートの引用 5 のうち 4 が原文に見つからない。ノートを読み直すまで作らない | 2026-11-10 |
| D24-S05 | van Gennep, *The Rites of Passage*（Vizedom・Caffee 訳 1960） | 読んだ写しは Internet Archive の opensource（利用者が上げた写し）で、1960 年の英訳はパブリックドメインでない（創造とはの人類学の照合の記録も、仏語の原文を開けていない） | 2026-11-10 |
