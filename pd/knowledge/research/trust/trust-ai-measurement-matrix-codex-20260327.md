# AI trust measurement matrix の試作：実験・評価設計で使う trust / reliance / calibration / contestability 行列

Issue: #27  
Parent: #6  
作成日: 2026-03-27  
作成: Codex

## 0. エグゼクティブサマリー

AI trust を測る研究や実務評価は、しばしば「このシステムをどれくらい信頼しますか」という self-report に依存してきた。しかし、既存レポートで整理したとおり、AI trust の中心問題は好感度ではなく、依存の適切な校正である。したがって measurement も、一つの score ではなく、少なくとも `態度 / 行動 / 校正 / 理解 / contestability` の五層を分けて設計する必要がある。本稿は、その考え方を実験・評価設計で使える matrix に落とし込むための試作である。

この matrix で重要なのは、user-side trust と system-side trustworthiness を同一セルに入れないことだ。ユーザが高く trust していることと、システムが trust に値することは別であり、どちらも単独では不十分である。よって matrix では、左側に user-side 指標、右側に system-side 指標、中央に calibration 評価を置く。こうすることで、たとえば「高 trust だが低 trustworthiness」「低 trust だが高 trustworthiness」「理解不足による misplaced trust」「override 可能だが実際にはできない」といったパターンを識別できる。

さらに、本稿では `high-stakes / low-stakes` と `human-in-the-loop / full automation` の二軸で測定設計を分岐させる。low-stakes の要約支援と high-stakes の医療・司法・採用支援では、同じ trust score に意味がないからである。高リスク文脈では、とくに appeal route、override friction、uncertainty comprehension を必須の測定要素にすべきである。

## 1. Matrix の基本構造

### 1.1 五層

1. **態度**  
   trust, caution, perceived reliability, anxiety

2. **行動**  
   accept, reject, override, abandon, seek second opinion

3. **校正**  
   overtrust, undertrust, well-calibrated trust

4. **理解**  
   uncertainty, limitation, boundary condition, failure mode の理解

5. **contestability**  
   appeal, override, explanation request, human escalation

### 1.2 user-side と system-side の分離

- **user-side**
  - self-report
  - observed reliance
  - confidence interpretation
  - override usage

- **system-side**
  - accuracy / error pattern
  - robustness / OOD behavior
  - explanation quality
  - appeal pathway availability
  - auditability

### 1.3 中央の calibration 評価

- user behavior が system capability に適合しているか
- mismatch がどの type か
  - blind compliance
  - chronic underuse
  - selective, well-targeted use
  - explanation-induced false reassurance

## 2. Core Measurement Matrix

| 層 | user-side 指標 | system-side 指標 | calibration の見方 | 主な失敗モード | 推奨方法 |
|---|---|---|---|---|---|
| 態度 | trust rating, caution, anxiety | perceived transparency に対応する設計の有無 | 態度が能力を過大評価していないか | liking を trust と誤認 | 短尺度 + vignette |
| 行動 | acceptance, override, abandon, second opinion | task difficulty, actual model accuracy | reliance が性能に合っているか | automation bias, disuse | task log, event trace |
| 校正 | post-failure update, selective reliance | failure type, confidence reliability | high capability で受容、low capability で拒否できるか | overtrust, undertrust | repeated trials |
| 理解 | limitation recall, uncertainty interpretation | explanation quality, uncertainty display | ユーザが limitation を正しく理解しているか | false reassurance | comprehension probe |
| contestability | appeal use, override completion, escalation request | appeal route, override friction, audit trail | challenge 可能性が実在しているか | nominal appeal only | workflow test |

## 3. 文脈別テンプレート

### 3.1 Low-Stakes / Human-in-the-Loop

例:
- 要約支援
- 推薦支援
- 執筆補助

必須項目:
- trust self-report
- recommendation acceptance ratio
- override / edit distance
- limitation recall

重視しなくてよい項目:
- formal appeal route

### 3.2 High-Stakes / Human-in-the-Loop

例:
- 医療意思決定支援
- 採用スクリーニング支援
- 司法リスク評価支援

