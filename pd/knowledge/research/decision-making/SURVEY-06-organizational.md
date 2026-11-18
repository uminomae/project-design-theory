# 意思決定とは — 調べ 6：組織と集団の意思決定

確認日 2026-11-18。Issue #176。調べ役のノート（読み物の本文ではない）。訳はすべて Claude。

## 要点

- この分野の論は、意思決定を「一人の合理的な主体が、選択肢を並べ、結果を比べて選ぶこと」とする標準の見方に、組織や集団の中で何が起きているかを突き合わせて書き換えてきた。
- Allison（1968 の RAND 版）は、政府の行動を一人の合理的な主体の選択と見る見方（Model I）に、組織の決まった手順の出力（Model II）と、担い手どうしの駆け引きの帰結（Model III）を並べ、どの模型で見るかで説明が変わると書く（本文照合済）。
- Cohen・March・Olsen（1972）は、選好が定まらず・手段がよく分からず・参加が流動的な「組織化された無秩序」で、決定を、問題・解・参加者・選択の機会という相対的に独立した流れの合流の結果と置いた。シミュレーションでは、問題を解いて決まる形（resolution）は多数派でなく、見過ごし（oversight）や逃避（flight）で決まることが多い（本文照合済）。のちの再実装（Fioretti & Lomi 2008）は、主な主張を確かめつつ、一部を 1972 年の実装の副産物とした（本文照合済）。
- Mintzberg・Raisinghani・Théorêt（1976）は、決定を「行為への特定の約束（ふつうは資源の約束）」と定義し、25 の戦略的で「構造化されていない」決定の過程にも、識別・展開・選択の位相を含む基本の構造があるが、位相の順は単純でないと書く（本文照合済・三頁）。
- March & Olsen（2004）は、結果を見積もって選ぶ「結果の論理」と並べて、状況・自分は何者か・そういう者はこういう状況で何をするか、の三つの問いに答えて行為する「適切さの論理」を置く。どちらかを他方の特殊な場合にする見方を退け、明確な方の論理が優る、という仮説を出す（本文照合済）。
- Weick（1993）は、Mann Gulch の火災の分析の中で、組織の分析は意思決定で始まり意思決定で終わることが多いが、その正統への不満が高まっていると書き、意思決定（明確な問いと答え）から意味づけ（sensemaking）へと焦点を移す（本文照合済・再録版）。
- Janis の集団浅慮（1972）は、凝集性の高い集団で、全員一致への努力が、選択肢を現実的に評価する動機を上回る考え方の様式と定義される（上げた人の分からない写しで読んだので未照合）。
- 読めなかったもの：Lindblom 1959（有料）、Cyert & March 1963・March 1994（書籍）、March 1978・Brunsson 1982（要旨だけ）、Allison 1969 の APSR の誌面（有料）、Janis の載せてよい写し。

## 論ごと

### 三つの概念模型（Allison 1968・1969）

