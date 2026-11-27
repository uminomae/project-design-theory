# pd の原典の台帳

プロジェクトデザイン論（pd）の読み物（Love駆動開発ほか）で読んだ原典のうち、手元に置いたものの書誌と、取得の状況。PDF と手元で読むための訳は `pd/knowledge/raw/` に置き、git に入れない。この台帳だけを公開する（読者が材料を確かめられるように）。cs の台帳（`cs/knowledge/raw/manifest.md`）・as の台帳（`as/knowledge/raw/manifest.md`）と同じ形（2026-11-16 に作った）。

- source_id：`P-001` のように通し番号。
- 照合の状態：`docs/rules/sources.md` §3 の四つ（本文照合済・要旨照合済・二次資料のみ・未照合）。
- 取得の状況：手元に PDF あり／URL で読める／ブラウザでの保存が要る／書籍だけ。

| source_id | 書誌 | DOI | 取得先 | 取得の状況 | 照合の状態 | 手元のファイル | 使う読み物 |
|---|---|---|---|---|---|---|---|
| P-001 | Fleming, A. (1945). Penicillin. Nobel Lecture, December 11, 1945. 講演集の頁 pp. 83–93。 | なし | https://www.nobelprize.org/uploads/2018/06/fleming-lecture.pdf （Nobel 財団の PDF） | 手元に PDF あり | 本文照合済 | fleming-1945-penicillin.pdf・fleming-1945-penicillin-ja.md（Claude の日本語訳。手元で読むため） | Love駆動開発（創造の章） |
| P-002 | Herapath, J. (1847). *Mathematical Physics; or the Mathematical Principles of Natural Philosophy*, vol. 1. London: Whittaker and Co. pp. 12–18, 211–221, 235–266（パブリックドメイン）。 | なし | https://books.google.com/books?id=nH0tAAAAYAAJ （Google Books・ハーバード大学図書館の写し。全文表示だが、ブラウザで開かないと頁が見えず、PDF の取得は確認画面で止まる。p.N＝pg=PAN） | 手元に頁の画像あり（2026-11-25 に Chrome の画面から取った・840×1411・50 枚） | 本文照合済 | herapath-1847-mathematical-physics-v1/p012.png〜p266.png | ヘラパス『数理物理学』の気体の運動論の所の対訳（`pd/knowledge/translations/herapath-1847-mathematical-physics.md`） |
| P-003 | Cook-Greuter, S. R. (2013). *Nine Levels of Increasing Embrace in Ego Development: A Full-Spectrum Theory of Vertical Growth and Meaning Making*. Prepublication version, revised Dec. 2013. 頁は刷りの番号（各頁の下の © の行の数）。 | なし | https://web.archive.org/web/20140928135208/http://www.cook-greuter.com/Cook-Greuter%209%20levels%20paper%20new%201.1%2714%2097p%5B1%5D.pdf （著者が cook-greuter.com に置いていた版の Internet Archive の写し） | 手元に PDF あり（2026-11-27） | 本文照合済 | cook-greuter-2013-nine-levels.pdf・cook-greuter-2013-nine-levels.txt（pdftotext -layout の文字起こし。grep で引くため） | 発達段階とは・段階と防衛・ものの見方の広さスクリーナー ほか |
| P-004 | O'Fallon, T. (2020). States and STAGES: Waking up Developmentally. *Integral Review* 16(1). 頁は雑誌の刷りの番号（各頁の上の行の数）。 | なし | https://integral-review.org/issues/vol_16_no_1_ofallon_states_and_stages.pdf （雑誌の公開 PDF） | 手元に PDF あり（2026-11-27） | 本文照合済 | ofallon-2020-states-and-stages.pdf・ofallon-2020-states-and-stages.txt（同じく文字起こし） | 発達段階とは・ものの見方の広さスクリーナー ほか |
