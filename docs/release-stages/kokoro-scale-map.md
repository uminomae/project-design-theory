# 誤解の台帳を、公的な防衛の尺度と発達の尺度に当てた表（下書き）

`docs/RELEASE-STAGES.md` 3.3（B バグチェッカーの範囲）の段 1 の下書き。このファイルは `python3 -I scripts/release-maps.py` が `kokoro-assign.tsv` から作る。手で直さず、TSV を直して作り直す。

- 台帳：`docs/tools/kokoro-scan/ruler.md` 版 1.12 の「よくある誤解（台帳）」46 項。番号 R01〜R46 は台帳の並び順。
- DMRS：Di Giuseppe & Perry 2021（*Frontiers in Psychology* 12:718440, https://doi.org/10.3389/fpsyg.2021.718440）の 7 水準・30 の防衛。防衛の名の訳は `pd/reader/defense-mechanisms.html` の表のとおり（本文照合済の写しは `pd/knowledge/research/defense-mechanisms/SURVEY-classifications-20261122.md` §5）。
- WUSCT：Hy & Loevinger 1996（*Measuring Ego Development*, 2nd ed.）の段階 E2〜E9。段階の英語の名と I の符号（I-2・Δ・I-3・I-3/4・I-4・I-4/5・I-5・I-6）、36 項目で採点することは Loevinger 1979（*Applied Psychological Measurement* 3(3):281–311, https://doi.org/10.1177/014662167900300301・写し https://hdl.handle.net/11299/99630 の Table 1 p.283・pp.281–284）の本文で照合した。1979 年の表では I-3/4 と I-4/5 に段階の名が無く、本文は I-3/4 を順応から良心への移り目、I-4/5 を個人主義の水準と呼ぶ。E の番号（E1〜E9）と、I-3/4 の名「Self-Aware」・I-4/5 の名「Individualistic」は Hy & Loevinger 1996 の形。その本文は読めていない（Internet Archive は貸出だけで、中の検索も閉じている。2026-11-27）。代わりに、1996 を出典に E1〜E9 の番号と名を一つずつ並べる Osin, Voevodina & Kostenko 2023（*Frontiers in Psychology* 14:958721, https://doi.org/10.3389/fpsyg.2023.958721・Europe PMC の全文。序論の段階の段と Table 1）と、Cook-Greuter 2013 の本文（I-3/4 を「her I 3/4, E5」の Self-aware と書く p.6、Integrated を「I6 or E9」「I-6, E9」と書く pp.52・73）で照らし、表の E2〜E9 と名と I の符号は食い違わなかった（2026-11-27。二次資料での照合）。版による違いは、1979 年の表は I の符号だけで I-3/4・I-4/5 に名が無く、1996 年の形は E の番号と全ての段階の名を持つこと。E9 の先は、Cook-Greuter 2013 が構成への気づきと統一の二つで Integrated を置き換え（p.52）、Madl & Cook-Greuter 2026（*Frontiers in Psychology* 17:1853871, https://doi.org/10.3389/fpsyg.2026.1853871）は構成への気づき（5/6）を Integrated に、統一（6）を Loevinger に無い段階に当てる。表の E9 の行の「構成への気づき（5/6）以降」は、どちらとも食い違わない。repo のページはクック＝グロイター 2013 の呼び名を使うので、横に並べた（対応はクック＝グロイター 2013 が括弧で書く Loevinger の段階の番号による。`pd/knowledge/research/developmental-stages/README.md` §1・§2）。
- 当て方は Claude の読み（2026-11-26）。DMRS は、その誤解の中で働いている防衛か、誤解が見落としている防衛を一つから三つ。WUSCT は、その誤解が出やすい段階か、同じ語の向きが反転する境目の段階を、クック＝グロイター 2013 の段階ごとの主な不安と防衛から読んだ。防衛でない取り違え（語の水準・定義の混同）と、段階の根拠が repo に無いものは「—」。
- 照合し直し（2026-11-27）：作った側と別のコンテキストで、項ごとに (1) 防衛と段階の名と水準が原典のとおりか、(2) 項の文が防衛の定義（Di Giuseppe & Perry 2021 の各防衛の Definition と Function の節）と段階の記述（Loevinger 1979 pp.281–282）に本当に重なるか、(3) 当て漏れと当てすぎ、を見た。名と水準は原典のとおりだった。変えた項と理由は下の「照合し直しで変えたもの」（正本 `kokoro-recheck.tsv`）。

