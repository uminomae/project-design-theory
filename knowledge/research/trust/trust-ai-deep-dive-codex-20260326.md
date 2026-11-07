# AIへの信頼：reliance・calibration・trustworthiness の再整理

Issue: #9  
Parent: #6  
作成日: 2026-03-26  
作成: Codex

## 0. エグゼクティブサマリー

AI への信頼研究は、対人信頼研究をそのまま機械に移植したものではない。中心課題は、ユーザが AI や自動化に対してどれだけ、どの条件で、どのように依存するかを適切に校正することである。このため HCI と human factors では、trust はしばしば reliance を媒介する心理状態として扱われる。他方、哲学や組織論の trust 論に近づくと、vulnerability、motives、betrayal、trustworthiness といった概念が戻ってくる。問題は、この二つの語りが混線しやすいことにある。

最低限の区別は四つ必要である。第一に **trust** と **reliance**。reliance は相手が人間でなくても成立する依存であり、trust は通常、制御不能性と vulnerability を伴うより厚い概念として使われる。第二に **trust** と **trustworthiness**。前者はユーザ側の期待や姿勢、後者はシステム側の実際の性質である。第三に **trust** と **calibration**。高 trust がよいのではなく、性能・限界・文脈に見合った依存がよい。第四に **trust** と **liking**。好感度や anthropomorphism は trust に影響するが、それ自体は trust ではない。

AI 研究では、説明可能性や透明性が信頼を上げるとよく言われるが、実際には「何をどこまで説明するか」が重要であり、説明が多いほど trust が上がるわけではない。むしろ、説明が false reassurance になれば overtrust を招く。また、trust 研究の多くは self-report に偏っており、実際の reliance behavior や故障時の re-calibration を十分に追えていない。survey で高 trust と答えたユーザが、現場で適切に監督するとは限らない。

したがって、AI trust を再整理するなら、「人間信頼の縮小版」とみなすより、対人信頼と技術依存の重なり領域として扱う方がよい。相手の善意や道徳責任主体性が薄い場合でも、ユーザは擬人化や社会的手がかりに基づいて quasi-social trust を形成する。ここに対人信頼のメカニズムが部分流入する。他方で、AI trust の設計論は性能限界、故障モード、監督可能性、責任分配、institutional trust に強く依存するため、純粋な対人モデルでは足りない。

## 1. 中核概念の整理

### 1.1 trust

- 多くの HCI 論文では、trust は「システムに依存することを方向づける心理状態」として扱われる。
- Lee & See 以降、この概念は appropriate reliance の設計問題と結びついている。

### 1.2 reliance

- reliance は、対象の motive を問わず成立する依存である。
- 一部の哲学者は、AI には善意や道徳的責任主体性がない以上、厳密には trust ではなく reliance と呼ぶべきだと考える。
- しかし実際のユーザ体験では、AI はしばしば social actor 的に扱われるため、完全分離は難しい。

### 1.3 calibration

- calibration は、システム能力と利用者依存が適合している状態である。
- undertrust は有用な支援を活かせず、overtrust は監視不足や automation bias を生む。

### 1.4 trustworthiness

- trustworthiness はシステムや提供主体の性質であり、精度、頑健性、透明性、監査可能性、責任所在、フェイルセーフ設計を含む。
- ユーザの trust が高くても trustworthiness が高いとは限らず、その逆もある。

## 2. 人への信頼との連続性と非連続性

### 2.1 連続する部分

- 不確実性下での依存
- vulnerability の受容
- 評判、外見、説明、過去の失敗経験による更新
- anthropomorphism による social cue の流入

### 2.2 連続しない部分

- AI に善意や moral commitment を帰属しない立場が強い
- betrayal の意味が人間相手と異なる
- システム trust は個別 UI のみならず、開発組織、規制、ブランド、配備制度に依存する

### 2.3 暫定整理

- narrow な工学文脈では `trust ≈ calibrated reliance`
- wider な社会技術文脈では `trust = user expectation + reliance + institutional mediation`
- したがって、AI trust は一つの概念ではなく、少なくとも対話相手としての AI、道具としての AI、制度に埋め込まれた AI を区別すべきである

## 3. 測定

### 3.1 self-report

- 最も多い方法だが、態度表明を測るにとどまりやすい
- 好感、安心、 perceived reliability と混線しやすい

### 3.2 reliance behavior

- 推奨受容率、override 率、監視頻度、故障後の再依存など
- 行動的には強いが、なぜその行動になったかの解釈は単純でない

### 3.3 performance-linked metrics

- task success、error detection、response latency
- trust のみならず workload や expertise も混入する

### 3.4 mixed methods

- 実験後インタビュー、think-aloud、interaction log を組み合わせると校正の失敗が見えやすい
- ただし lived trust の経験構造までは通常取れていない

## 4. 何が trust を動かすか

### 4.1 system factors

- reliability
- robustness
- transparency / explainability
- predictability
- consistency
- controllability

### 4.2 user factors

- disposition to trust
- domain expertise
- prior automation experience
- AI literacy
- risk tolerance

### 4.3 context factors

- high-stakes か low-stakes か
- time pressure
- task ambiguity
- accountability arrangement
- 失敗コスト

## 5. 失敗モード

### 5.1 overtrust