- 書誌：Allison, G. T. (1969). Conceptual Models and the Cuban Missile Crisis. *American Political Science Review* 63(3), 689–718. DOI 10.2307/1954423（Crossref と一致）。読んだのはその前の版：Allison, G. T. (1968). *Conceptual Models and the Cuban Missile Crisis: Rational Policy, Organization Process, and Bureaucratic Politics*. RAND Corporation, P-3919（RAND の頁 https://www.rand.org/pubs/papers/P3919.html の書誌と、PDF の表紙で一致。表紙の注に、博士論文の要約で、1968 年の米国政治学会の年次大会で読むために用意したとある）。
- 読んだ写し：RAND が公開していた PDF の Wayback の記録（元は RAND。写しの日 2013-03-09）https://web.archive.org/web/20130309221704/http://www.rand.org/content/dam/rand/pubs/papers/2008/P3919.pdf 。画像だけの PDF（73 頁）なので、頁の画像で読んだ。RAND の今の URL と DTIC の写しは、自動取得に 403 を返した。
- 照合の状態：本文照合済（1968 の RAND 版。頁の画像で読んだ。印刷の頁 pp.1–4・pp.52・55–56）・未照合（1969 の誌面は有料）。1969 の誌面と語や頁が違いうるので、引くときは 1968 の版として引く。
- 鍵の文：
  - 「the maker of governmental policy is not a rational, unitary decisionmaker but rather a conglomerate of large organizations and political actors」（p.2）訳：政府の政策をつくる者は、合理的で単一の意思決定者ではなく、大きな組織と政治的な担い手の寄せ集めである。
  - Model II は「what the rational policy model analyst categorizes as "acts" and "choices" are instead outputs of large organizations functioning according to standard patterns of behavior」（p.3）訳：合理的政策の模型が「行為」「選択」と分類するものは、実は、標準の行動の型に従って働く大きな組織の出力である。
  - Model III は、起きたことを「neither as choices nor as outputs」、「outcomes of various overlapping bargaining games among players arranged hierarchically in the national government」として見る（p.3）訳：選択としても出力としても見ず、政府の中で階層に並んだ担い手どうしの、重なり合う駆け引きのゲームの帰結として見る。
  - 結論：「Though the conceptual models are not exclusive, most analysts do proceed predominantly in terms of one model. Which model an analyst employs does make a difference.」（p.56）訳：概念模型は互いに排他的ではないが、ほとんどの分析者は主に一つの模型で進む。どの模型を使うかで違いが出る。
- 要約：外交の出来事を説明するとき、分析者は暗黙の概念模型で考えている（命題 1、p.2）。その標準は、国家の行動を、目的に照らした合理的な選択として説明する模型（Model I）である（命題 2、p.2）。これに、組織過程の模型（Model II）と官僚政治の模型（Model III）を足すと、説明の力が増す（命題 3、p.3）。著者は、三つの模型でキューバ危機の同じ問い（米国の海上封鎖）を説明し直し、封鎖の決定は「part resultant and part result」で、誤認・誤った伝達・駆け引きなどが混ざっていたと書く（p.55）。ここでの「模型」は理論でなく概念の模型だと断る（p.2 の注）。著者は、この論文を予備的な段階と書く（p.56）。
- 批判・のちの改め：読めていない（1999 年の改訂版、批判の論文とも未照合（記憶）。書かない）。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）三つの模型の名は、題の Rational Policy・Organization Process・Bureaucratic Politics（合理的政策・組織過程・官僚政治）。p.55：「the decision which Kennedy announced to the world on Tuesday evening, October 22, emerged -- part resultant and part result, a melange of misperception, miscommunication, misinformation, bargaining, pulling, hauling, and spurring」訳：10 月 22 日の火曜の夜にケネディが世界に発表した決定は、一部は合成の結果、一部は狙った結果として、誤認・誤った伝達・誤った情報・駆け引き・押し引きの混ざりあいから出てきた。頁の画像で読んだ。

### 組織化された無秩序と、ゴミ箱の模型（Cohen, March & Olsen 1972）

