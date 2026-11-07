# レーン 1 報告 — 実存主義・哲学

**調査**: team-researcher（READ-ONLY）／2026-11-02／ブリーフ `docs/issues/ISS-216-survey-brief.md` §2 レーン 1

## Handoff

```yaml
findings:
- {claim: "Tillich: 「無意味さを受け入れる行為はそれ自体意味ある行為」", evidence: "The Courage to Be (1952) ch.2, ch.6 (ch.6 二次)", confidence: high}
- {claim: "Nagel: 不条理＝真剣さと「全てを恣意的と見うる可能性」の衝突。「英雄主義でも絶望でもなく irony」", evidence: "The Absurd, J.Phil. 68(20) 1971", confidence: high}
- {claim: "Camus: 不条理は「人間の呼びかけと世界の非合理な沈黙の対決」に生まれ「同意されない限りで意味を持つ」", evidence: "Le Mythe de Sisyphe (1942) 第1部 (MS 31–2)", confidence: high}
- {claim: "Sartre: 「ピエールの不在」が café に与えられる。対自＝存在の欠如(manque)→欲望", evidence: "L'Être et le Néant (1943) 1部1章／2部1章(manque 未確認)", confidence: medium}
- {claim: "Heidegger: 故障・欠落で「道具連関が照らし出され」「世界が告知される」(§16)。不安は世界の意味なさを開示(§40)", evidence: "Sein und Zeit (1927) §16 H.75, §40 H.186", confidence: high}
- {claim: "Frankl: 実存的空虚。noö-dynamics＝達成と為すべきことの緊張、精神的健康の前提", evidence: "Man's Search for Meaning (1959) Part II", confidence: medium}
- {claim: "Jaspers: 「限界状況を経験することと実存することは同じ」", evidence: "Philosophie II (1932) 第7章 (逐語二次)", confidence: medium}
- {claim: "Kierkegaard: 絶望＝自己関係の不整合。「この病の可能性は人間が獣に優る点」", evidence: "Sygdommen til Døden (1849) 1部A", confidence: high}
- {claim: "西田: 絶対無の場所", evidence: "「場所」(1926)→『働くものから見るものへ』(1927)、『一般者の自覚的体系』(1930)", confidence: medium}
- {claim: "実存主義の体系的ローカルノートは無い。断片のみ", evidence: "cs evidence/archive/kdt-integration/creativity-review/western-philosophy.md §3；ks core-definitions.md L120；ks CN-009 §7；pd origin-survey-claude-v3.md L329", confidence: high}
```

## 候補表

V1 全行 ✓。西田 [M]、他 [P]。デザイン隣接: Heidegger §16 → Winograd & Flores 1986 ch.3 のみ。

| 候補 | 著者・著作・conf | 何を言っているか | 近い | 違う |
|---|---|---|---|---|
| 在る勇気 | Tillich 1952 ch.2,6・high | 無意味さの受容自体が意味ある行為 | 問1「無意味さは無意味なのでしょうか」に最直接 | 絶対的信仰が答え。探索でなく受容 |
| 不条理(内) | Nagel 1971・high | 衝突は我々の内。外部視点と内側の視点 | 定11「別軸に意味がある」＝視点の二重性 | 構えは irony。探索へ向かわない |
| 不条理(対決) | Camus 1942 第1部・high | 不条理は項でなく対決にある。同意しない限り意味を持つ | 定12「違和感」を解消せず保つ | 保つ＝反抗。別軸の意味は拒否 |
| 不在・欠如 | Sartre 1943・medium | 不在が知覚に「ある」。対自は欠如ゆえ欲望 | 定12「ゼロのはずなのに」ある→投企 | 不在は期待が先に置く。充填不可能 |
| 道具の故障 | Heidegger SZ §16・high | 使えない時に連関が照らし出され世界が告知 | 定12・位10「違和感で見えてくる」 | 開示は指示連関。意味の有無でない |
| 不安 | Heidegger SZ §40・high | 不安は対象なく世界の意味なさを開示 | 定11「無意味さ」が別のものを開く | 本来性への契機。探索の駆動でない |
| noö-dynamics | Frankl 1959 Part II・medium | 緊張を保つことが健康。空虚→意味への意志 | 定12「気になる」を保つ | 緊張は為すべき意味との間。誤差でない |
| 限界状況 | Jaspers 1932 ch.7・medium | 解けない状況に留まることが実存 | 緊張を解消しない構え | 死・苦等の特定状況 |
| 絶望 | Kierkegaard 1849・high | 絶望(負)は精神の優位のしるし | 問1: 負が別次元を示す | 解は信仰 |
| 絶対無の場所 | 西田 1926–30・medium | 無が有を成立させる場所 | 定6 の構図 | 誤差・違和感の記述なし |

## 見送り

- Levinas・Buber: 他者論、接点薄（cs DR-D13: Levinas は CA）／Merleau-Ponty: レーン 3 へ
- Marcel: problème/mystère 近いが章節未確認／九鬼 1935: 偶然→「驚異」、「二元の邂逅」句未確認

## 問い

- clarifying: 定11「別軸に意味がある」の「意味」は生の意味（Tillich・Frankl）か視点（Nagel）か
- probing: CN-009 §7 の西田出典（1917）は「絶対無の場所」（1926–30）と年代不整合
- challenging: cs western-philosophy.md §3.3「absurd からの意味創造と構造的一致」と断定済み。中立性原則と衝突

## insights

- 「無意味さ＝別軸の意味」を直接言うのは Tillich と Nagel。「別軸」は別物（信仰／外部視点）
- 「違和感→探索」を言うのは Sartre と Heidegger §16 のみ。Camus・Nagel は保つが探索しない
- 「緊張を保つ」は Camus・Frankl・Jaspers で三様。予測・誤差の語は無く、レーン 2 接続は未踏
