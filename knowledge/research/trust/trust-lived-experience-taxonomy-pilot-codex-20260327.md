# trust の lived experience taxonomy 小規模適用：典型エピソードへの仮適用

Issue: #23  
Parent: #6  
作成日: 2026-03-27  
作成: Codex

## 0. 位置づけ

本稿は [trust-lived-experience-taxonomy-codex-20260327.md](/knowledge/research/trust/trust-lived-experience-taxonomy-codex-20260327.md) で提案した暫定 taxonomy の小規模適用版である。重要なのは、ここで扱うのが **raw interview data ではなく、既存 deep dive から抽出した典型エピソード** だという点である。したがって本稿は妥当性検証ではなく、コードブックの粗さ・重なり・使いにくさを確認するための pilot である。

## 1. 適用対象

次の 5 つの典型エピソードに仮適用する。

1. **愛着ベースの安定した委譲**  
   出典: [trust-attachment-deep-dive-codex-20260326.md](/knowledge/research/trust/trust-attachment-deep-dive-codex-20260326.md)

2. **裏切り後の関係修復前夜**  
   出典: [trust-repair-cross-domain-deep-dive-codex-20260326.md](/knowledge/research/trust/trust-repair-cross-domain-deep-dive-codex-20260326.md)

3. **gaslighting による self-trust erosion**  
   出典: [trust-gaslighting-cross-domain-deep-dive-codex-20260327.md](/knowledge/research/trust/trust-gaslighting-cross-domain-deep-dive-codex-20260327.md)

4. **medical gaslighting 後の institutional distrust**  
   出典: [trust-gaslighting-cross-domain-deep-dive-codex-20260327.md](/knowledge/research/trust/trust-gaslighting-cross-domain-deep-dive-codex-20260327.md), [trust-institutional-repair-deep-dive-codex-20260327.md](/knowledge/research/trust/trust-institutional-repair-deep-dive-codex-20260327.md)

5. **高リスク AI 支援に対する条件付き reliance**  
   出典: [trust-ai-deep-dive-codex-20260326.md](/knowledge/research/trust/trust-ai-deep-dive-codex-20260326.md), [trust-ai-measurement-redesign-codex-20260327.md](/knowledge/research/trust/trust-ai-measurement-redesign-codex-20260327.md)

## 2. 適用フォーマット

各エピソードについて次を記述する。

- 位相: trust / caution / distrust / mistrust / repaired trust
- 九次元の簡易コード
- コメント: 何が書きにくかったか、どこで次元が重なったか

九次元の簡易コードは以下を使う。

- 警戒トーン: `H0-H2`
- 委譲感: `D0-D2`
- 可逆性: `R0-R2`
- 身体局在: `B-` は記述なし、`B+` は記述あり
- 時間性: `T1` 瞬間, `T2` 反復蓄積, `T3` 急落, `T4` 徐々な侵食
- 自己感: `S-open / S-supported / S-exposed / S-shrunk / S-doubting`
- 他者感/対象感: `O-readable / O-opaque-but-approachable / O-opaque-and-avoid / O-systemic-opacity`
- 解釈権: `A-self / A-shared / A-other / A-institution`
- 再依存可能性: `P0-P3`

## 3. パイロット適用

### 3.1 愛着ベースの安定した委譲

- **位相**: trust
- **コード**: `H2 D2 R1 B+ T2 S-supported O-opaque-but-approachable A-shared P3`
- **記述**:
  苦痛時に相手が戻ってくることを前提に、全面監視なしで依存できる。完全可逆ではないが、関係は安定的で、相手の全意図を読めなくても近づける。
- **コメント**:
  `S-supported` と `O-opaque-but-approachable` の組み合わせは、愛着 security の記述に相性が良い。`R1` か `R2` かは関係段階で揺れやすい。

### 3.2 裏切り後の関係修復前夜

- **位相**: mistrust / wounded trust
- **コード**: `H0 D0 R0 B+ T3 S-exposed O-readable A-self P1`
- **記述**:
  相手の危険性はかなり読めており、監視は高い。委譲はほぼ停止し、再依存は条件付きでしか想像できない。身体の硬さと撤退衝動が強い。
- **コメント**:
  `O-readable` なのに trust がないケースを区別できる点は taxonomy の強み。`mistrust` と `distrust` の境目はエピソードの語り方次第で揺れる。

### 3.3 gaslighting による self-trust erosion

- **位相**: mistrust
- **コード**: `H0 D0 R0 B+ T4 S-doubting O-readable A-other P0`
- **記述**:
  問題は相手の危険だけでなく、自分の知覚・記憶・判断を出発点にできなくなることにある。相手の解釈が優勢になり、自己の interpretive authority が失われる。
- **コメント**:
  このケースでは `A-other` が核心で、taxonomy が gaslighting を他の trust 低下と区別するのに有効。`他者感` は相手が読めるのに抵抗できない、という逆説を表す必要がある。

### 3.4 medical gaslighting 後の institutional distrust

- **位相**: distrust / mistrust
- **コード**: `H0 D0 R0 B+ T4 S-doubting O-systemic-opacity A-institution P0`
- **記述**:
  個々の医師だけでなく、制度全体が自分の語りを受け止めない感じが残る。説明はあるが intelligible ではなく、appeal route も見えない。制度への再依存可能性がほぼない。
- **コメント**:
  `A-institution` と `O-systemic-opacity` が、対人 gaslighting と制度 distrust を分けるのに有用。身体局在は間接的だが、医療文脈ではむしろ身体症状との二重化が起きる。

### 3.5 高リスク AI 支援に対する条件付き reliance

- **位相**: caution
- **コード**: `H1 D1 R1 B- T1 S-open O-opaque-and-avoid A-self P2`
- **記述**:
  システムを全面的には信じないが、限定的には使う。自分の判断権を保ちつつ、必要時のみ委譲する。opaque だが完全拒否ではなく、override 前提で関わる。
- **コメント**:
  AI ケースでは `B+/-` の情報が取りにくい。代わりに `A-self` と `P2` が重要になる。taxonomy は使えるが、制度設計や contestability の補助軸が欲しい。

## 4. パイロットから見えた改善点

### 4.1 うまく機能した点

- `解釈権` は gaslighting と institutional distrust を切るのに強い
- `再依存可能性` は repair を static trust と区別するのに強い
- `他者感/対象感` は「読めるが信じない」「読めないが委ねられる」を書き分けやすい

### 4.2 改善が必要な点

- `身体局在` は対人では強いが、制度・AI では間接化される
- `可逆性` は長期関係と瞬間判断で意味が少し変わる
- `位相` の `distrust` と `mistrust` はコード化訓練がないとぶれやすい

### 4.3 追加候補軸

次の軸を後で追加検討してよい。

- **contestability**: 異議申立て可能性
- **normative valence**: 自分が自分の mistrust を正当と感じているか
- **social isolation**: trust failure が孤立感を伴うか

## 5. 暫定結論

- taxonomy は、対人・自己・制度・AI を一つの表で比較するための最初の道具としては機能する。
- とくに `解釈権` と `再依存可能性` は、新規性の高い軸として有効だった。
- 一方で、制度・AI レベルでは `身体局在` の扱いが弱く、`contestability` を補助軸として立てる必要がある。

## 6. 次の論点

1. **AI trust measurement matrix の試作**  
   contestability を含めた計測テンプレートへつなぐ。

2. **institutional repair と gaslighting の接続**  
   dismissive institutions に対する appeal route を lived side から整理する。

3. **実データへの適用**  
   interview / diary / ethnographic vignette に適用し、コード間一致を確認する。