- 書誌：Cohen, M. D., March, J. G., & Olsen, J. P. (1972). A Garbage Can Model of Organizational Choice. *Administrative Science Quarterly* 17(1), 1–25. JSTOR 2392088。DOI は道具の `--cite` では Crossref で確定できなかった。PDF の表紙（JSTOR の表紙）の誌名・巻号・頁と一致。
- 読んだ写し：トレント大学（University of Trento, DISI）の授業の読み物の頁に置かれた、JSTOR の誌面の PDF（2013 年に JSTOR から取られたもの）https://innovation.disi.unitn.it/ibict/2019/readings/suggested/05%20March%20%E2%80%94%20Garbage%20Can%20Decisions.pdf 。授業用の写し。権利は未確認。誌名・頁が見える出版社の版。同じ URL の Wayback の記録（2021-10-17）は 1 MiB で切れていた。ブリュッセル自由大学の写しは 401。
- 照合の状態：本文照合済（授業用の写し・出版社の版。pp.1–3・8–11・16）。
- 鍵の文：
  - 組織化された無秩序は「organizations—or decision situations—characterized by three general properties」で、選好が問題含み（problematic preferences）・手段がはっきりしない（unclear technology）・参加が流動的（fluid participation）（p.1）。組織は「discovers preferences through action more than it acts on the basis of preferences」（p.1）訳：選好にもとづいて動くより、動くことで選好を見つける。
  - 「an organization is a collection of choices looking for problems, issues and feelings looking for decision situations in which they might be aired, solutions looking for issues to which they might be the answer, and decision makers looking for work」（p.2）訳：組織は、問題を探す選択、表に出す場を探す論点と感情、答えになれる論点を探す解、仕事を探す意思決定者の集まりである。
  - 「a decision is an outcome or interpretation of several relatively independent streams within an organization」（pp.2–3）訳：決定は、組織の中のいくつかの相対的に独立した流れの帰結、あるいはその解釈である。言葉の理論で挙げる流れは、問題・解・参加者・選択の機会の四つ（p.3）。
  - 決まり方は三つ：解決（resolution）・見過ごし（oversight）・逃避（flight）（p.8）。「resolution of problems as a style for making decisions is not the most common style, except under conditions where flight is severely restricted (for instance, specialized access) or a few conditions under light load.」（p.9。2026-11-18 の読み直しで except の条件を足した）。
  - 結論：「Measured against a conventional normative model of rational choice, the garbage can process does appear pathological, but such standards are not really appropriate.」（p.16）訳：通常の合理的選択の規範の模型で測ると病的に見えるが、その物差しはふさわしくない。過程は、より普通の合理的模型の前提が満たされないときにこそ起きる（p.16）。
- 要約：大学の研究をもとに、選好・手段・参加の三つが定まらない状況（組織化された無秩序）での決定を、四つの流れの組み合わせとして書き、計算機のシミュレーションに移した。決定は、問題を解くことと切り離されうる。重要な選択ほど見過ごしと逃避で決まり、重要でない選択が解決で決まる、という結果も出る（p.11）。著者は、この理論はほぼどの組織の活動の一部を書くが、すべては書かない、と範囲を限る（p.1）。また、ゴミ箱の過程は問題をうまく解かないが、目標が曖昧で対立があっても選択を可能にする、と書く（p.16）。
- 批判・のちの改め：
  - Fioretti, G., & Lomi, A. (2008). An Agent-Based Representation of the Garbage Can Model of Organizational Choice. *Journal of Artificial Societies and Social Simulation* 11(1), 1. https://www.jasss.org/11/1/1.html （誌の公開版）。本文照合済（§1.4・§2.15・§6.5・§7.1）。1972 年の計算機のコードは言葉の理論を「only loosely」にしか映していない、という批判があると書き（§1.4）、エージェントで作り直した結果、八つの性質のうち 1〜5 は確かめられ、6〜8 は確かめられなかった（§6.5）。広い母数の範囲で、決定の多くは見過ごしで決まる（§7.1）。
  - Bendor, Moe & Shotts（2001, *APSR* 95(1), 169–190）の批判と、Olsen（2001）の応答は、未照合（有料）。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）p.2：名の由来。「one can view a choice opportunity as a garbage can into which various kinds of problems and solutions are dumped by participants as they are generated」訳：選択の機会を、参加者が、問題と解を生まれるそばから投げ込むゴミ箱と見ることができる。p.16 の結び：「It is clear that the garbage can process does not resolve problems well. But it does enable choices to be made and problems resolved, even when the organization is plagued with goal ambiguity and conflict」訳：ゴミ箱の過程が問題をうまく解かないことははっきりしている。けれど、組織が目標の曖昧さと対立に悩まされているときでも、選択がなされ、問題が解かれることを可能にする。

### 構造化されていない決定の過程（Mintzberg, Raisinghani & Théorêt 1976）

