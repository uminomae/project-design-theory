# 信頼とは何か：学際的見取り図（広域レビュー）

## 使用モデルと記録
- このレビューの統合・執筆に使ったモデル名: **GPT-5.4 Pro**
- 文献探索: **ライブのウェブ検索** と公開ソースの参照
- 記録できる粒度: 私から確認できるモデル名は **GPT-5.4 Pro** までです。内部ビルド番号や、先に起動された Deep Research 側の内部ルーティング・モデル切替履歴は、この画面からは確認できません。  
- したがって、以下では **「この回答の統合・執筆は GPT-5.4 Pro」** を明示し、出典はすべて本文中に示します。

## 0. エグゼクティブサマリー

「信頼」は、単一の本質をもつ一枚岩の概念ではない。少なくとも主要研究領域を横断すると、信頼は、**①相手に自分を委ねる態度、②相手や制度が期待に応えるという予期、③脆弱性を引き受ける意思、④関係の質、⑤社会秩序や制度を支える資本、⑥知識を受け取るための認識論的前提、⑦技術への reliance を調整する潜在状態、⑧主観的に「身を預けられる」と感じる lived experience** として、別々に記述されている。哲学と組織論では「脆弱性を伴う態度」や「相手に自分を委ねること」が強く、社会学では信頼は関係・ネットワーク・社会資本と結びつき、政治学では制度やアクターへの評価的志向として扱われ、経済学では不確実性下での委任・互酬性の問題として操作化され、HCI/自動化研究では「適切に reliance するための較正対象」として扱われることが多いです。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

この広域レビューで見えてくる第一の軸は、**信頼を“内的状態”として見るか、“関係”として見るか、“制度”として見るか** という違いである。第二の軸は、**対象の違い** で、他者・見知らぬ他人・親密な相手・専門家・医療・科学・国家・AI・自己では、信頼の構造がかなり変わる。第三の軸は、**メカニズムの違い** で、感情・期待・学習・規範・評価・予測処理・社会化・愛着・権力関係のどれを中心に置くかが分野ごとに異なる。第四の軸は、**測定法の違い** で、質問紙・サーベイ・行動ゲーム・縦断研究・臨床面接・エスノグラフィー・微視的現象学インタビュー・生理指標・脳画像は、それぞれ別のものを「信頼」として捉えている。特に trust game は便利だが、「純粋な信頼」ではなく、リスク選好、互恵期待、社会的選好、裏切り回避などが混ざるという批判が強い。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11088264/))

神経現象学は、この地図の中で特異な位置にある。というのも、神経現象学は信頼そのものの完成した下位分野というより、**一人称の経験記述と三人称の神経・行動データを相互拘束させる方法論** だからである。既存文献をみる限り、「信頼の神経現象学」というまとまった研究伝統はまだ薄いが、微視的現象学と神経現象学の方法論、愛着研究、認識論的信頼、社会神経科学を接続すると、「信頼している感じ」「警戒がほどける感じ」「相手の言葉が入ってくる感じ」を、経験サンプリング・誘導面接・生理反応・神経計測と組み合わせて研究する設計は十分に可能である。ここはむしろ今後の深掘り候補として有望です。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

総じて、この段階での最も大きな結論は、**「信頼とは何か」を問うより、「誰が、誰を／何を、どのような脆弱性のもとで、どの方法で信頼と呼んでいるか」を問う方が生産的** だということです。信頼は、感情である場合もあるが、それだけではない。むしろ学際的には、**感情・期待・関係・制度・評価・行動戦略・経験構造が重なり合う複合概念** とみなすのが最も無理が少ないです。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

---

## 1. 分野別マップ

### 1.1 神経現象学（neurophenomenology）
神経現象学は、信頼を最初から単一の心理変数とみなすより、**経験の微細な時間構造** と **神経・行動の微細ダイナミクス** を対応づける枠組みとして有用です。方法論上の核心は、一人称の経験に「訓練されたアクセス」を確保し、それを三人称計測と統合することにあります。既存レビューでは、最大の課題は、経験記述の粒度と神経計測の粒度がずれやすい点だとされています。現時点で「信頼」そのものに特化した神経現象学レビューは目立っておらず、この領域では **近接方法論から慎重に設計する** のが妥当です。信頼はここでは、感情というより **lived experience・身体化された開放性・他者への委ねのプロセス** として扱いやすいです。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