必須項目:
- trust self-report
- selective reliance
- override success
- uncertainty interpretation
- appeal visibility
- human escalation availability

### 3.3 Low-Stakes / Full Automation

例:
- 自動ルーティング
- 軽微な UI personalization

必須項目:
- user dissatisfaction signal
- opt-out / override availability
- explanation-on-demand

### 3.4 High-Stakes / Full Automation

原則:
- full automation 自体が高い正当化負荷を負う

必須項目:
- appeals
- external auditability
- contestability
- harm monitoring
- fairness monitoring
- post-decision review

ここでは trust measure より governance measure の比重が高い。

## 4. 最低限チェックリスト

### 4.1 実験設計前

- `trust` と `trustworthiness` を別変数として定義したか
- high-stakes / low-stakes を明示したか
- override と appeal の有無を仕様として明記したか
- failure trial を入れたか

### 4.2 実験中

- self-report だけで終わっていないか
- acceptance / override / delay を記録しているか
- uncertainty comprehension probe を入れているか
- post-failure recalibration を観察しているか

### 4.3 実験後

- high trust が well-calibrated trust だったかを再計算したか
- explanation が reassurance に化けていないかを確認したか
- low trust が合理的 caution なのか mere dislike なのかを分けたか

## 5. 推奨テンプレート

### 5.1 最小セット

1. trust self-report  
2. acceptance / override log  
3. known-ground-truth trials  
4. uncertainty comprehension questions  
5. post-failure recalibration block  

### 5.2 拡張セット

1. think-aloud or post-task interview  
2. appeal / challenge simulation  
3. audit trail review task  
4. longitudinal return-use measure  

## 6. 評価の読み方

### 6.1 high trust

- 良いとは限らない
- calibration と contestability が伴っているかを見る

### 6.2 low trust

- 悪いとは限らない
- system が実際に trust に値しない場合、低 trust は適切かもしれない

### 6.3 mixed pattern

- high self-report + low override = overtrust 候補
- low self-report + high dependence = constrained reliance 候補
- medium trust + selective override = well-calibrated caution 候補

## 7. Matrix の使い方

### 7.1 研究者向け

- 実験デザイン前の穴埋め
- 概念混線の予防

### 7.2 実務向け

- プロダクト評価
- safety review
- governance review

### 7.3 制度向け

- AI 導入審査
- appeal route の妥当性チェック
- trust narrative と trustworthiness evidence の分離

## 8. 主要参照

- [trust-ai-measurement-redesign-codex-20260327.md](/pd/knowledge/research/trust/trust-ai-measurement-redesign-codex-20260327.md)
- [trust-ai-deep-dive-codex-20260326.md](/pd/knowledge/research/trust/trust-ai-deep-dive-codex-20260326.md)
- [trust-lived-experience-taxonomy-codex-20260327.md](/pd/knowledge/research/trust/trust-lived-experience-taxonomy-codex-20260327.md)
- Kohn et al. (2021). “Measurement of Trust in Automation: A Narrative Review and Reference Guide.” DOI: [10.3389/fpsyg.2021.604977](https://doi.org/10.3389/fpsyg.2021.604977)
- Sheridan (2019). “Individual Differences in Attributes of Trust in Automation.” DOI: [10.3389/fpsyg.2019.01117](https://doi.org/10.3389/fpsyg.2019.01117)
- Lingg & Demiris (2023). “Beyond Self-Report: A Continuous Trust Measurement Device for HRI.” DOI: [10.1109/RO-MAN57019.2023.10309660](https://doi.org/10.1109/RO-MAN57019.2023.10309660)

## 9. 暫定結論

- AI trust measurement は一個の score で閉じるべきでない。
- 実用上は、五層 matrix と文脈別テンプレートを持つ方が遥かに使いやすい。
- high-stakes AI では contestability が trust measurement の中核に入る。

## 10. 次の論点

1. **institutional repair と gaslighting の接続**  
   appeal pathway を中心に制度側の dismissal を詰める。

2. **taxonomy の実データ適用**  
   実 interview や fieldnote で code agreement を確認する。

3. **matrix の試運用**  
   既存の AI study を一つ選び、retrofit 的に当ててみる。