- 書誌：Mintzberg, H., Raisinghani, D., & Théorêt, A. (1976). The Structure of "Unstructured" Decision Processes. *Administrative Science Quarterly* 21(2), 246–275. DOI 10.2307/2392045（Crossref と一致。PDF の頭の頁の「June 1976, volume 21」「246/Administrative Science Quarterly」とも一致）。
- 読んだ写し：著者のサイトの PDF https://mintzberg.org/sites/default/files/article/download/hm_the_structure_of_unstructured_decision_processes.pdf （著者のサイトの写し。誌面のスキャン、30 頁・約 58 MB。著者の論文の頁 https://mintzberg.org/node/271 から張られている）。画像だけの PDF なので、頁の画像で読んだ。
- 照合の状態：本文照合済（著者のサイトの写し。頁の画像で読んだ。pp.246・252・271）。読んだのは三頁だけで、12 の要素の各節と 7 つの型の全体は読んでいない。
- 鍵の文：
  - 「This paper defines a decision as a specific commitment to action (usually a commitment of resources) and a decision process as a set of actions and dynamic factors that begins with the identification of a stimulus for action and ends with the specific commitment to action.」（p.246）訳：決定とは、行為への特定の約束（ふつうは資源の約束）であり、決定の過程とは、行為への刺激を見分けることで始まり、行為への特定の約束で終わる、行為と動的な要因の集まりである。
  - 「Unstructured refers to decision processes that have not been encountered in quite the same form and for which no predetermined and explicit set of ordered responses exists in the organization.」（p.246）訳：構造化されていない、とは、まったく同じ形では出会ったことがなく、組織の中に前もって決まった明示の手順が無い決定の過程を指す。「strategic」は、取られる行為・注がれる資源・作られる先例の点で重要、というだけの意味だと断る（p.246）。
  - 要旨：25 の戦略的な決定の過程の現場の研究と文献の見直しから、「unstructured」な過程の下にも基本の構造があると示し、それを 3 つの中心の位相・3 組の支える手順・6 組の動的な要因の 12 の要素で書き、25 の過程が 7 つの経路の型に分かれると示す（p.246）。
  - 「We find logic in delineating distinct phases of the strategic decision process, but not in postulating a simple sequential relationship between them.」（p.252）訳：戦略的な決定の過程に別々の位相を描き分けることには筋があるが、位相のあいだに単純な順の関係を置くことには筋がない。位相の名は識別（identification）・展開（development）・選択（selection）で、Simon の intelligence-design-choice に似るが定義を変えている（p.252）。
- 要約：経営科学の規範の模型は日々の業務の決定に向けられ、上の層の戦略的な決定にはほとんど影響しなかった、という問題から始める（p.246）。Witte（1972）の、問題の認識から選択までの五つの位相の順は、233 の過程で支持されなかったという結果を引き、それに同意する（p.252）。そのうえで、位相はあるが順は単純でない、という枠を出し、支える手順として決定の統制・伝え合い・政治の三つを挙げる（p.252）。7 つの型のうち最も多かったのは、作り込みの設計を伴う「basic design」の過程（8 件）だった（p.271）。
- 批判・のちの改め：読めていない。

### 結果の論理と、適切さの論理（March & Olsen 2004。March 1994）

- 書誌：March, J. G., & Olsen, J. P. (2004). *The logic of appropriateness*. ARENA Working Paper 04/09. ARENA – Centre for European Studies, University of Oslo（PDF の表紙で確かめた。EconPapers・IDEAS の記録とも一致。DOI なし）。
- 読んだ写し：オスロ大学 ARENA が公開していた PDF の Wayback の記録（元は大学の研究所。写しの日 2017-12-15）https://web.archive.org/web/20171215112311/http://www.sv.uio.no/arena/english/research/publications/arena-working-papers/2001-2010/2004/wp04_9.pdf 。28 頁。今の URL は 404。
- 照合の状態：本文照合済（著者の作業論文・大学の研究所の公開版。pp.2–5・20）。March（1994）*A Primer on Decision Making* は未照合（書籍）。
- 鍵の文：
  - 「The logic of appropriateness is a perspective that sees human action as driven by rules of appropriate or exemplary behavior, organized into institutions.」（p.2）訳：適切さの論理は、人の行為を、制度の形にまとめられた、適切な・模範となる振る舞いの規則に動かされるものと見る見方である。
  - 「most of the time humans take reasoned action by trying to answer three elementary questions: What kind of a situation is this? What kind of a person am I? What does a person such as I do in a situation such as this」（p.4。March and Olsen 1989・March 1994 を引く）訳：人はたいてい、三つの基本の問い（これはどんな状況か、私はどんな者か、私のような者はこういう状況で何をするか）に答えようとして、理由のある行為をする。
  - 結果の論理（logic of consequentiality）の手順を、注で、選択肢は何か・価値は何か・選択肢は価値にどんな結果をもたらすか・期待される結果のいちばん良いものを選ぶ、の四つとして書く（p.5 の注 2）。
  - 一方を他方の特殊な場合とみなす扱いは「unsatisfactory because it denies the distinctiveness of different logics」（p.20）。より見込みのある道として、処方の明確さで論理を分け、「a clear logic will dominate a less clear logic」と仮説を置く（p.20）。安定した階層（政治家は結果の論理、行政官や裁判官は適切さの論理、など）は、経験的な裏付けが乏しいと書く（p.20）。