### 1.2 心理学全般
心理学では信頼は単一ではなく、**特性としての trust propensity**、**相手に向けられた対人的信頼**、**状態としての信頼判断**、**親密関係の質** に分かれて研究されます。近年の整理では、信頼には少なくとも trait・expectation・risk・behavior など複数成分があり、質問紙研究でも「自分は他人を信頼しやすいか」と「この相手を信頼するか」は分けて測るべきだとされます。つまり心理学では、信頼は感情でもあるが、それ以上に **期待・特性・判断傾向・関係的評価** としてモデル化されることが多いです。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11088264/))

#### 社会心理学
社会心理学では、信頼はしばしば **不確実性のもとで相手の善意や協力を見込む期待** として扱われます。一般的信頼と特定他者への信頼は区別され、社会的知覚、評判、協力、集団関係と結びつきます。([academic.oup.com](https://academic.oup.com/book/8491/chapter/154319363))

#### パーソナリティ心理学
パーソナリティ領域では、信頼は trait として扱われることがあり、agreeableness などの特性と関連づけられます。ただし、相手の特性知覚も強く効き、近年の研究では、信頼判断は自分の特性だけでなく、**相手の agreeableness 知覚** に大きく左右されることが示されています。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10302358/))

#### 発達心理学
発達心理学では、信頼は **人生初期の安全感・予測可能性・応答性の経験** と深く関わります。Erikson の基本的信頼、愛着理論の internal working models、子どもの selective trust 研究などが中心で、信頼は情動調整・社会認知・他者理解の基盤として位置づけられます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8151212/))

#### 臨床心理学
臨床では、信頼は **対人安全感、認識論的開放性、治療関係、トラウマ後の防衛** として問題になります。特に epistemic trust 研究では、他者からの情報を「自分に関係のある、信頼可能な知識」として受け入れられるかが重要視され、これは精神病理や心理療法の効果と結びつけて論じられています。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10772859/))

#### 認知心理学
認知寄りの見方では、信頼は **不確実性下の予測更新** や **相手の意図・能力の推論** と結びつきます。感情だけでなく、予測、エラー修正、期待更新として扱われるため、学習モデルや意思決定モデルと接続しやすい領域です。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5441232/))

### 1.3 神経科学 / social neuroscience / neuroeconomics
神経科学では、信頼はふつう **社会的リスク下での意思決定** として研究されます。レビューでは、信頼と互恵性は暗黙的・明示的な評価過程に支えられ、社会的不確実性の低減と関係形成に関わると整理されています。fMRI 研究やメタ分析では、信頼判断には insula、striatal reward 系、前頭領域などが関与し、特に裏切り回避や反復的相互作用では異なる神経機構が働くことが示唆されています。古典的には oxytocin 研究が有名ですが、単純な「信頼ホルモン」図式に還元するのは現在では慎重です。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC6705214/))

### 1.4 愛着理論・発達研究
愛着研究では、信頼はしばしば **明示的な信念** というより、他者が利用可能で応答的かどうかに関する **身体化された期待** として現れます。成人愛着のレビューは、安定した関係の維持や破綻の経験が深い情動的力を持つことを強調し、内的作業モデルを通じて対人信頼・不信に持続的影響を与えると整理します。裏切りや虐待などの対人外傷は、信頼の形成だけでなく、その後の修復可能性にも影響します。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-psych-010418-102813))