- 監視低下
- automation bias
- explanation の過信
- out-of-distribution 失敗への盲目

### 5.2 undertrust

- 有用な支援の不使用
- 過剰な manual override
- 学習支援や decision support の拒絶

### 5.3 misplaced trust

- AI そのものではなく、UI の滑らかさやブランド、擬人的表現に trust を置いてしまう
- 高 trust が system trustworthiness の誤認を隠す

## 6. 設計論

### 6.1 目標は trust maximization ではない

- 目標は適切な reliance の校正である
- trust を「上げる」設計はときに危険

### 6.2 有効な方向

- 限界条件の明示
- uncertainty communication
- failure history の可視化
- user intervention point の設計
- accountability chain の透明化

### 6.3 注意点

- explanation は説明量より、判断に有効な粒度が重要
- 擬人化は onboarding に効いても、責任の所在を曖昧にしうる
- 一回の成功で築かれた trust と、一回の catastrophic failure で崩れる trust は対称でない

## 7. 主要論争

1. AI への trust は本当に trust か、それとも reliance か。  
2. calibrating trust と increasing adoption を同一目標にしてよいか。  
3. trustworthy AI の原則群は user trust を生むのか、それとも制度設計の条件にすぎないのか。  
4. anthropomorphism は trust を助けるのか、誤誘導するのか。  
5. measurement は self-report 中心でよいのか。  

## 8. 重要文献

- Lee, J. D., & See, K. A. (2004). “Trust in automation: designing for appropriate reliance.” _Human Factors_, 46(1), 50-80.  
  DOI: [10.1518/hfes.46.1.50_30392](https://doi.org/10.1518/hfes.46.1.50_30392)  
  trust in automation の古典。appropriate reliance を設計目標に据えた。

- Hoff, K. A., & Bashir, M. (2015). “Trust in automation: integrating empirical evidence on factors that influence trust.” _Human Factors_, 57(3), 407-434.  
  DOI: [10.1177/0018720814547570](https://doi.org/10.1177/0018720814547570)  
  dispositional / situational / learned trust の三層整理。

- Kohn, S. C., de Visser, E., Wiese, E., Lee, Y.-C., & Shaw, T. H. (2021). “Measurement of Trust in Automation: A Narrative Review and Reference Guide.” _Frontiers in Psychology_, 12, 604977.  
  DOI: [10.3389/fpsyg.2021.604977](https://doi.org/10.3389/fpsyg.2021.604977)  
  測定法の現在地をつかむのに最重要。

- Chiou, E. K., & Lee, J. D. (2023). “Trusting Automation: Designing for Responsivity and Resilience.” _Human Factors_, 65(1), 137-165.  
  DOI: [10.1177/00187208211009995](https://doi.org/10.1177/00187208211009995)  
  calibration 論の更新。

- Glikson, E., & Woolley, A. W. (2020). “Human Trust in Artificial Intelligence: Review of Empirical Research.” _Academy of Management Annals_, 14(2), 627-660.  
  DOI: [10.5465/annals.2018.0057](https://doi.org/10.5465/annals.2018.0057)  
  AI trust の empirical literature を対人 trust 研究とつないだ代表的レビュー。

- Bach, T. A., Khan, A., Hallock, H., Beltrão, G., & Sousa, S. (2022). “A Systematic Literature Review of User Trust in AI-Enabled Systems: An HCI Perspective.” _International Journal of Human-Computer Interaction_.  
  DOI: [10.1080/10447318.2022.2138826](https://doi.org/10.1080/10447318.2022.2138826)  
  AI-enabled systems に限定した HCI 系 systematic review。

- Gulati, S., McDonagh, J., Sousa, S. C., & Lamas, D. (2024). “Trust models and theories in human-computer interaction: A systematic literature review.” _Computers in Human Behavior Reports_, 16, 100495.  
  DOI: [10.1016/j.chbr.2024.100495](https://doi.org/10.1016/j.chbr.2024.100495)  
  HCI trust framework の俯瞰。理論の分散と測定不足を指摘。

- McKnight, D. H., & Chervany, N. L. (2001/2002). “What Trust Means in E-Commerce Customer Relationships.” _International Journal of Electronic Commerce_, 6(2), 35-59.  
  DOI: [10.1080/10864415.2001.11044235](https://doi.org/10.1080/10864415.2001.11044235)  
  institution-based trust、trusting beliefs、trusting intentions の区別は AI 文脈でも有効。

- McKnight, D. H., Cummings, L. L., & Chervany, N. L. (1998). “Initial trust formation in new organizational relationships.” _Academy of Management Review_, 23(3), 473-490.  
  DOI: [10.5465/AMR.1998.926622](https://doi.org/10.5465/AMR.1998.926622)  
  初期 trust 形成モデル。初見 AI interaction に応用しやすい。

## 9. 暫定結論

- AI trust 研究の中心問題は、信頼を高めることではなく、依存を適切に校正することにある。
- 人間信頼の概念は依然 useful だが、そのまま移植すると motive や betrayal の論点でズレる。
- 研究上は self-report 偏重が強く、実際の reliance dynamics と故障後の repair をもっと追う必要がある。
- 設計上は trust narrative よりも、system trustworthiness と institutional accountability をどう visible にするかが重要である。