## 数

| 項目 | 数 |
|---|---|
| 台帳の項 | 46（うち pjdhiro 由来 29） |
| DMRS の防衛に当てた項 | 26 / 46 |
| WUSCT の段階に当てた項 | 22 / 46 |
| どちらにも当てない項 | 17 / 46（多くは F4・F5 の取り違えと条件の欠落。枠 2 へ） |
| DMRS の防衛 | 当たる項がある 14 / 30（空き 16） |
| DMRS の水準 | 当たる項がある 6 / 7 |
| WUSCT の段階 | 当たる項がある 4 / 8（空き 4） |

## DMRS の 30 の防衛から見た表

| 水準 | 防衛 | 当たる項 |
|---|---|---|
| 7 高い適応（成熟） | 人に頼る | R08 |
| 7 高い適応（成熟） | 利他 | （空き） |
| 7 高い適応（成熟） | 予期 | R34・R36 |
| 7 高い適応（成熟） | ユーモア | （空き） |
| 7 高い適応（成熟） | 自己主張 | （空き） |
| 7 高い適応（成熟） | 自己観察 | R01 |
| 7 高い適応（成熟） | 昇華 | （空き） |
| 7 高い適応（成熟） | 抑制 | （空き） |
| 6 強迫的（神経症的） | 感情の隔離 | （空き） |
| 6 強迫的（神経症的） | 知性化 | R40 |
| 6 強迫的（神経症的） | 打ち消し | （空き） |
| 5 そのほかの神経症的 | 抑圧 | （空き） |
| 5 そのほかの神経症的 | 解離 | （空き） |
| 5 そのほかの神経症的 | 反動形成 | R17 |
| 5 そのほかの神経症的 | 置き換え | （空き） |
| 4 小さな像の歪み（未熟） | 自己の価値下げ | （空き） |
| 4 小さな像の歪み（未熟） | 他者の価値下げ | R20・R24・R45・R46 |
| 4 小さな像の歪み（未熟） | 自己の理想化 | R26・R28 |
| 4 小さな像の歪み（未熟） | 他者の理想化 | R04・R05・R15・R24・R33・R42 |
| 4 小さな像の歪み（未熟） | 万能 | R19・R26・R32・R36・R37 |
| 3 否認（未熟） | 否認 | R04・R07・R08・R13・R17・R20・R34 |
| 3 否認（未熟） | 合理化 | R10・R28・R30・R40 |
| 3 否認（未熟） | 投影 | R03・R37 |
| 3 否認（未熟） | 自閉的空想 | （空き） |
| 2 大きな像の歪み（未熟） | 自己像の分裂 | R23 |
| 2 大きな像の歪み（未熟） | 他者像の分裂 | R05・R23 |
| 2 大きな像の歪み（未熟） | 投影性同一視 | （空き） |
| 1 行動（未熟） | 行動化 | （空き） |
| 1 行動（未熟） | 助けを拒む不平 | （空き） |
| 1 行動（未熟） | 受動的攻撃 | （空き） |

## WUSCT の段階から見た表

| WUSCT | repo の呼び名（クック＝グロイター） | 当たる項 |
|---|---|---|
| E2 衝動（Impulsive・I-2） | 衝動（2） | （空き） |
| E3 自己保護（Self-Protective・Δ） | 自己保護（2/3） | R03・R08・R10・R11・R12 |
| E4 順応（Conformist・I-3） | 順応（3） | R01・R03・R04・R05・R07・R08・R12・R13・R17・R23・R30・R42 |
| E5 自己意識（Self-Aware・I-3/4） | 専門家（3/4） | R01・R19・R20・R24・R30 |
| E6 良心（Conscientious・I-4） | 達成者（4） | R01・R24・R25・R26・R32・R36・R40 |
| E7 個人主義（Individualistic・I-4/5） | 多元（4/5） | （空き） |
| E8 自律（Autonomous・I-5） | 戦略家（5） | （空き） |
| E9 統合（Integrated・I-6） | 構成への気づき（5/6）以降 | （空き） |

## 台帳の 46 項