### 1.5 社会学
社会学では、信頼は **関係に埋め込まれた期待**、**社会秩序の基盤**、**社会資本** として捉えられることが多いです。近年の整理では、社会学には少なくとも **particularized trust（特定他者への信頼）** と **generalized trust（一般的信頼）** の二大流れがあり、ネットワーク、カテゴリー、制度、集団境界の文脈で再検討されています。ここでは信頼は、内的感情よりも **社会的配置や関係構造の性質** として扱われやすいです。([sociology.stanford.edu](https://sociology.stanford.edu/publications/trust-social-relations))

### 1.6 政治学
政治学では、信頼は主に **政治制度・政府・代表・行政アクターが、自分たちの期待や利益に沿って行動するという見込み** として扱われます。政治的信頼研究は、長期的傾向、制度パフォーマンス、手続き、公平性、分極化、メディア環境との関連を調べてきました。ここでは信頼は感情だけでなく、**評価的志向、正統性認識、制度応答性の判断** に近いです。また近年は、 distrust を単なる低 trust とみなさず、独自の理論化が必要だという議論が強まっています。([annualreviews.org](https://www.annualreviews.org/content/journals/10.1146/annurev.polisci.3.1.475))

### 1.7 経済学 / 行動経済学
経済学では、信頼は典型的に **不確実性下で他者に資源や権限を委ねる行為** としてモデル化され、trust game が代表的測定法です。Berg らの古典的実験は、匿名状況でも互恵性が現れることを示しましたが、その後のレビューでは、trust game は純粋な信頼を測るというより、**リスク選好、社会的選好、互恵期待、裏切り回避** を混ぜて測っていると批判されています。したがってこの領域では、信頼は「行動」として操作される一方、その概念純度は論争的です。([iro.uiowa.edu](https://iro.uiowa.edu/esploro/outputs/journalArticle/Trust-reciprocity-and-social-history/9984962889802771))

### 1.8 組織論 / 組織心理 / マネジメント
組織研究では、信頼は非常に明確に **“相手の行為に対して脆弱であることを受け入れる意思”** として定義されることが多く、Mayer, Davis, Schoorman の統合モデルが古典です。そこでの主要要因は **ability, benevolence, integrity** で、trust propensity も加味されます。組織論では、信頼は感情というより **リスクを伴う関係的意思決定** として定式化されますが、同時にリーダーシップ、チーム、制度、公正感とも結びつきます。さらに distrust は単なる trust の欠如ではなく、組織内で独自の機能を持つことが論じられています。([jstor.org](https://www.jstor.org/stable/10.2307/258792))

### 1.9 哲学（倫理学・社会認識論・現象学）
哲学では、信頼はしばしば **reliance と区別される態度** として扱われます。SEP の整理では、信頼はしばしば脆弱性を伴い、相手の能力だけでなく善意・規範的応答可能性を含意します。社会認識論では testimony、専門家、知識共同体への依存と結びつき、現象学では信頼は世界や他者に対する原初的な開かれとして論じられます。ここでは信頼は、感情というより **態度・規範的関係・世界関係の条件** として強い厚みを持ちます。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

### 1.10 人類学 / 民族誌
人類学・民族誌では、信頼は大規模サーベイ変数よりも、**状況依存的・関係依存的・権力依存的なもの** として記述されやすいです。近年の民族誌論では、フィールドにおける trust-building は反省性や相互調整を通じて形成され、研究実践そのものが信頼／裏切りの問題を孕むとされます。デジタル領域の民族誌では、mis/trust は単に不足や誤差ではなく、ヒエラルキーや計算システムの設計と絡む政治的現象として扱われます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10166231/))

### 1.11 公衆衛生 / 医療 / 科学への信頼
公衆衛生と医療では、trust, mistrust, distrust, trustworthiness の区別が特に重要です。2024 年のレビューは、この領域では **概念化・定義・測定・介入について合意が乏しい** と明言し、mistrust/distrust が歴史的トラウマや差別への合理的反応である場合もあると整理しています。ここでは「信頼を増やす」よりも、**制度や専門家の trustworthiness を高める** ことが重視されます。科学への信頼研究も、信頼は source・message・receiver・制度環境から成る多面的・文脈依存的現象だと整理しています。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/))

### 1.12 HCI / trust in automation / AI への信頼
HCI と自動化研究では、信頼は **システムへの reliance を媒介する潜在状態** として扱われます。ここでは信頼の善し悪しより、**calibrated trust** が中心課題で、過小信頼・過剰信頼・誤較正が問題になります。レビューでは、要因はおおむね user characteristics、system attributes、context に分けられ、測定は self-report・behavioral・physiological にまたがります。AI 研究では近年、対人信頼の枠組みを流用しつつも、AI では moral agency や責任性が異なるため、**人間への信頼と同じではない** とする立場が強いです。([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/25875432/))

### 1.13 補足：進化論 / 進化心理学
進化研究では、信頼と信頼worthiness は協力進化の中核問題として扱われます。モデル研究では、信頼行動が自動的に進化するわけではなく、空間構造や評判などの条件が効きます。ここでは信頼は感情より、**協力戦略・選択圧の下での行動傾向** として捉えられます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC7482572/))

### 1.14 補足：情報システム / e-commerce
情報システム研究では、信頼はしばしば **オンライン環境における不確実性と知覚リスクを下げる要因** として整理されます。プラットフォーム研究では trust と mistrust の双方を扱う必要があるとされ、HCI の較正論と近い側面があります。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8581124/))