- 要約：規則・役割・自己同一性に照らして「この状況で自分のような者がすべきこと」を行う見方を、選好と結果の見積もりで選ぶ見方と並ぶ、行為の論理として置く。規則にもとづく行為を、認識の過程として「recognition」と呼ぶことがあると書く（p.4）。適切だとされる規則は、技術上の効率や道徳上の受け入れられやすさを保証しないと条件を付ける（p.4）。二つの論理の関係は今後の研究課題として示され、結論でなく仮説である。
- 批判・のちの改め：読めていない。

### 決定から、意味づけへ（Weick 1993）

- 書誌・読んだ写し：創造とはの経営学の記録 `cs/evidence/evidence-D22-business-management.md` §6 を参照（本文照合済・ALNAP の再録版。頁は再録版の PDF の頁）。そこで読んでいない pp.6–8 の、意思決定にふれる段を、この調べで同じ再録版で読んだ。
- 照合の状態：本文照合済（再録版。pp.6–8 を足した）。
- 鍵の文：
  - 「Although most organizational analyses begin and end with decision making, there is growing dissatisfaction with this orthodoxy.」（p.6）訳：組織の分析の多くは意思決定に始まり意思決定に終わるが、この正統への不満が高まっている。
  - 「organizations can be good at decision making and still falter. They falter because of deficient sensemaking.」（p.8）訳：組織は意思決定が上手でも、つまずくことがある。意味づけが足りないからつまずく。
  - 「The world of decision making is about strategic rationality. It is built from clear questions and clear answers that attempt to remove ignorance」に対して、意味づけは「vague questions, muddy answers, and negotiated agreements that attempt to reduce confusion」から成る（p.8）。
- 要約：Weick は、March らの議論（意思決定は文脈に強く依り、神話と儀礼に囲まれた営みだという March 1989 の文。Reed 1991 からの孫引き）を引き、意思決定の概念が引き伸ばされてきたと書く（p.6）。そのうえで、焦点を意思決定から意味へ移す一つの道として意味づけを置く。Klein の認識による意思決定（recognition-primed decision making）は、過去の経験に頼る点で意味づけの性格を持つが、意思決定に根を置いたままだと書く（p.7）。
- 批判・のちの改め：D22 の記録を参照。

### 集団浅慮（Janis 1972）