| 番号 | 節 | 誤解 | DMRS | WUSCT | 根拠 |
|---|---|---|---|---|---|
| R01 ★ | メタ認知・視点・共感 | メタ認知を他者視点取得と取り違える | 自己観察 | E4・E5・E6 | pd/reader/metacognition.html・pd/knowledge/research/developmental-stages/README.md |
| R02 | メタ認知・視点・共感 | 視点取得を共感と取り違える | — | — | pd/reader/empathy.html |
| R03 ★ | メタ認知・視点・共感 | 共感を境が消えて一つになることと思う | 投影 | E3・E4 | pd/reader/empathy.html・docs/rules/stance.md 1-1 |
| R04 ★ | 信頼・安心・理想化 | 信頼と信仰・期待・理想化を分けない | 他者の理想化・否認 | E4 | pd/reader/love-driven-dev.html 第四部・docs/rules/stance.md 1-3 |
| R05 | 信頼・安心・理想化 | 良い面だけ預けることを信頼と呼ぶ | 他者の理想化・他者像の分裂 | E4 | pd/reader/love-driven-dev.html「理想化と信頼は、どう違うのか」 |
| R06 | 信頼・安心・理想化 | 安心と信頼を同じものと書く | — | — | pd/reader/anshin.html |
| R07 ★ | 信頼・安心・理想化 | 信頼を不安が取り除かれた後の状態と書く | 否認 | E4 | docs/rules/stance-theories.md 信頼の行 |
| R08 ★ | 信頼・安心・理想化 | 防衛を下ろす安心と保身の安心を区別しない | 人に頼る・否認 | E3・E4 | pd/reader/love-driven-dev.html・pd/reader/anshin.html |
| R09 ★ | 心理的安全性 | 心理的安全性を一人の内側の能力として扱う | — | — | pd/reader/psychological-safety.html |
| R10 ★ | 心理的安全性 | 心理的安全性を自分自身の安心・安全と読む | 合理化 | E3 | pd/reader/psychological-safety.html |
| R11 ★ | 心理的安全性 | 安全を身の安全・罰されないことと読む | — | E3 | pd/reader/psychological-safety.html |
| R12 ★ | 心理的安全性 | 罰を恐れずに済むことだけを残す | — | E3・E4 | pd/reader/love-driven-dev.html・pd/reader/psychological-safety.html |
| R13 | 心理的安全性 | 優しさ・居心地のよさと思う | 否認 | E4 | pd/reader/psychological-safety.html |
| R14 | 心理的安全性 | 宣言すれば作れると思う | — | — | pd/reader/psychological-safety.html |
| R15 ★ | 心理的安全性 | 高いほど良く、どこでも要ると思う | 他者の理想化 | — | pd/reader/psychological-safety.html |
| R16 | 心理的安全性 | 脅威を取り除けば安全だと思う | — | — | pd/reader/psychological-safety.html |
| R17 ★ | 不安・防衛・葛藤 | 不安を消すもの・無いほうが良いものとして書く | 否認・反動形成 | E4 | pd/reader/anxiety.html・pd/knowledge/research/developmental-stages/READER-developmental-stages.md（順応の感情の表） |
| R18 | 不安・防衛・葛藤 | 不安と恐怖を一つの軸に並べる | — | — | docs/rules/stance.md 1-3 |
| R19 ★ | 不安・防衛・葛藤 | 脆弱性を見つめることを補って強くなることと読む | 万能 | E5 | pd/reader/via-vulnerability.html・pd/knowledge/research/developmental-stages/README.md（専門家の不安 p.40） |
| R20 | 不安・防衛・葛藤 | 防衛は弱い人や病気の人だけが使うと思う | 否認・他者の価値下げ | E5 | pd/reader/defense-mechanisms.html・pd/knowledge/research/developmental-stages/README.md（専門家の防衛 p.40） |
| R21 ★ | 不安・防衛・葛藤 | 性格の型や障害の名を人を分ける型として読む | — | — | pd/reader/stages-defense.html |
| R22 ★ | 不安・防衛・葛藤 | 障害の併発を別々のものが重なることと読む | — | — | pd/reader/stages-defense.html |
| R23 ★ | 不安・防衛・葛藤 | 葛藤を善悪の二分や悪いものとして扱う | 自己像の分裂・他者像の分裂 | E4 | pd/reader/love-driven-dev.html・pd/knowledge/research/developmental-stages/README.md（順応は葛藤を避ける p.34） |
| R24 ★ | 不安・防衛・葛藤 | 素朴な体験を科学より低いものと読む | 他者の理想化・他者の価値下げ | E5・E6 | docs/rules/stance.md 1-4 |
| R25 ★ | 粘り・立ち直り・動機 | GRIT を我慢や根性と読む | — | E6 | pd/reader/love-driven-dev.html・pd/knowledge/research/developmental-stages/README.md（達成者の影の抑え込み p.49） |
| R26 ★ | 粘り・立ち直り・動機 | レジリエンスを折れない個人の強さとして書く | 万能・自己の理想化 | E6 | pd/reader/love-driven-dev.html・pd/knowledge/research/developmental-stages/README.md（達成者の不安 p.50） |
| R27 | 粘り・立ち直り・動機 | ネガティブ・ケイパビリティを我慢の力と読む | — | — | pd/reader/love-driven-dev.html |
| R28 ★ | 粘り・立ち直り・動機 | 内発的動機を良い側だけで書く | 自己の理想化・合理化 | — | pd/reader/intrinsic-motivation.html |
| R29 | 組織・プロジェクトの言葉 | 関係や場の言葉を人の内側の能力として受け取る（総論） | — | — | pd/reader/love-driven-dev.html「事業の言葉は、どこで誤解されるか」 |
| R30 ★ | 組織・プロジェクトの言葉 | 「グループと一つになる」を集団への所属として使う | 合理化 | E4・E5 | pd/reader/nonaka-complement.html |
| R31 | 組織・プロジェクトの言葉 | 包むことを混ぜる・曖昧にすることと書く | — | — | docs/rules/stance.md 1-2 |
| R32 ★ | 組織・プロジェクトの言葉 | 手順を決めればコントロールできると書く | 万能 | E6 | docs/rules/stance.md 1-3・1-4・pd/knowledge/research/developmental-stages/README.md（達成者の不安 p.50） |
| R33 | 組織・プロジェクトの言葉 | 率いる人を予測と信念で貫く力強い人として描く | 他者の理想化 | — | docs/rules/stance.md 1-3 |
| R34 ★ | 組織・プロジェクトの言葉 | 不確実なことを避け、振り返りだけで書く | 否認・予期 | — | docs/rules/stance.md 1-3 |
| R35 | 組織・プロジェクトの言葉 | 構想や計画はいつも要ると書く | — | — | docs/rules/stance.md 1-3 |
| R36 ★ | 組織・プロジェクトの言葉 | 描いた未来の木を未来そのものと取り違える | 万能・予期 | E6 | docs/rules/stance.md 1-3 |
| R37 ★ | 組織・プロジェクトの言葉 | 時間の向きの見方が曖昧 | 投影・万能 | — | docs/rules/stance.md 1-3 |
| R38 | 組織・プロジェクトの言葉 | 探索の木と遡りの木を同じものと読む | — | — | pd/knowledge/research/julia-potential/ANALYSIS-time-axis-20261122.md |
| R39 | 組織・プロジェクトの言葉 | 意思決定を決定ツリーの全探索だけで書く | — | — | docs/rules/stance.md 1-3 |
| R40 ★ | 組織・プロジェクトの言葉 | 構想を叡智としてだけ書く | 知性化・合理化 | E6 | pd/reader/love-driven-dev.html・pd/knowledge/research/developmental-stages/README.md（達成者の防衛 p.49） |
| R41 | 組織・プロジェクトの言葉 | 価値は商品に埋め込むものと書く | — | — | pd/reader/love-driven-dev.html |
| R42 | 組織・プロジェクトの言葉 | 善とされたものをいつでも善いものと書く | 他者の理想化 | E4 | docs/rules/stance.md 1-2・pd/knowledge/research/developmental-stages/README.md（順応は決まりに沿う） |
| R43 ★ | 思考・推論 | 数学の力を演繹の力と同じものと書く | — | — | docs/rules/stance.md 1-4 |
| R44 ★ | 思考・推論 | 説明の順番を分かる順番そのものと取り違える | — | — | docs/rules/stance.md 1-4 |
| R45 ★ | 思考・推論 | 別の大前提から演繹する人を演繹の力が低いと書く | 他者の価値下げ | — | docs/rules/stance.md 1-4 |
| R46 ★ | 思考・推論 | 確かめる側に回る人を演繹が苦手と読む | 他者の価値下げ | — | docs/rules/stance.md 1-4 |