---

## 2. 横断比較

| 分野 | 定義の中心 | 主体 | 対象 | 水準 | 方法 | 代表概念 | 近接概念 | 主論点 |
|---|---|---|---|---|---|---|---|---|
| 神経現象学 | 一人称経験と三人称計測の統合対象 | 経験する主体 | 他者・世界・自己 | 個人内 / 対人 | 微視的現象学面接、神経計測 | lived trust, openness | 身体感覚、安心感 | 粒度の橋渡しが難しい ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/)) |
| 心理学 | 特性・状態・相手評価・期待 | 個人 | 他者 | 個人内 / 対人 | 質問紙、実験、縦断 | trust propensity, interpersonal trust | expectation, attachment | trait と state の分離 ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8353080/)) |
| 愛着研究 | 応答可能な他者への身体化された期待 | 乳幼児/成人 | 養育者・親密他者 | 発達 / 対人 | 観察、面接、縦断 | secure/insecure attachment | basic trust, internal working model | 初期経験と修復可能性 ([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-psych-010418-102813)) |
| 神経科学 | 社会的リスク下の意思決定 | 個人 | 他者 | 個人内 / 対人 | trust game, fMRI, hormones | reciprocity, betrayal aversion | risk, reward prediction | 何が「信頼」固有か ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5441232/)) |
| 社会学 | 関係・ネットワーク・社会秩序 | 行為者 / 集団 | 他者・カテゴリ・制度 | 対人 / 一般化 / 制度 | サーベイ、ネットワーク分析 | generalized trust | social capital, confidence | particularized vs generalized trust ([sociology.stanford.edu](https://sociology.stanford.edu/publications/trust-social-relations)) |
| 政治学 | 制度・アクターが期待に沿うとの見込み | 市民 | 政府・議会・制度 | 制度 / 政治 | 世論調査、比較研究 | political trust | legitimacy, confidence | trust と distrust の区別 ([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-polisci-050316-092550)) |
| 経済学 | 不確実性下で相手に委ねる行動 | 意思決定者 | 匿名他者 | 対人 | trust game, field experiments | reciprocity | risk preference, social preference | trust game の概念純度 ([iro.uiowa.edu](https://iro.uiowa.edu/esploro/outputs/journalArticle/Trust-reciprocity-and-social-history/9984962889802771)) |
| 組織論 | 脆弱性受容の意思 | 従業員・管理者 | 上司・組織・チーム | 対人 / 組織 | 質問紙、実地研究 | ability, benevolence, integrity | trustworthiness, risk | trust と distrust の併存 ([jstor.org](https://www.jstor.org/stable/10.2307/258792)) |
| 哲学 | reliance を超える規範的態度 | 主体 | 他者・証言者・制度・自己 | 対人 / 認識論的 / 自己 | 概念分析 | trust, reliance, self-trust | faith, confidence | 信頼は感情か態度か関係か ([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/)) |
| 人類学 / 民族誌 | 状況的・権力依存的な関係 | 参与者 | 人・共同体・技術 | 対人 / 制度 | エスノグラフィー | trust-building | betrayal, reflexivity | 信頼の政治性・道徳性 ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10166231/)) |
| 公衆衛生 / 医療 | 脆弱性下での制度・専門家への志向 | 患者・市民 | 医療者・医療制度・科学 | 制度 / 認識論的 | サーベイ、コミュニティ研究 | trust, mistrust, distrust | trustworthiness, credibility | 概念不一致と歴史的不正義 ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/)) |
| HCI / AI | reliance を調整する潜在状態 | ユーザー | 自動化・AI | 技術 / 制度 | self-report, behavior, physiology | calibrated trust | overtrust, undertrust, reliance | 人間信頼との連続性と断絶 ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8562383/)) |

