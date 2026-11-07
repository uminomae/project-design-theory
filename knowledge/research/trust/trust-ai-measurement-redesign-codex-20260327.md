# AI trust の測定再設計：self-report 偏重から calibration・reliance・uncertainty understanding へ

Issue: #25  
Parent: #6  
作成日: 2026-03-27  
作成: Codex

## 0. エグゼクティブサマリー

AI trust 研究の測定は長く self-report に偏ってきた。ユーザに「このシステムをどれくらい信頼しますか」と尋ねる方法は簡便で比較しやすいが、それが実際の reliance behavior、故障後の recalibration、uncertainty の理解、override の適切さ、appeal の可能性を十分に捉えるとは限らない。むしろ多くの場合、self-report は liking、perceived competence、anthropomorphism、brand impression、task success をまとめて測ってしまっている。その結果、研究上は trust が測れているつもりでも、実際には「どれくらい好印象か」や「どれくらい使いやすいか」を測っているだけになりやすい。

この問題は高リスク文脈で特に深刻である。高 trust と答えた利用者が、実運用では過剰依存して automation bias に陥ることもあるし、逆に survey 上は慎重でも、時間圧の下では無批判に推奨に従うこともある。したがって AI trust measurement の再設計では、「trust を直接一個の数値にする」発想から離れ、少なくとも五つの層を区別して測る必要がある。1) 態度表明、2) 行動的 reliance、3) 校正精度、4) 不確実性理解、5) 異議申立て・override capability、である。

この再設計で重要なのは、trust と trustworthiness を測定上も分けることである。ユーザがシステムを高く trust していることと、システムが実際に trust に値することは別問題である。従来の研究は user-side trust を測る一方、system-side trustworthiness は accuracy の単一指標に押し込めがちだった。しかし本来は、性能、頑健性、境界条件、説明可能性、監査可能性、異議申立て経路、責任分配、human override design を別々に評価し、それに対するユーザの reliance pattern を組み合わせて見るべきである。

このレビューの提案は単純である。self-report は残す。ただし主役にしない。代わりに、態度指標・行動指標・理解指標・制度指標を組み合わせた multiaxial measurement に移行する。具体的には、推奨受容率や override 率だけでなく、「どの程度 system limitation を理解しているか」「不確実性表現をどう解釈したか」「異議申立てが可能だと知っているか」「failure 後に reliance をどう更新したか」を測るべきである。これにより、high trust という一枚岩のラベルでは見えない `well-calibrated trust`, `misplaced trust`, `compliant reliance`, `suspicious but dependent use` を区別できる。

## 1. 何が現状の問題か

### 1.1 self-report の過大依存

- Kohn らの narrative review が示す通り、trust in automation 研究は self-report 尺度が非常に多い。
- しかし self-report は態度表明であり、実際の reliance と一致しないことがある。
- Chita-Tegmark 系の批判でも、trust measure 自体の妥当性が問題になっている。

### 1.2 測っているものの混線

- trust
- perceived reliability
- ease of use
- satisfaction
- anthropomorphic liking
- familiarity

これらが一つの質問紙に混ざると、概念が曖昧になる。

### 1.3 高 trust を善とみなしがち

- Lee & See 以来、目標は trust maximization ではなく appropriate reliance である。
- しかし実務では adoption を増やすために「trust を高める」方向へ流れやすい。
- このズレが測定の設計にも反映されている。

## 2. 再設計の基本原則

### 2.1 trust と reliance を分ける

- trust は態度・期待・構え
- reliance は実際の委譲行動

両者を別々に測ることで、たとえば「疑っているが使う」「信じているが使わない」を区別できる。

### 2.2 trust と calibration を分ける

- calibration は、利用者依存が system capability とどれだけ一致しているか
- したがって calibration は user-only variable ではなく、system performance とセットで評価すべき

### 2.3 trust と trustworthiness を分ける

- trustworthiness は設計・性能・ガバナンスの側の性質
- user trust の高さだけでは trustworthiness の代理にならない

### 2.4 high-stakes / low-stakes を分ける

- 医療、司法、雇用、教育など高リスク領域では、same score でも意味が違う
- 低リスク推薦システムの trust measure をそのまま高リスク意思決定支援に使うべきでない

## 3. 提案する五層測定

### 3.1 層1: 態度表明

- 信頼しているか
- どれくらい安心感があるか
- どれくらい使いたいか

役割:
- 初期印象と主観評価を取る

限界:
- 行動とずれる
- social desirability や framing effect の影響を受ける

### 3.2 層2: 行動的 reliance

- 推奨受容率
- override 率
- automation disengagement timing
- fallback 行動
- failure 後の再依存

役割:
- 実際の委譲行動を取る

限界:
- expertise や workload の影響を受ける

### 3.3 層3: calibration

- system accuracy と user reliance の一致度
- correct acceptance / correct rejection
- misuse / disuse / abuse の区別
- overtrust / undertrust / well-calibrated trust

役割:
- trust を normative に評価する

限界:
- system performance benchmark が必要

### 3.4 層4: uncertainty understanding

- 出力の確信度を理解しているか
- limitation / boundary condition を理解しているか
- explanation を reassurance でなく evidence として読めているか

役割:
- explanation が本当に calibration に効いているかを見る

限界:
- comprehension test の設計が難しい

### 3.5 層5: challenge / appeal / override capability