- 書誌：Janis, I. L. (1972). *Victims of Groupthink: A Psychological Study of Foreign-Policy Decisions and Fiascoes*. Boston: Houghton Mifflin。第 2 版：Janis, I. L. (1982). *Groupthink: Psychological Studies of Policy Decisions and Fiascoes* (2nd ed.). Houghton Mifflin。
- 読んだ写し：Internet Archive の `janis_groupthink`（2018 年に個人が上げた写し。コレクションは folkscanomy。権利は未確認）の OCR の文字 https://archive.org/details/janis_groupthink 。1982 年版は Internet Archive の貸出だけ。
- 照合の状態：未照合（上げた人の分からない写しで読んだ。1972 の pp.9・13・197–199）。心理的安全性の調べ `pd/knowledge/research/psychological-safety/SURVEY-03-defense-stages.md` §6 は同じ写しを「本文照合済」としているが、今の sources.md §5-8 では、この写しだけで本文照合済にできない。
- 読んだ所（載せる前に、載せてよい写しで確かめ直す）：
  - 定義：「a mode of thinking that people engage in when they are deeply involved in a cohesive in-group, when the members' strivings for unanimity override their motivation to realistically appraise alternative courses of action」（p.9）訳：凝集性の高い内集団に深く関わっているとき、全員一致への努力が、選択肢を現実的に評価する動機を上回るときに人が陥る考え方の様式。続けて、集団の圧力による「deterioration of mental efficiency, reality testing, and moral judgment」を指すと書く（p.9）。
  - 主な仮説：「The more amiability and esprit de corps among the members of a policy-making in-group, the greater is the danger that independent critical thinking will be replaced by groupthink」（p.13。p.198 にほぼ同じ文）。
  - 症状の八つ（無敵の幻想、集団での合理化、集団の道徳性を疑わない、敵の型にはまった見方、異論への直接の圧力、自己検閲、全員一致の幻想〔沈黙を同意とみなす〕、自分から名乗り出た心の番人〔mindguards〕）を、集団浅慮を操作化するための症状として並べる（pp.197–198）。症状を多く示すほど決定の質が悪くなる、というのが著者の「assumption」で、全員一致の追求は敗北後の士気を保つ働きもあるが、多くは決定の質の悪さがそれを上回る、と書く（p.198）。条件を確かめるには、同じような集団の質の高い決定と低い決定の大きな標本の比較が要る、とも書く（p.197）。
- 批判・のちの改め：McCauley（1989）・Esser（1998）・Kramer（1998）などの再検討は、未照合（有料）。Edmondson 1999 が凝集性と心理的安全性を区別するために Janis 1982 を引くことは、心理的安全性の調べで本文照合済（SURVEY-03 §6）。

### 漸進主義（Lindblom 1959）

- 書誌：Lindblom, C. E. (1959). The Science of "Muddling Through". *Public Administration Review* 19(2), 79–88. DOI 10.2307/973677（Crossref と一致。Crossref の頁は 79 から）。
- 照合の状態：未照合（有料）。下の「読めなかったもの」を見る。Mintzberg（1973）が Lindblom の「proceeds in small steps」を引くことは、`pd/knowledge/research/mintzberg-schools/CONTRAST-love-driven-dev.md` に、著者のサイトの写しで読んだ記録がある（Lindblom の原典の確かめではない）。

### 組織の行動理論（Cyert & March 1963）

- 書誌：Cyert, R. M., & March, J. G. (1963). *A Behavioral Theory of the Firm*. Englewood Cliffs, NJ: Prentice-Hall（Citation Classic の頭の書誌で一致。332 頁）。
- 読んだもの：Garfield の「This Week's Citation Classic」（*Current Contents* 1979 年 11 月 12 日、No.46）。ペンシルベニア大学図書館の Garfield の文庫 https://garfield.library.upenn.edu/classics1979/A1979HS08700001.pdf 。
- 照合の状態：要旨照合済（Citation Classic の紹介文と、Cyert 自身の回想。本の本文は未照合（書籍。Internet Archive は貸出と印字困難者向けだけ））。
- 読んだ所：紹介文は、この本が企業の理論と組織の理論を統合しようとし、組織の構造や意思決定の過程といった内の要因を、価格づけのような経済の行為に結びつけ、組織学習と組織のたるみ（organizational slack）を企業の経済の決定に関わる要因として強調する、と書く。Cyert は、寡占の理論が企業の外の変数に偏ることへの不満から、組織の理論との統合を始めたと回想する（1952 年に始まる）。連合・問題に促された探索などの語の定義は、本文で確かめていないので書かない。

### 合理性の二つの推測（March 1978）

- 書誌：March, J. G. (1978). Bounded Rationality, Ambiguity, and the Engineering of Choice. *The Bell Journal of Economics* 9(2), 587–608. DOI 10.2307/3003600（Crossref と一致）。
- 照合の状態：要旨照合済（IDEAS/RePEc の記録の要旨 https://ideas.repec.org/a/rje/bellje/v9y1978iautumnp587-608.html ）。本文は未照合（有料）。
- 要旨：「Rational choice involves two guesses, a guess about uncertain future consequences and a guess about uncertain future preferences.」訳：合理的な選択は二つの推測を含む。不確かな将来の結果についての推測と、不確かな将来の選好についての推測。一つめの推測の扱いの修正が限定合理性の考えにまとまり、近年の研究は二つめ（選好が選択の中でどう処理されるか）を調べている、と要旨は書く。