---

## 3. 神経現象学と心理学の位置づけ

神経現象学を独立節として見る意義は、信頼を「ある／ない」の粗い変数としてではなく、**時間的に立ち上がる経験構造** として扱える点にあります。微視的現象学・神経現象学の文献では、経験のマイクロダイナミクスにアクセスし、それを脳・身体・行動のマイクロダイナミクスと対応づけることが中核課題です。これを信頼研究に移すと、たとえば「相手の発話を信じる瞬間」「身を預けられる瞬間」「違和感が差し込んで疑いに転じる瞬間」を、単一得点ではなくプロセスとして扱えます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

心理学との接続点は多いです。愛着研究は、信頼を明示的判断以前の **安全感・利用可能性の期待** として理解する足場を与え、社会心理学は相手の意図や善意への推論を扱い、臨床心理学はトラウマや治療関係のなかで **信頼が壊れ、更新され、回復する条件** を扱います。epistemic trust 研究は、他者からの情報が「自分にとって受け取るに値する知識」として入ってくるかを中心問題にしており、これは神経現象学的には、**言葉が届く感じ／届かない感じ** の経験記述につなげやすいです。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-psych-010418-102813))

この観点からみると、「信頼の主観的経験」は少なくとも次の下位次元に分解できます。  
1. **身体的緊張の緩み／警戒の解除**  
2. **相手の意図を善意的に先取りする感覚**  
3. **自分が傷つきうることを許容する感じ**  
4. **相手の言葉・勧告・証言が“入ってくる”感じ**  
5. **違和感や疑いが差し込む転換点**  
これらは、面接だけでなく、生理指標、反応時間、反復相互作用課題、必要なら神経計測と組み合わせて研究できます。ただし現時点では、こうした「信頼の神経現象学」を直接体系化した文献は薄く、ここは **方法論的提案としては強いが、実証蓄積はまだ疎** と記すのが正確です。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

---

## 4. 主要論争

### 4.1 信頼は感情か、信念か、期待か、関係か
哲学・組織論・心理学を比較すると、信頼を純粋な感情とみなす立場は限定的で、むしろ **態度・期待・脆弱性受容・関係的配置** のどれを中核に置くかが争点です。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

### 4.2 信頼とリスクの関係
組織論・経済学・自動化研究では、信頼はしばしばリスクとセットで定義されますが、現象学や愛着研究では、リスク計算だけでは捉えきれない **世界や他者への原初的開放性** が強調されます。([jstor.org](https://www.jstor.org/stable/10.2307/258792))

### 4.3 信頼と脆弱性（vulnerability）
「相手により傷つきうる状態を受け入れること」は、哲学・組織論・公衆衛生で繰り返し出てくる共通核です。ただし公衆衛生では、その脆弱性が歴史的不正義の中で分配されているため、単なる個人心理には還元できません。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

### 4.4 信頼と裏切り・修復
愛着・臨床・組織研究では、裏切りは単なる期待違反ではなく、関係モデルや自己保護様式を変える出来事として扱われます。信頼修復は可能ですが、自動的ではなく、応答性・一貫性・責任引受けが必要とされます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10205960/))

### 4.5 信頼と制度・権力
政治学・公衆衛生・人類学では、信頼は権力から切り離せません。低信頼は単なる誤解ではなく、差別、腐敗、排除、説明責任の欠如への合理的応答であることがあります。([cambridge.org](https://www.cambridge.org/core/journals/european-political-science-review/article/stable-or-variable-distrust-disentangling-the-relationship-between-political-trust-and-electoral-behavior/99867E5D3A74B489D4686D36C711750D))

### 4.6 mistrust / distrust は trust の欠如か
複数領域で、mistrust や distrust は単なる low trust ではないと論じられています。公衆衛生レビューは mistrust/distrust を別概念として扱い、行動遺伝学研究でも distrust は trust の単純な反転ではないことが示唆されています。政治学でも distrust の独自理論が進んでいます。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/))