- ユーザは異議申立てできると知っているか
- 実際に challenge できるか
- override のコストは適切か
- contestability が design に埋め込まれているか

役割:
- 特に high-stakes AI で重要
- institutional trust と結びつく

限界:
- ラボ研究ではしばしば未測定

## 4. 推奨される measurement matrix

各研究・各システムについて、最低限次を行列で持つ。

1. **User attitude**
   trust, caution, anxiety, perceived reliability

2. **Observed reliance**
   accept, reject, override, seek second opinion, abandon

3. **System capability**
   accuracy, false positive/negative, robustness, domain boundary

4. **Calibration score**
   reliance と capability の一致

5. **Uncertainty comprehension**
   user が limitation を理解しているか

6. **Contestability**
   appeal / override / explanation request が可能か

## 5. 指標例

### 5.1 行動指標

- recommendation acceptance ratio
- delayed override rate
- blind compliance rate
- selective reliance rate
- post-failure recovery curve

### 5.2 理解指標

- limitation recall
- confidence interpretation accuracy
- uncertainty verbalization quality
- boundary-condition identification

### 5.3 制度指標

- appeal visibility
- override friction
- audit trail availability
- human escalation availability

## 6. 文脈差

### 6.1 low-stakes

- 推薦、要約、日常支援
- convenience と trust が混線しやすい

### 6.2 high-stakes

- 医療、採用、信用審査、司法、教育評価
- trust の適切さは fairness, accountability, appeal と結びつく
- ここでは contestability 指標を必須にすべき

## 7. 何を捨てるべきでないか

- self-report を完全に捨てる必要はない
- trust は lived attitude を含むため、主観報告は依然必要
- ただし単独指標として扱わない

## 8. 主要文献

- Lee, J. D., & See, K. A. (2004). “Trust in automation: designing for appropriate reliance.” _Human Factors_, 46(1), 50-80.  
  DOI: [10.1518/hfes.46.1.50_30392](https://doi.org/10.1518/hfes.46.1.50_30392)  
  measurement redesignでも出発点になる古典。

- Hoff, K. A., & Bashir, M. (2015). “Trust in automation: integrating empirical evidence on factors that influence trust.” _Human Factors_, 57(3), 407-434.  
  DOI: [10.1177/0018720814547570](https://doi.org/10.1177/0018720814547570)  
  dispositional / situational / learned trust を整理。

- Kohn, S. C., de Visser, E., Wiese, E., Lee, Y.-C., & Shaw, T. H. (2021). “Measurement of Trust in Automation: A Narrative Review and Reference Guide.” _Frontiers in Psychology_, 12, 604977.  
  DOI: [10.3389/fpsyg.2021.604977](https://doi.org/10.3389/fpsyg.2021.604977)  
  既存尺度の全体像と限界。

- Sheridan, T. B. (2019). “Individual Differences in Attributes of Trust in Automation: Measurement and Application to System Design.” _Frontiers in Psychology_, 10, 1117.  
  DOI: [10.3389/fpsyg.2019.01117](https://doi.org/10.3389/fpsyg.2019.01117)  
  trust 属性の個人差と measurement の橋渡し。

- Chiou, E. K., & Lee, J. D. (2023). “Trusting Automation: Designing for Responsivity and Resilience.” _Human Factors_, 65(1), 137-165.  
  DOI: [10.1177/00187208211009995](https://doi.org/10.1177/00187208211009995)  
  calibration 論の更新。

- Lingg, N., & Demiris, Y. (2023). “Beyond Self-Report: A Continuous Trust Measurement Device for HRI.” _RO-MAN 2023_.  
  DOI: [10.1109/RO-MAN57019.2023.10309660](https://doi.org/10.1109/RO-MAN57019.2023.10309660)  
  continuous measurement の方向性を示す近年研究。

- Glikson, E., & Woolley, A. W. (2020). “Human Trust in Artificial Intelligence: Review of Empirical Research.” _Academy of Management Annals_, 14(2), 627-660.  
  DOI: [10.5465/annals.2018.0057](https://doi.org/10.5465/annals.2018.0057)  
  AI trust 研究の測定問題を broader trust research とつなぐ。

- Bach, T. A., Khan, A., Hallock, H., Beltrão, G., & Sousa, S. (2022). “A Systematic Literature Review of User Trust in AI-Enabled Systems: An HCI Perspective.”  
  DOI: [10.1080/10447318.2022.2138826](https://doi.org/10.1080/10447318.2022.2138826)  
  HCI 視点からの整理。

- trust-ai-deep-dive-codex-20260326.md  
  このリポジトリ内の AI trust 理論整理の基盤。

- trust-lived-experience-taxonomy-codex-20260327.md  
  lived attitude を測る次元の補助線。

## 9. 暫定結論

- AI trust measurement の主問題は、trust を一つの self-report score に押し込めることにある。
- 再設計では、態度 / 行動 / 校正 / 理解 / contestability の五層を分けるべきである。
- high-stakes AI では、appeal と override の設計が trust measurement の中核に入る。
- trustworthiness を user trust の代理で測る発想は避けるべきである。

## 10. 次の論点

1. **institutional trust repair の精密化**  
   trust repair レーンと medical gaslighting レーンをつなぐ。

2. **taxonomy の小規模適用**  
   lived experience taxonomy を既存 interview に仮適用する。

3. **AI trust measurement matrix の試作**  
   実験設計レベルのテンプレートに落とし込む。