### 行為の合理性（Brunsson 1982）

- 書誌：Brunsson, N. (1982). The Irrationality of Action and Action Rationality: Decisions, Ideologies and Organizational Actions. *Journal of Management Studies* 19(1), 29–44. DOI 10.1111/j.1467-6486.1982.tb00058.x（Crossref と一致）。
- 照合の状態：要旨照合済（IDEAS/RePEc の記録の要旨 https://ideas.repec.org/a/bla/jomstd/v19y1982i1p29-44.html ）。本文は未照合（有料）。
- 要旨：「rational decision making affords a bad basis for action. Some irrationalities are necessary requirements for organizational actions.」訳：合理的な意思決定は、行為の土台として悪い。いくつかの非合理は、組織の行為の必要条件である。選択は狭く明確な組織のイデオロギーで容易になり、行為は、動機づけとコミットメントを最大にする非合理な意思決定の手続きで容易になる、と要旨は書く。

## 読めなかったもの・載せられないもの

| 文献 | 試した経路 | 状態 |
|---|---|---|
| Lindblom 1959 *PAR* | find-source（Crossref・Unpaywall〔連絡先のメールが無く飛ばした〕・OpenAlex・Semantic Scholar・CORE・IA）は JSTOR の有料の案内だけ。Web 検索で、授業の wiki（sjbae.pbworks.com）と theisrm.org に JSTOR の誌面の写しがあると出た。pbworks の写しは、取りに行く操作が権限の判定（auto mode）で止められた。theisrm.org は試していない | 未照合（有料）。授業の wiki の写しを読んでよいかは pjdhiro の判断 |
| Allison 1969 *APSR* の誌面 | find-source は Cambridge・JSTOR の有料の案内だけ。サンパウロ大学の授業の頁（edisciplinas.usp.br）に JSTOR の写しがあると出たが、取っていない | 1968 の RAND 版を本文照合済で読んだ。誌面は未照合（有料） |
| Cohen ら 1972 の Crossref の書誌 | `--cite` で Crossref が候補を確定できなかった | 書誌は PDF の表紙・JSTOR 番号で確かめた。DOI は未確認（記憶で書かない） |
| Mintzberg ら 1976 | 著者のサイト mintzberg.org の PDF（約 58 MB）。道具の fetch は途中で切れた（19.8 MB）ので、同じ URL を範囲に分けて取り直した | 本文照合済。ただし画像だけの PDF で、読んだのは pp.246・252・271 |
| Cyert & March 1963 | Internet Archive は貸出・印字困難者向けだけ（`behavioraltheory0000cyer`）。Web 検索で無料の版なし | 未照合（書籍）。Citation Classic で要旨照合済 |
| March 1978 *Bell J. Econ.* | find-source は JSTOR の有料だけ。Web 検索で無料の版なし（Studocu の写しは載せてよい写しでない）。Cambridge の再録（1988 の論文集の章）も有料 | 要旨照合済 |
| March 1994 *A Primer on Decision Making* | 探していない（本）。適切さの論理は March & Olsen 2004 で読んだ | 未照合（書籍） |
| Brunsson 1982 *JMS* | find-source は Wiley の有料だけ。Web 検索で無料の版なし。2007 年の論文集（OUP）に再録 | 要旨照合済 |
| Janis 1972・1982 | 1972 は Internet Archive の個人の写し。1982 は貸出だけ。Masaryk 大学の授業の頁に「early draft」の PDF があると出たが、取っていない | 未照合（上げた人の分からない写しで読んだ） |
| Bendor, Moe & Shotts 2001 *APSR*・Olsen 2001 | Web 検索で Cambridge の有料だけ | 未照合（有料） |

有料の手段（相互貸借・購入）は使わない（sources.md §5-6）。