### 4.7 trust と trustworthiness の違い
医療・組織・AI 研究で特に重要なのは、問題が「人々の trust 不足」なのか、「対象側の trustworthiness 不足」なのかを分けることです。近年は前者より後者を改善すべきだという議論が強いです。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/))

### 4.8 人間への信頼と AI / 自動化への信頼は同じか
HCI では両者をアナロジカルに比較できますが、AI は意図・責任・道徳的応答性が人間と異なるため、完全に同一ではありません。そのため AI 研究では「信頼」より「適切な reliance」の語を重視する立場もあります。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8562383/))

---

## 5. 重要文献リスト

### 哲学・現象学
1. **Stanford Encyclopedia of Philosophy, “Trust”**  
   信頼を reliance と区別し、脆弱性・自己信頼・制度信頼・テストモニーまで広く整理する基礎文献。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

2. **Pugliese, 2019, “Phenomenologies of Trust”**  
   現象学から trust を知覚・意向性・世界関係として再考する入口。([rivistateoria.eu](https://www.rivistateoria.eu/index.php/teoria/article/view/73))

3. **“The Promise of the World: Towards a Transcendental History of Trust” (2020)**  
   信頼を ego-world 関係の基盤として扱う、現象学寄りの理論的論文。([link.springer.com](https://link.springer.com/article/10.1007/s10743-020-09264-9))

4. **“Can we trust the phenomenological interview?” (2022)**  
   現象学的インタビューの信頼性・妥当性を論じ、方法論上の懸念に応答。([link.springer.com](https://link.springer.com/article/10.1007/s11097-021-09744-z))

### 神経現象学・微視的現象学
5. **“Methodological lessons in neurophenomenology…” (2013)**  
   一人称記述と神経計測の統合をどう設計するかの方法論レビュー。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

6. **“Microcognitive science: bridging experiential and neuronal microdynamics” (2013)**  
   経験と神経活動の粒度差をどう埋めるかを論じる重要レビュー。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3784800/))

7. **Micro-phenomenology 関連レビュー（relationality / interview quality）**  
   lived experience への精密アクセスを支える方法論的基盤。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9834112/))

### 心理学・対人信頼
8. **“The component and structure of interpersonal trust” (2024)**  
   信頼を trait・expectation・risk・behavior など複数成分に分けて整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11088264/))

9. **“Assessing Two Dimensions of Interpersonal Trust” (2021)**  
   trust propensity と other-focused trust の区別を測定論として提示。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8353080/))

10. **“A Trait-State Model of Trust Propensity” (2019)**  
    信頼しやすさを trait / state に分ける枠組み。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC6848461/))

11. **“The Effects of Partner Extraversion and Agreeableness on Trust” (2023)**  
    パーソナリティ知覚が信頼判断にどう影響するかの実証。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10302358/))

12. **“Trust is heritable, whereas distrust is not” (2017)**  
    distrust を単純な low trust とみなせないことを示す刺激的研究。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5502587/))

### 愛着・発達
13. **“Attachment in Adulthood” (Annual Review of Psychology, 2019)**  
    成人愛着研究の全体像。対人信頼の発達的基盤を押さえるのに有用。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-psych-010418-102813))

14. **Erikson / basic trust を扱う発達・医療文脈レビュー**  
    基本的信頼の概念史を現代研究へつなぐ補助資料。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8151212/))

15. **Betrayal trauma と moral injury の発達論的レビュー**  
    裏切りが信頼構造に与える影響を考える際の要所。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10205960/))

### 臨床・認識論的信頼
16. **“Epistemic trust: a comprehensive review…” (2023)**  
    哲学から発達精神病理までを横断する認識論的信頼の総説。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10772859/))

17. **“Mentalizing, Epistemic Trust and the Phenomenology of Psychotherapy” (2019)**  
    心理療法での信頼・mentalizing・経験構造の接続。([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31362289/))