## 照合し直しで変えたもの（2026-11-27）

| 番号 | 列 | 前 | 後 | 理由 |
|---|---|---|---|---|
| R01 | DMRS | 自己観察 | 同じ | DMRS の自己観察は、自分の考え・感情・動機を振り返ることと、人から見えるように自分を見ることを一つの定義に含む。台帳の項は、この二つの取り違えそのものなので残す |
| R02 | DMRS | 知性化 | — | 知性化は、乱れる感情を避けるために抽象の考えを使いすぎること。項の文は、視点取得と共感の語の区別で、感情を避ける働きを述べていない |
| R03 | DMRS | 投影・投影性同一視・他者の理想化 | 投影 | DMRS の投影性同一視は、脅かされたと感じて相手を攻め、自分の攻めを正しいとする防衛で、境が消える融合ではない。他者の理想化は項の文に出てこない（鏡転移は理想化ではない） |
| R07 | DMRS | 否認・合理化 | 否認 | 合理化は、自分の振る舞いに、本当の動機の代わりにもっともらしい理由を当てること。項の文に、代わりの理由の形は無い |
| R14 | DMRS | 万能 | — | DMRS の万能は、無力さから自尊心を守るために、特別な力があるかのように人より上に振る舞うこと。「宣言すれば作れる」は信念の生まれ方の取り違えで、自尊心を守る形が文に無い |
| R17 | DMRS | 否認・抑圧・反動形成 | 否認・反動形成 | 抑圧は、感情は感じているのに、それが何の考えかに気づけないこと。項の文（不安をポジティブ思考で消す）は、逆の調子の思いで置き換える反動形成と、在る不安を認めない否認には重なるが、抑圧の形は無い |
| R19 | DMRS | 万能・反動形成 | 万能 | 反動形成は、受け容れられない衝動や感情を、正反対の感情や振る舞いで置き換えること。弱さを補って強くなる、は衝動の置き換えではない。無力さを打ち消す万能だけを残す |
| R21 | DMRS | 知性化 | — | 項の文は、現象を人を分ける型と読む語の水準の取り違えで、感情を避けるための抽象化は述べていない |
| R24 | DMRS | 知性化・自己の価値下げ | 他者の理想化・他者の価値下げ | 項の文は、体験の名乗りを低く読み、科学を持ち上げる善悪の判断。DMRS の理想化は信念の体系にも当たり、価値下げは自分か他者に誇張した悪い性質を当てること。読むのは名乗った他者の体験なので他者の側。知性化（感情を避ける抽象化）は文に無い |
| R25 | DMRS | 抑制 | — | DMRS の抑制は、乱れる感情を認めたうえで、考えるのを時を選んで先へ延ばす高い適応の防衛（先延ばしではない）。我慢や根性と語が似ているだけで、働きは重ならない。クック＝グロイターの「影の抑え込み」も DMRS の抑制とは別 |
| R27 | DMRS | 抑制 | — | R25 と同じ。不確かさの中にいられることを我慢と読み違える形は、DMRS の抑制の定義に重ならない |
| R34 | DMRS | 否認 | 否認・予期 | DMRS の予期は、先の問題への現実の別の解と、そのときの感情の動きを前もって思い描き、備えること。項の区別（まだ起きていないことまで含めて構想し、対処する）は予期の定義と重なり、誤解はそれを落としている。当て漏れだった |
| R37 | DMRS | 投影 | 投影・万能 | 項の文は、向きが混ざると「未来をコントロールできると読む」と書く。R32（手順でコントロールできる）に万能を当てたのと同じ形。当て漏れだった |
| R42 | DMRS | 他者の理想化・他者像の分裂 | 他者の理想化 | 分裂は、良い面と悪い面を一つの像にまとめられず、全部良いか全部悪いかで見ること。項の文は「いつでも善い」の一方だけで、悪い側へ振れる形は無い |
| R45 | DMRS | — | 他者の価値下げ | 項の文（別の大前提から演繹する人を、演繹の力が低いと書く）は、R46 に価値下げを当てたのと同じ形。当て漏れだった |
| R07 | WUSCT | E4・E5・E6 | E4 | E5・E6 は、クック＝グロイターが専門家と達成者の防衛に挙げる合理化から読んでいた。DMRS の合理化を外したので、順応の否認（問題を否認し、白く塗る）から読める E4 だけを残す |