18. **“Mentalizing, Epistemic Trust, and the Active Ingredients of Psychotherapy” (2024)**  
    epistemic trust を治療機序として位置づける最近の整理。([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/39679701/))

19. **Psychosomatic rehabilitation における epistemic trust 研究**  
    臨床転帰との関連をみる実証的入口。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10780285/))

### 社会学
20. **Schilke, Reimann, Cook, “Trust in Social Relations” (2021)**  
    particularized trust / generalized trust の整理を含む社会学レビュー。([sociology.stanford.edu](https://sociology.stanford.edu/publications/trust-social-relations))

21. **“Sociological Perspectives on Trust” (2019)**  
    関係・制度・民主主義と distrust まで含む広い社会学的地図。([sociology.stanford.edu](https://sociology.stanford.edu/publications/sociological-perspectives-trust))

22. **“The Foundations of Individuals’ Generalized Social Trust: A Review” (2017)**  
    一般的信頼の基盤を dispositional / experiential に整理。([academic.oup.com](https://academic.oup.com/book/8491/chapter/154319363))

23. **Generalized trust の測定レビュー**  
    “most people can be trusted” 項目の測定論的問題を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC4884812/))

### 政治学・制度信頼
24. **Levi & Stoker, “Political Trust and Trustworthiness” (2000)**  
    政治的信頼研究の古典的レビュー。([annualreviews.org](https://www.annualreviews.org/content/journals/10.1146/annurev.polisci.3.1.475))

25. **“Political Trust in a Cynical Age” (2018)**  
    現代政治的信頼研究の再整理。長期変動と政治的要因を重視。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-polisci-050316-092550))

26. **Bertsou, “Rethinking political distrust” (2019)**  
    distrust を独立概念として理論化。([cambridge.org](https://www.cambridge.org/core/journals/european-political-science-review/article/rethinking-political-distrust/69AD47ECCF3765EFC4F772BB9DFE2596))

27. **Stable vs variable distrust に関する近年研究（2025）**  
    distrust の内部差異を示す最近の展開。([cambridge.org](https://www.cambridge.org/core/journals/european-political-science-review/article/stable-or-variable-distrust-disentangling-the-relationship-between-political-trust-and-electoral-behavior/99867E5D3A74B489D4686D36C711750D))

28. **OECD Trust Survey / Trust in Government 指標群**  
    制度信頼の国際比較で使われる指標と考え方の把握に有用。([oecd.org](https://www.oecd.org/gov/trust-in-government.htm))

### 経済学・行動経済学・神経経済学
29. **Berg, Dickhaut, McCabe, “Trust, Reciprocity, and Social History” (1995)**  
    trust game の古典。匿名状況での互恵性研究の出発点。([iro.uiowa.edu](https://iro.uiowa.edu/esploro/outputs/journalArticle/Trust-reciprocity-and-social-history/9984962889802771))

30. **“Trust Games and Beyond” (2019)**  
    trust game の限界と今後の測定論を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC6746905/))

31. **“Neurobehavioral Mechanisms Supporting Trust and Reciprocity” (2019)**  
    信頼と互恵性の神経行動学レビュー。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC6705214/))

32. **Neural signatures of trust in reciprocity に関するメタ分析**  
    信頼判断の神経基盤を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5441232/))

33. **Betrayal aversion と insula に関する研究レビュー**  
    裏切りが単なる risk 以上の現象であることを示す。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3973250/))

34. **“Trust in the brain” / oxytocin 系レビュー**  
    古典的知見の位置づけ確認用。単純化しすぎないための参照先。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3327534/))

### 組織論・マネジメント
35. **Mayer, Davis, Schoorman, “An Integrative Model of Organizational Trust” (1995)**  
    ability / benevolence / integrity モデルの古典。([jstor.org](https://www.jstor.org/stable/10.2307/258792))

36. **Rousseau et al., “Not So Different After All” (1998)**  
    学際的信頼概念の統合作業として重要。([authors.library.caltech.edu](https://authors.library.caltech.edu/records/xsfde-ke590))

37. **“Trust in leadership” メタ分析 (2002)**  
    リーダーシップ研究への接続に便利。([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/12184567/))

38. **Kramer らの distrust / organization 研究系レビュー**  
    組織内 distrust の独自性を押さえる。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev.psych.50.1.569))

### 公衆衛生・医療・科学
39. **Richmond et al., Annual Review of Public Health (2024)**  
    trust / mistrust / distrust / trustworthiness の区別と概念不一致を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/))

40. **“Public Trust in Science: A Systematic Literature Review” (2026)**  
    科学信頼研究を source / message / receiver などで整理する最近のレビュー。([link.springer.com](https://link.springer.com/article/10.1007/s10805-026-09732-5))

41. **“It Takes a Village to Trust Science” (2022)**  
    科学信頼を個人の誤信念問題に還元しない視点を与える。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8852979/))

42. **“Scientific Research and the Public Trust” (2011)**  
    研究実践と公共信頼の関係を考える基礎文献。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3151305/))

### HCI / 自動化 / AI
43. **Hoff & Bashir, “Trust in automation” (2015)**  
    自動化信頼の要因を統合する重要レビュー。([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/25875432/))

44. **“Measurement of Trust in Automation” (2021)**  
    self-report / behavioral / physiological 測定の整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8562383/))

45. **Mathematical models of trust in automation (2023)**  
    dynamic process としての trust を数理的に扱う入口。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10790856/))

46. **AI trustworthiness と human-AI trust の比較レビュー (2024)**  
    trustor / trustee / context の三軸で、人間・自動化・AI を比較。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11061529/))

47. **Healthcare AI trust review (2025)**  
    AI 医療文脈での trust 研究の遷移と較正の問題を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12562135/))

### 補足領域
48. **“The evolution of trust and trustworthiness” (2020)**  
    進化モデルにおける trust / trustworthiness の条件を整理。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC7482572/))

49. **“Buyers’ trust and mistrust in e-commerce platforms” (2021)**  
    情報システム領域での trust / mistrust 併記の典型。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8581124/))

---

## 6. 深掘り候補

1. **信頼の神経現象学**  
   直接文献が薄いぶん、方法論的開拓余地が大きい。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3794193/))

2. **愛着と信頼の接続**  
   基本的信頼、内的作業モデル、成人対人信頼の連関。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-psych-010418-102813))

3. **epistemic trust と心理療法**  
   信頼を「知識が入ってくる条件」として掘る。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10772859/))

4. **trust game の限界と代替測定**  
   信頼・リスク・互恵性・裏切り回避の切り分け。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC6746905/))

5. **政治的信頼と制度信頼の区別**  
   legitimacy、performance、distrust の分化。([annualreviews.org](https://www.annualreviews.org/doi/10.1146/annurev-polisci-050316-092550))

6. **医療・科学への信頼と歴史的不信**  
   mistrust/distrust を合理的応答として扱う枠組み。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11156570/))

7. **AI への trust と reliance の区別**  
   human trust の概念をどこまで機械に適用できるか。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8562383/))

8. **trust と distrust は同一軸か**  
   心理学・政治学・医療を横断して再検討できる。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5502587/))

9. **信頼の修復**  
   裏切り後に何が修復条件になるかを組織・臨床・親密関係で比較。([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10205960/))

10. **自己信頼・世界信頼・証言信頼の接続**  
    哲学・現象学・社会認識論を束ねるテーマ。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))

---

## この段階での暫定まとめ

広く見たかぎり、信頼は次のように再整理できます。  
- **感情としての信頼**: 安心感、警戒の緩み、親密性  
- **期待としての信頼**: 相手や制度が応答するという予期  
- **関係としての信頼**: 脆弱性を引き受ける相互関係  
- **制度としての信頼**: 政府、医療、科学、専門家への評価的志向  
- **行動としての信頼**: 委任、投資、協力  
- **認識論的条件としての信頼**: 証言や知識を受け取る条件  
- **技術較正としての信頼**: AI/自動化に対する適切な reliance  
- **経験構造としての信頼**: 身を預けられる感じ、違和感の不在、世界への開放性  
この多層性を崩さずに扱うことが、次の深掘りの前提になります。([plato.stanford.edu](https://plato.stanford.edu/archives/spr2024/entries/trust/))
