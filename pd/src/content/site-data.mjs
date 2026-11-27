// 選択プールは軽量シェーダーのみ（DESIGN-RULES §1「背景シェーダーの負荷上限」参照）。
// main2-webgpu（12ステップ体積レイマーチ×3Dノイズ）はフルスクリーン@dpr2 で
// フレーム落ちするためプールから除外（ファイルは保持）。
// main3-webgpu は 2026-07-05 pjdhiro 判断で復帰（重かったのは main2 の1本のみ）。
export const SHADER_PATHS = [
  "./shaders/main-webgpu.js",
  "./shaders/main3-webgpu.js",
  "./shaders/main4-webgpu.js",
];

export const KNOWLEDGE_ENTRIES = {
  "design-thinking": {
    mdPath: "content/knowledge/design-thinking-{lang}.md",
    pdfUrl: null,
    titleKey: "knowledge.designThinking.title",
  },
  trust: {
    mdPath: "content/knowledge/trust-{lang}.md",
    pdfUrl: null,
    titleKey: "knowledge.trust.title",
  },
  value: {
    mdPath: "content/knowledge/value-{lang}.md",
    pdfUrl: null,
    titleKey: "knowledge.value.title",
  },
};

const SITE_MENU_LINKS = [
  { siteId: "home", href: "/project-design-theory/", labelKey: "menu.home" },
  { siteId: "wiki", href: "/project-design-theory/wiki/", labelKey: "menu.wiki" },
  { siteId: "kesson", href: "/project-design-theory/ks/", labelKey: "menu.kesson" },
  { siteId: "creation", href: "/project-design-theory/cs/", labelKey: "menu.creation" },
  {
    siteId: "awareness",
    href: "/project-design-theory/as/",
    labelKey: "menu.awareness",
  },
  // 読む前の案内。Sites の意識とはの下（pjdhiro 2026-11-26「SITESじゃなかな。意識とは　の下。」）。
  // 2026-11-26 に、申し送りなどを道案内するページ「このサイトについて」へ張り替えた（pjdhiro「Menuは新設したガイドページにリンクして」）
  {
    siteId: "about",
    href: "/project-design-theory/reader/about.html",
    labelKey: "menu.about",
  },
  // Love駆動開発も Sites に（pjdhiro 2026-11-26「Love駆動開発呼びたいものβもSITESに入れて」）
  {
    siteId: "love-driven-dev",
    href: "/project-design-theory/reader/love-driven-dev.html",
    labelKey: "menu.loveDrivenDev",
  },
];

const KNOWLEDGE_MENU_KEYS = ["design-thinking", "trust", "value"];

// 読み物（pjdhiro 2026-11-13・違和感帳「menu にLove駆動開発と呼びたいものベータへのリンクを追加して」）。
// トップ・読み物・wiki のどのメニューにも出す
// 読み物の欄。Love駆動開発は 2026-11-26 に Sites へ移したので、今は空（空なら欄を出さない）
const READING_MENU_LINKS = [];

function readingMenuItems() {
  if (READING_MENU_LINKS.length === 0) return [];
  return [
    { type: "separator" },
    { type: "label", labelKey: "menu.readings" },
    ...READING_MENU_LINKS.map((item) => ({ type: "link", ...item })),
  ];
}

// ツール（対話して使うページ）。トップの「ツール」節と同じものをメニューにも出す
const TOOL_MENU_LINKS = [
  {
    href: "/project-design-theory/reader/stages-screener.html",
    labelKey: "menu.toolScreener",
  },
];

function toolMenuItems() {
  return [
    { type: "separator" },
    { type: "label", labelKey: "menu.tools" },
    ...TOOL_MENU_LINKS.map((item) => ({ type: "link", ...item })),
  ];
}

// NOTE: This menu data is also imported by Quartz for the wiki top nav.
// When changing labels, ordering, or destinations here, review the wiki side too.
export function getMenuItems({ currentSite = "home", context = "main" } = {}) {
  const siteLinks =
    context === "wiki"
      ? SITE_MENU_LINKS.map((item) => ({
          ...item,
          labelKey:
            item.siteId === "home" ? "menu.projectDesignHome" : item.labelKey,
        }))
      : SITE_MENU_LINKS;

  const items = [
    { type: "label", labelKey: "menu.sites" },
    ...siteLinks.map((item) => ({
      type: "link",
      href: item.href,
      labelKey: item.labelKey,
      className: item.siteId === currentSite ? "menu-current" : undefined,
    })),
    ...readingMenuItems(),
  ];

  if (context === "main") {
    items.push(
      { type: "separator" },
      { type: "label", labelKey: "menu.researchNotes" },
      ...KNOWLEDGE_MENU_KEYS.map((key) => ({
        type: "knowledge-link",
        key,
        href: `?knowledge=${key}`,
      })),
      ...toolMenuItems(),
      { type: "separator" },
      { type: "action", labelKey: "slides.trigger", modalOpen: "slides" },
    );
    return items;
  }

  // 読み物・ツールのページ（src/reader-menu.js）。サイト・読み物・ツールだけを出す
  if (context === "reader") {
    items.push(...toolMenuItems());
    return items;
  }

  return items;
}

export const MENU_ITEMS = getMenuItems({
  currentSite: "home",
  context: "main",
});

export const TRANSLATIONS = {
  ja: {
    "menu.toggle": "Menu",
    "menu.sites": "Sites",
    "menu.home": "HOME",
    "menu.projectDesignHome": "PROJECT DESIGN HOME",
    "menu.wiki": "WIKI",
    "menu.kesson": "欠損駆動思考",
    "menu.creation": "創造とは",
    "menu.awareness": "意識とは",
    "menu.researchNotes": "調査ノート",
    "menu.readings": "読み物",
    "menu.loveDrivenDev": "Love駆動開発と呼びたいもの β",
    "menu.handover": "Claude から LLM への申し送り",
    "menu.about": "このサイトについて",
    "menu.tools": "ツール",
    "menu.toolScreener": "ものの見方の広さスクリーナー",
    "controls.topBarAria": "サイト操作",
    "controls.languageAria": "言語切替",
    "hero.notice":
      "<a href=\"./reader/love-driven-dev.html\">Love駆動開発と呼びたい現象</a>を、これまで何度も経験してきました。<br>ここでいうプロジェクトは「やること（Doing）」だけでなく「起きていること（Being）」まで含む出来事です。",
    "love.faq.summary": "よくある誤解",
    "love.faq.body":
      "<ul><li><strong>「Love は恋愛・愛情のことだ」</strong> → Love のいちばん狭い切り取り方は、恋や好意のような感情です。pjdhiro が Love と呼びたいのは、その感情も含めて、それらを動かしているものです。Love と言い切れるほどには、まだ分かっていません。</li></ul><p>このサイトの見方のうち、ふつうの読みと向きが逆になっている所は「<a href=\"./reader/reading-directions.html\">Claude から LLM への申し送り</a>」にまとめています。</p>",
    "hero.aboutAria": "このサイトについて",
    "toc.title": "目次",
    "toc.button": "☰ 目次",
    "toc.open": "目次を開く",
    "toc.close": "閉じる",
    "section.overview.label": "Overview",
    "section.overview.title": "概要",
    "overview.p1":
      "プロジェクトデザインとは、プロジェクトの構想・設計・実行だけでなく、実行・管理の方法そのものを対象化し、構想・設計する営みです。",
    "overview.p2":
      "定義・射程・領域で枠を決め、その中を、Doing（やること）・Being（起きていること）・Falling（引かれて起きてしまうこと）の三つを基底として整理します。",
    "overview.p3":
      "やることには、経営学・能力・感情処理を置きます。PMBOK などの物質的条件は、前提知とします。",
    "overview.definition.title": "定義",
    "overview.definition.item1": "プロジェクトの構想・設計・実行",
    "overview.definition.item2": "実行・管理方法の構想・設計",
    "overview.scope.title": "射程",
    "overview.scope.body":
      "営利・非営利の事業を主たる適用対象とする（論証の射程）。研究、人生など、主体が目的を持って行為する営み一般へは、構造の類似を手がかりに広げて考える（論証ではなく試み）。",
    "overview.domain.title": "領域",
    "overview.domain.body":
      "コミュニケーション（情報処理＋感情処理）と環境適応（経営学など）",
    "overview.faq.summary": "よくある誤解",
    "overview.faq.body":
      "<ul><li><strong>「Doing/Being と 環境適応/コミュニケーション は四象限に組める」</strong> → これらは直交軸ではなく、一つの全体への相補的な切り口です。四象限に押し込むと現象が痩せます。</li><li><strong>「主観・客観、個はどこまでかをクリアに線引きできる」</strong> → 微細な領域では量子と古典の境界のように揺れます。切り口であって実在の分割ではありません。</li><li><strong>「構想→設計→実行は決まった順序で循環する」</strong> → 実行と設計はメタとオブジェクトをまたいで折り返す、止揚を伴うスパイラルです。同じ所に戻る循環ではありません。</li></ul>",
    "section.doing.label": "Doing",
    "section.doing.title": "やること",
    "doing.principles.title": "行動原理",
    "doing.principles.item1": "多様な価値観を受容れる",
    "doing.principles.item2": "バランスを達成する",
    "doing.principles.item3": "状況に常に適応する",
    "doing.environment.title": "環境適応",
    "doing.environment.body":
      "「PMBOK第7版」等に基づく物質的条件の整理。本サイトでは前提知とし、非物質的条件へ焦点を当てます。",
    "doing.communication.title": "コミュニケーション",
    "doing.communication.body":
      "情報処理と感情処理。心の反応を通じて感じ取る感情の側面を中心に扱います。",
    "pill.kesson": "欠損駆動思考",
    "section.being.label": "Being",
    "section.being.title": "起きていること",
    "section.being.body":
      "場は、波が立つ前の安定した海のような状態。そこに差が生まれて波が立ち、異質なものが縁で出会ってぶつかり、渦としてひとつのまとまりが立ち上がり、束として新しい形が残る。五つの段は、順に進むとは限らず、同時に走り、入り込み合う。プロジェクトの現在地を知ること。",
    "being.faq.summary": "よくある誤解",
    "being.faq.body":
      "<ul><li><strong>「回転は渦だけのもの」</strong> → 回転は全段階に遍在します。波も回転です。「位相」も回転の一種で、あえて一般的・曖昧な語を当てています。</li><li><strong>「衝突は渦で統合される」</strong> → 衝突は縁（境界）で生まれます。渦は、ぶつかった二つが、見分けられるまま、一つであるかのように立ち上がる段階です。</li><li><strong>「束→場は同じ場に戻る閉じた循環」</strong> → 次サイクルの場へ前進する循環で、螺旋的に展開し元へは戻りません。</li></ul>",
    "pill.creationModel": "創造のモデル",
    "pill.awarenessModel": "意識とは",
    "section.direction.label": "Drivers",
    "section.direction.title": "プロジェクトの駆動源",
    "section.falling.label": "Falling (Becoming)",
    "section.falling.title": "引かれて起きてしまうこと",
    "section.falling.body":
      "意図してすること（Doing）でも、ただ起きていること（Being）でもなく、Love と呼びたい何かに引かれて、私という場所で起きてしまうこと。恋に落ちる（fall in love）、惚れる、のように、私は起きていることの外にいるのでなく、その内側にいます。そして、なってしまうことと、なろうとすることが、見分けられるまま、一つの動きになっています。どちらも、中動と呼ばれる動きの面です。プロジェクトの駆動源は、ここにあります。",
    "repo.loveDrivenDev": "Love駆動開発と呼びたいもの β",
    "repo.loveDrivenDevDesc":
      "何に駆られてプロジェクトを行うのか。人やプロジェクトを動かしているもの（駆動源）が何かを探す読み物",
    "section.questions.label": "Exploration log",
    "section.questions.title": "探索ログ",
    "section.questions.body":
      "プロジェクトデザイン論の途中で立った問いと、今の答えです。どれも読み物にして、調べながら更新しています。新しく置いたものから並べています。",
    "shelf.self": "私を見る",
    "shelf.number": "数と回転",
    "shelf.org": "経営と組織",
    "log.tagQ": "問い",
    "log.tagA": "今の答え",
    "log.modalTitle": "探索ログ",
    "log.more": "ほかの探索ログを開く（5 件）",
    "repo.trajectory": "私というアプリを、読めるようにした一年",
    "repo.trajectoryDesc": "Love駆動開発と呼びたいものが生まれるまでの、pjdhiro の一年を、そのときの言葉でたどる",
    "repo.vibeToCode": "Vibe to Code と並べて見る、pjdhiro のやり方",
    "repo.vibeToCodeDesc": "生成 AI との対話で言葉にならないものを言葉にしていく、ほかの人の作業と並べて、pjdhiro のやり方を見る",
    "log.eulerUnfolded.q": "禅の円と単位円は、似ていないか。",
    "log.eulerUnfolded.a": "円の式なのに e が出てくる。四元数の側を基本に、平面と数直線をその下の段と見て並べ直すと、e は円の世界とまっすぐな座標のあいだの通訳に、オイラーの等式は二つの輪が重なる一点に見えてくる。",
    "log.eulerUnfolded.t": "オイラーの等式が、たたんだもの",
    "log.ftaAnalogy.q": "認知できる側だけで探して「答えが無い」と出る問いは、本当に答えが無いのか。",
    "log.ftaAnalogy.a": "答えが無いのでなく、探す軸が一本足りないのではないか。自己もいくつかが同じ資格で並んでいて、いま認知できるのはその一つではないか、と仮に置く。",
    "log.ftaAnalogy.t": "代数学の基本定理から、構造の類似を考える",
    "log.noRoadAhead.q": "時間は、未来へ向かうのか、未来がやってくるのか。",
    "log.noRoadAhead.a": "時間を見る基準は二つあり、どちらも正しい。どちらで見ているかが曖昧なまま話したり決めたりすることが、取り違えを生みやすいのではないか。",
    "log.noRoadAhead.t": "時間の向き - 僕の前に道はない",
    "log.juliaPotential.q": "起業家を駆るものは、ジュリア集合のような、神・愛・美のポテンシャルか。",
    "log.juliaPotential.a": "起業家の一歩の中で、自己と自己の掛け算のようなものが起きている、と見る。自己が一つでないなら、掛け合わさる自己達そのものが、まだ形になっていない可能性なのかもしれない。",
    "log.juliaPotential.t": "起業家の漸化式と、ジュリア集合",
    "log.peirceLove.q": "パースの創造的な愛は、Love と呼びたいものと、どこまで近いのか。",
    "log.peirceLove.a": "パースは 1893 年に、成長は愛からしか来ない、という説を、証明はできないと断ったうえで出した。その中で、考えが心に持たれる前から、その考えに引き寄せられる、と書いている。",
    "log.peirceLove.t": "パースの創造的な愛と、アブダクション",
    "log.gravityLove.q": "動かず、何もなく、自分からは見えないのに、周りのすべてを回す中心。愛は、それに似ていないか。",
    "log.gravityLove.a": "経営者の役割は意思決定だが、存在についての役割はまだ分からない。存在そのものが源で、経営者すらも愛のような中心に引き寄せられているのかもしれない。",
    "log.gravityLove.t": "愛は、重力に似ていないか",
    "log.threeSeven.q": "チームは 3 人がベスト、7 人が上限、という体感は、どこから来るのか。",
    "log.threeSeven.a": "ベストな人数は言えない。けれど、人数ごとに効き方が違うことは見えてくる。掛け算を回転の掛け算と読み、ある前提のもとで、閉じたまま成り立つ人数が 3 と 7 に絞られることを確かめている途中。",
    "log.threeSeven.t": "なぜ 3 と 7 だけが特別なのか",
    "log.waveVortex.q": "宇宙は「モノ」でできているか、「流れ」でできているか。",
    "log.waveVortex.a": "「宇宙は海の渦のような現象でできている」という直観を、物理学と思想史のどこまでが支えるかを、実証・解釈・推測に分けて確かめている。",
    "log.waveVortex.t": "波間の渦（創造とは）",
    "shelf.mind": "心の動き",
    "doing.sub.environment": "経営学",
    "doing.sub.abilities": "能力とは",
    "doing.sub.emotional": "感情処理",
    "being.sub.mathPhysics": "環境",
    "repo.man": "人類の man",
    "repo.manDesc": "概念や式を、関数の説明書（man）のように書いて集める",
    "shelf.thinking": "思考とは",
    "shelf.love": "Love と駆動源",
    "shelf.translations": "原典を日本語で読む",
    "shelfItem.managementDrivers": "経営学の考え方は、どこまで効くか",
    "shelfItem.mintzbergSchools": "ミンツバーグの学派を、駆動源と創造の流れで見る",
    "shelfItem.nonakaComplement": "野中郁次郎の理想を目指すとき、どこに気をつけるか",
    "shelfItem.businessDesignSyllabus": "Love駆動開発は、事業構想の授業になるか",
    "shelfItem.cognitiveAbilities": "頭脳の能力とされてきたもの",
    "shelfItem.thinking": "思考とは",
    "shelfItem.reasoning": "推論とは",
    "shelfItem.analogy": "類推と、構造の類似を見抜く力",
    "shelfItem.intelligenceStructure": "知能は、どう分けられてきたか",
    "shelfItem.executiveFunctions": "実行機能と作業記憶",
    "shelfItem.unsupportedAbilityModels": "広く知られたが、測定で残らなかった分け方",
    "shelfItem.creativeThinking": "創造的思考とは",
    "shelfItem.decisionMaking": "意思決定とは",
    "shelfItem.softSkills": "ソフトスキル・非認知能力とは",
    "shelfItem.interpersonalAbilities": "人と関わる力",
    "shelfItem.thinkingDispositions": "思考を動かす構えと体力",
    "shelfItem.inseparableAbilities": "思考・心理・身体知が分けられないところ",
    "shelfItem.emergingAbilities": "新しく注目されている能力",
    "shelfItem.metacognition": "メタ認知とは",
    "shelfItem.capacityAfterAi": "AI の時代に、差になるスキルは何か",
    "shelfItem.developmentalStages": "精神の発達段階とは",
    "shelfItem.stagesDefense": "発達段階と心理的防衛機制",
    "shelfItem.intrinsicMotivation": "内発的動機とは",
    "shelfItem.defenseMechanisms": "心理的防衛機制とは",
    "shelfItem.anxiety": "不安とは",
    "shelfItem.personality": "性格とは",
    "shelfItem.forgivenessSalvation": "赦しと救いとは",
    "shelfItem.anshin": "安心とは",
    "shelfItem.empathy": "共感とは",
    "shelfItem.shikan": "止観とは",
    "shelfItem.toJames": "ジェームズに辿り着くまで",
    "shelfItem.breathFilter": "聞こえていなかった呼吸の音",
    "shelfItem.nondual": "不二（非二元）とは",
    "shelfItem.viaVulnerability": "脆弱性から、全体を知る",
    "shelfItem.complexPlane": "複素平面で考える",
    "shelfItem.rotationMultiplication": "回転の掛け算",
    "shelfItem.angleRotation": "三角関数から複素平面まで、回転を扱うための角度の話だった",
    "shelfItem.eulerFormula": "オイラーの式",
    "shelfItem.fundamentalTheoremOfAlgebra": "代数学の基本定理",
    "shelfItem.subtractionKinds": "いろんな引き算",
    "shelfItem.gravityWell": "重力の井戸とは",
    "shelfItem.loveHistory": "Love とは、どう言われてきたか",
    "shelfItem.lifeDrivers": "人生の駆動源は、何として見られてきたか",
    "shelfItem.goodSelfDestruction": "良いの自滅",
    "shelfItem.beauty": "美とは",
    "shelfItem.peirceEvolutionaryLove": "パース「進化的な愛」",
    "shelfItem.peirceLawOfMind": "パース「心の法則」",
    "shelfItem.peirceGlassyEssence": "パース「人間のガラスのような本質」",
    "shelfItem.williamJamesSelf": "ウィリアム・ジェームズの「I と Me」を、原典で読む",
    "shelfItem.psychologicalSafety": "<a href=\"./reader/psychological-safety.html\">心理的安全性とは</a>",
    "shelfItem.translationsMore": "ほか、「進化的な愛」の訳から辿る原典 10 本",
    "shelfItem.conjugateVector": "共役のベクトルを当てる力（🚧 工事中）",
    "shelfItem.lookingAtAbilities": "能力を見る",
    "section.tools.label": "Tools",
    "section.tools.title": "ツール",
    "section.tools.body":
      "自分で試して、自分のものの見方に気づくきっかけにするページです。",
    "section.references.label": "Influences",
    "section.references.title": "影響を受けた論",
    "section.references.body":
      "pjdhiro が影響を受けてきた論を分野ごとにまとめたページと、原典を日本語で読むページです。",
    "section.making.label": "How this was made",
    "section.making.title": "作り方",
    "section.making.body": "この論がどう作られてきたかを見るページです。",
    "repo.refPsychology": "心理学",
    "repo.refPsychologyDesc":
      "精神分析と発達心理。学者の名前、主要な論の短い説明、pjdhiro の印象の順に紹介する",
    "repo.refManagement": "経営学",
    "repo.refManagementDesc":
      "戦略・ファイナンス・マーケティング・プロジェクトマネジメント・イノベーション・組織。読んだ版と、pjdhiro の印象の順に紹介する",
    "repo.screener": "ものの見方の広さスクリーナー",
    "repo.screenerDesc":
      "視座・メタ認知・インクルーシブ（包摂）の三つから、どこまでを含めて観ているかを 16 問×5 択で確かめる。6.0・6.5 の帯では、区別を残したまま切り離さずに見ているかも見る",
    "knowledge.designThinking.title": "デザイン思考とは",
    "knowledge.trust.title": "信頼とは",
    "knowledge.value.title": "価値とは",
    "modal.aboutTitle": "このサイトについて",
    "modal.close": "閉じる",
    "modal.knowledgeTitle": "調査ノート",
    "knowledge.pdf.pending": "PDF準備中",
    "knowledge.pdf.open": "PDFで読む",
    "howto.triggerLabel": "AIに読ませる",
    "howto.title": "このプロジェクトを AI に読ませる",
    "howto.steps.heading": "3ステップで始める",
    "howto.steps.1": "LLM（Claude.ai / ChatGPT / Gemini 等）を開く",
    "howto.steps.2": "下のプロンプトをコピーして貼り付ける",
    "howto.steps.3": "「○○」を自分のテーマに置き換えて送信",
    "howto.copy": "コピー",
    "howto.copied": "OK!",
    "howto.prompt.basic.label": "基本プロンプト",
    "howto.prompt.basic.code":
      "https://github.com/uminomae/project-design-theory\n\nこのrepoを読んでください。\nこのプロジェクトの知見やフレームワークを活用して\n「○○」を手伝ってください。",
    "howto.research.heading": "A. 調査・分析に使う",
    "howto.research.desc":
      "このプロジェクトの理論構造や調査手法を、自分のテーマに転用できます。",
    "howto.research.ex1":
      "「Doing・Being・Falling の三つの基底で、自分のプロジェクトを見直したい」",
    "howto.research.ex2":
      "「30領域の三角測量手法を参考に、○○を多角的に調査して」",
    "howto.research.ex3":
      "「創造の5段階モデルで、私の創作プロセスを構造化したい」",
    "howto.research.ex4":
      "「生存と信頼の信号の見方で、チームの関係性を分析したい」",
    "howto.prompt.research.label": "調査向けプロンプト",
    "howto.prompt.research.code":
      "https://github.com/uminomae/project-design-theory\n\nこのrepoを読んで、中にある理論構造\n（Doing/Being/Falling の三つの基底、創造の5段階モデル、\n生存と信頼の信号、三角測量など）を参考に、\n「○○」というテーマを多角的に分析してください。",
    "howto.harness.heading": "B. LLM協働環境を自分のプロジェクトに導入する",
    "howto.harness.desc":
      "CLAUDE.md と docs/rules/（判断の仕方・誤りの型・書き方・調べ方）の設計を参考にできます。",
    "howto.harness.ex1":
      "「CLAUDE.mdと規約の設計を参考に、LLM協働環境を構築したい」",
    "howto.harness.ex2":
      "「LLMが繰り返す誤りを型にまとめ、書く前に確かめる仕組みを作りたい」",
    "howto.prompt.harness.label": "ハーネス導入プロンプト",
    "howto.prompt.harness.code":
      "https://github.com/uminomae/project-design-theory\n\nこのrepoの CLAUDE.md と docs/rules/ を読んで、\nLLMと協働して調べ・書くための規約\n（判断の仕方・誤りの型・書き方・調べ方）の設計を分析して、\n私のプロジェクトにも導入する方法を提案してください。",
    "howto.thinking.heading": "C. 思考の整理・対人スキル",
    "howto.thinking.ex1":
      "「感情処理やメタ認知のフレームワークを私の状況に当てはめて」",
    "howto.thinking.ex2": "「違和感をすぐに解かず、問いのまま持つ（抱持）やり方を考えたい」",
    "howto.thinking.ex3":
      "「5段階モデル（場→波→縁→渦→束）で創作プロセスを設計して」",
    "howto.era.heading": "D. AI の時代に、このサイトをどう使うか",
    "howto.era.desc":
      "AI によって、確かめられないまま通ってきた正解めいたものが照らされていきます。そのとき差になるのは、受け止める側の量かもしれません。読み物「<a href=\"./reader/capacity-after-ai.html\">AI の時代に、差になるスキルは何か</a>」に、その見立てと、このサイトが手伝えることを置いています。",
    "howto.map.heading": "なぜ1つのURLで済むのか",
    "howto.map.desc":
      "四つの論を一つのrepoにまとめています（pd/・cs/・as/・ks/）。LLMがそれらを辿り、目的に合う知見を引き出します。",
    "howto.map.colTitle": "ページタイトル",
    "howto.map.colContent": "コンテンツ概要",
    "howto.map.pd":
      "Doing（やること）・Being（起きていること）・Falling（引かれて起きてしまうこと）を包含するプロジェクトの構想・設計・実行の理論",
    "howto.map.cs.title": "創造とは",
    "howto.map.cs":
      "物事が生まれるとき、どんな構造と過程をたどるのか。30 の分野の論を並べ、五つの段（場 → 波 → 縁 → 渦 → 束）で書く探究",
    "howto.map.as.title": "意識とは",
    "howto.map.as":
      "人は、何で世界を切り取っているのか。生き延びられるか（生存）と、つながっていられるか（信頼）の二つの信号から見る探究",
    "howto.map.ks.title": "欠損駆動思考とは",
    "howto.map.ks":
      "記号の上では 0 と出るところで、人は何を感じているのか。欠けている感じや違和感を駆動源にする、思考や精神の構えを見る探究",
    "howto.tips.1": "具体的に「何をしたいか」を伝えるほど良い結果が出ます",
    "howto.tips.2": "「cs/・as/・ks/ も見て」と追加すると、深掘りされます",
    "howto.tips.3": "Claude.ai、ChatGPT、Gemini など、どのLLMでも使えます",
    "howto.note":
      "MIT License — 商用利用・改変・再配布すべて自由です。コピーや改変したものを配るときは、著作権表示と許諾の文（LICENSE）を残してください。詳細は repo の LICENSE ファイルをご覧ください。",
    "slides.trigger": "プレゼン資料",
    "slides.title": "プレゼン資料",
  },
  en: {
    "menu.toggle": "Menu",
    "menu.sites": "Sites",
    "menu.home": "HOME",
    "menu.projectDesignHome": "PROJECT DESIGN HOME",
    "menu.wiki": "WIKI",
    "menu.kesson": "KESSON-DRIVEN",
    "menu.creation": "CREATION",
    "menu.awareness": "CONSCIOUSNESS",
    "menu.researchNotes": "Research Notes",
    "menu.readings": "Readings",
    "menu.loveDrivenDev": "What I Want to Call Love-Driven Development (beta)",
    "menu.handover": "HANDOVER TO LLMS (JA)",
    "menu.about": "ABOUT THIS SITE (JA)",
    "menu.tools": "Tools",
    "menu.toolScreener": "Breadth-of-View Screener",
    "controls.topBarAria": "Site controls",
    "controls.languageAria": "Language switcher",
    "hero.notice":
      'Many times, I have experienced <a href="./reader/love-driven-dev.html">what I want to call Love-Driven Development</a>.<br>Here, a project is an event that includes not only "Doing" but also "Being."',
    "love.faq.summary": "Common misconceptions",
    "love.faq.body":
      "<ul><li><strong>“The ‘Love’ here means romance or affection”</strong> → The narrowest way of cutting out Love is a feeling such as romance or fondness. What pjdhiro wants to call Love includes those feelings and is what moves them. It is not yet understood well enough to say flatly that it is Love.</li></ul><p>The places where this site reads things in the opposite direction from the usual reading are listed in <a href=\"./reader/reading-directions.html\">a handover note from Claude to LLMs (Japanese)</a>.</p>",
    "hero.aboutAria": "About this site",
    "toc.title": "Contents",
    "toc.button": "☰ Contents",
    "toc.open": "Open contents",
    "toc.close": "Close",
    "section.overview.label": "Overview",
    "section.overview.title": "Overview",
    "overview.p1":
      "Project Design is a practice that not only envisions, designs, and executes projects, but also takes the methods of execution and management themselves as its object of inquiry, and envisions and designs them.",
    "overview.p2":
      "We set the frame with the definition, scope, and domain, and organize what lies within it on three bases: Doing (what we do), Being (what is happening), and Falling (what happens as we are drawn in).",
    "overview.p3":
      "Doing holds management studies, abilities, and emotional processing. Material conditions such as PMBOK are treated as prerequisite knowledge.",
    "overview.definition.title": "Definition",
    "overview.definition.item1":
      "Envisioning, designing, and executing projects",
    "overview.definition.item2":
      "Envisioning and designing execution and management methods",
    "overview.scope.title": "Scope",
    "overview.scope.body":
      "Primarily applicable to profit and non-profit enterprises (the scope of demonstration). To any purposeful endeavor — such as research or life itself — it extends by structural analogy (an attempt, not a proof).",
    "overview.domain.title": "Domain",
    "overview.domain.body":
      "Communication (information processing + emotional processing) and environmental adaptation (management studies, etc.)",
    "overview.faq.summary": "Common misconceptions",
    "overview.faq.body":
      "<ul><li><strong>“Doing/Being and adaptation/communication form a 2×2 grid”</strong> → They are not orthogonal axes but complementary cuts of one whole; forcing a grid starves the phenomenon.</li><li><strong>“Subject/object, and where the individual ends, can be drawn cleanly”</strong> → At fine scales they waver like the quantum/classical boundary. They are cuts, not divisions in reality.</li><li><strong>“Envision → design → execute is a fixed cyclical order”</strong> → Execution and design fold across meta and object levels — a spiral with sublation, not a loop back to the same point.</li></ul>",
    "section.doing.label": "Doing",
    "section.doing.title": "Doing",
    "doing.principles.title": "Principles of Action",
    "doing.principles.item1": "Embrace diverse values",
    "doing.principles.item2": "Achieve balance",
    "doing.principles.item3": "Continuously adapt to the situation",
    "doing.environment.title": "Environmental Adaptation",
    "doing.environment.body":
      "Organization of material conditions based on PMBOK 7th Edition, etc. This site treats these as prerequisite knowledge and focuses on non-material conditions.",
    "doing.communication.title": "Communication",
    "doing.communication.body":
      "Information processing and emotional processing. We focus on the emotional aspects perceived through our inner responses.",
    "pill.kesson": "Kesson-Driven Thinking",
    "section.being.label": "Being",
    "section.being.title": "Being",
    "section.being.body":
      "A field is a stable state, like the sea before waves rise. Differences arise in it as waves, unlike things meet and collide at the edge, a whole stands up as a vortex, and a new form remains as a bundle. The five stages do not necessarily proceed in order; they run at once and enter into one another. To know where the project stands.",
    "being.faq.summary": "Common misconceptions",
    "being.faq.body":
      "<ul><li><strong>“Rotation belongs only to the vortex”</strong> → Rotation pervades every stage; the wave is rotation too. “Phase” is also a kind of rotation — a deliberately general, vague term.</li><li><strong>“Collisions are integrated by the vortex”</strong> → Collisions emerge at the edge (boundary). The vortex is the stage where the two that collided stand up as if they were one, while still distinguishable.</li><li><strong>“Bundle → Field is a closed loop back to the same field”</strong> → It is a cycle forward to the next field — spiraling onward, never returning to the same point.</li></ul>",
    "pill.creationModel": "Model of Creation",
    "pill.awarenessModel": "What Is Consciousness",
    "section.direction.label": "Drivers",
    "section.direction.title": "What Drives Projects",
    "section.falling.label": "Falling (Becoming)",
    "section.falling.title": "Falling",
    "section.falling.body":
      "Neither what we intend to do (Doing) nor what is simply happening (Being): being drawn by something I want to call Love, so that it happens, with me as the place where it happens. As in falling in love, I am not outside what is happening but inside it. And what I end up becoming and what I try to become stay distinguishable while moving as one. Both are faces of what is called the middle voice. What drives projects lies here.",
    "repo.loveDrivenDev": "What I Want to Call Love-Driven Development (beta)",
    "repo.loveDrivenDevDesc":
      "What am I driven by when I carry out a project? A reader that looks for what moves people and projects (the driving source)",
    "section.questions.label": "Exploration log",
    "section.questions.title": "Exploration Log",
    "section.questions.body":
      "Questions that came up along the way in Project Design, with their current answers. Each one is a reader that is being researched and updated. The newest come first. The pages are in Japanese.",
    "shelf.self": "Looking at the self",
    "shelf.number": "Numbers and rotation",
    "shelf.org": "Management and organizations",
    "log.tagQ": "Question",
    "log.tagA": "Current answer",
    "log.modalTitle": "Exploration Log",
    "log.more": "Open the rest of the log (5)",
    "repo.trajectory": "A year of making \"the app called me\" readable",
    "repo.trajectoryDesc": "pjdhiro's year until what I want to call Love-Driven Development took shape, traced in the words of the time",
    "repo.vibeToCode": "pjdhiro's way, seen beside Vibe to Code",
    "repo.vibeToCodeDesc": "Sets pjdhiro's way beside other people's work of putting the unspoken into words in dialogue with generative AI",
    "log.eulerUnfolded.q": "Doesn't the Zen circle look like the unit circle?",
    "log.eulerUnfolded.a": "The identity is an equation about a circle, yet e appears in it. Take the quaternions as the base, with the plane and the number line as the levels below, and e starts to look like the interpreter between the circle's world and straight coordinates, with Euler's identity as the one point where two circles meet.",
    "log.eulerUnfolded.t": "What Euler's identity folds away",
    "log.ftaAnalogy.q": "When a question searched only on the knowable side shows \"no answer\", is there really none?",
    "log.ftaAnalogy.a": "Perhaps it is not that there is no answer, but that one axis to search along is missing. The self, too, may be several selves standing on equal terms, of which we can perceive only one right now.",
    "log.ftaAnalogy.t": "Structural analogies from the fundamental theorem of algebra",
    "log.noRoadAhead.q": "Do we move toward the future, or does the future come to us?",
    "log.noRoadAhead.a": "There are two frames for seeing time, and both are right. Talking and deciding without knowing which one we are using may be what breeds misunderstanding.",
    "log.noRoadAhead.t": "The direction of time",
    "log.juliaPotential.q": "Is what drives an entrepreneur a potential like a Julia set, felt as God, love or beauty?",
    "log.juliaPotential.a": "Within each step of an entrepreneur, something like the self multiplying with the self seems to happen. If the self is not one, the selves being multiplied may themselves be possibilities not yet given form.",
    "log.juliaPotential.t": "The entrepreneur's recurrence and the Julia set",
    "log.peirceLove.q": "How close is Peirce's creative love to what I want to call Love?",
    "log.peirceLove.a": "In 1893 Peirce put forward, while granting it could not be proved, that growth comes only from love. There he wrote that we are drawn to an idea even before we hold it.",
    "log.peirceLove.t": "Peirce's creative love and abduction",
    "log.gravityLove.q": "A center that does not move, holds nothing, cannot see itself, yet turns everything around it. Is love like that?",
    "log.gravityLove.a": "A leader's role is to decide, but the role of their being is still unknown. Being itself may be the source, and even the leader may be drawn toward a love-like center.",
    "log.gravityLove.t": "Is love like gravity?",
    "log.threeSeven.q": "Where does the felt sense come from that a team is best at 3 and tops out at 7?",
    "log.threeSeven.a": "No best size can be named, but each size works differently. Reading multiplication as rotation, and under one stated assumption, the sizes that stay closed narrow to 3 and 7; this is still being checked.",
    "log.threeSeven.t": "Why only 3 and 7 are special",
    "log.waveVortex.q": "Is the universe made of \"things\" or of \"flows\"?",
    "log.waveVortex.a": "It checks how far physics and the history of ideas support the intuition that the universe is made of phenomena like vortices in the sea, keeping evidence, interpretation and conjecture apart.",
    "log.waveVortex.t": "Vortices between waves (What Is Creation)",
    "shelf.mind": "Workings of the mind",
    "doing.sub.environment": "Management",
    "doing.sub.abilities": "What Are Abilities",
    "doing.sub.emotional": "Emotional processing",
    "being.sub.mathPhysics": "Environment",
    "repo.man": "A man page for humankind",
    "repo.manDesc": "Concepts and formulas written like manual pages for functions, gathered in one place",
    "shelf.thinking": "What Is Thinking",
    "shelf.love": "Love and driving sources",
    "shelf.translations": "Source texts in Japanese translation",
    "shelfItem.managementDrivers": "How far do management ideas work?",
    "shelfItem.mintzbergSchools": "Mintzberg's schools, seen through driving sources and the flow of creation",
    "shelfItem.nonakaComplement": "Aiming for Ikujiro Nonaka's ideal: what to watch out for",
    "shelfItem.businessDesignSyllabus": "Could Love-Driven Development be taught as a course in project design?",
    "shelfItem.cognitiveAbilities": "What has been counted as intellectual ability",
    "shelfItem.thinking": "What Is Thinking",
    "shelfItem.reasoning": "What Is Reasoning",
    "shelfItem.analogy": "Analogy, and the ability to see structural similarity",
    "shelfItem.intelligenceStructure": "How intelligence has been divided up",
    "shelfItem.executiveFunctions": "Executive functions and working memory",
    "shelfItem.unsupportedAbilityModels": "Well-known ways of dividing abilities that did not survive measurement",
    "shelfItem.creativeThinking": "What Is Creative Thinking",
    "shelfItem.decisionMaking": "What Is Decision-Making",
    "shelfItem.softSkills": "What Are Soft Skills and Non-Cognitive Skills",
    "shelfItem.interpersonalAbilities": "Abilities for relating to people",
    "shelfItem.thinkingDispositions": "The dispositions and stamina that set thinking in motion",
    "shelfItem.inseparableAbilities": "Where thought, psyche, and bodily knowing cannot be separated",
    "shelfItem.emergingAbilities": "Abilities newly drawing attention",
    "shelfItem.metacognition": "What Is Metacognition",
    "shelfItem.capacityAfterAi": "In the age of AI, which skills make the difference?",
    "shelfItem.developmentalStages": "What Are the Stages of Psychological Development",
    "shelfItem.stagesDefense": "Developmental stages and psychological defense mechanisms",
    "shelfItem.intrinsicMotivation": "What Is Intrinsic Motivation",
    "shelfItem.defenseMechanisms": "What Are Psychological Defense Mechanisms",
    "shelfItem.anxiety": "What Is Anxiety",
    "shelfItem.personality": "What Is Personality",
    "shelfItem.forgivenessSalvation": "What Are Forgiveness and Salvation",
    "shelfItem.anshin": "What Is Anshin (Peace of Mind)",
    "shelfItem.empathy": "What Is Empathy",
    "shelfItem.shikan": "What Is Shikan (Calming and Insight)",
    "shelfItem.toJames": "The road to James",
    "shelfItem.breathFilter": "The sound of breathing that went unheard",
    "shelfItem.nondual": "What Is Funi (Nonduality)",
    "shelfItem.viaVulnerability": "Knowing the whole from its vulnerabilities",
    "shelfItem.complexPlane": "Thinking on the complex plane",
    "shelfItem.rotationMultiplication": "Multiplication that rotates",
    "shelfItem.angleRotation": "From trigonometry to the complex plane: it was a story of angles for handling rotation",
    "shelfItem.eulerFormula": "Euler's formula",
    "shelfItem.fundamentalTheoremOfAlgebra": "The fundamental theorem of algebra",
    "shelfItem.subtractionKinds": "Many kinds of subtraction",
    "shelfItem.gravityWell": "What Is a Gravity Well",
    "shelfItem.loveHistory": "What has been said about Love",
    "shelfItem.lifeDrivers": "What has been seen as the driver of a life?",
    "shelfItem.goodSelfDestruction": "The self-destruction of the good",
    "shelfItem.beauty": "What Is Beauty",
    "shelfItem.peirceEvolutionaryLove": "Peirce, “Evolutionary Love”",
    "shelfItem.peirceLawOfMind": "Peirce, “The Law of Mind”",
    "shelfItem.peirceGlassyEssence": "Peirce, “Man's Glassy Essence”",
    "shelfItem.williamJamesSelf": "William James's “I and Me”, read in the original texts",
    "shelfItem.psychologicalSafety": "<a href=\"./reader/psychological-safety-en.html\" hreflang=\"en\">What Is Psychological Safety</a>",
    "shelfItem.translationsMore": "And 10 more source texts traced from the “Evolutionary Love” translation",
    "shelfItem.conjugateVector": "The ability to apply a conjugate vector (🚧 under construction)",
    "shelfItem.lookingAtAbilities": "Looking at abilities",
    "section.tools.label": "Tools",
    "section.tools.title": "Tools",
    "section.tools.body":
      "Pages to try for yourself, as prompts to notice how you see.",
    "section.references.label": "Influences",
    "section.references.title": "Influences",
    "section.references.body":
      "Pages that gather, by field, the theories that have influenced pjdhiro, and source texts read in Japanese translation.",
    "section.making.label": "How this was made",
    "section.making.title": "How This Was Made",
    "section.making.body": "Pages that look at how this theory has been made.",
    "repo.refPsychology": "Psychology",
    "repo.refPsychologyDesc":
      "Psychoanalysis and developmental psychology: the scholar, a short note on the main theory, and pjdhiro's impression (Japanese)",
    "repo.refManagement": "Management",
    "repo.refManagementDesc":
      "Strategy, finance, marketing, project management, innovation, and organizations: the edition pjdhiro read, and pjdhiro's impression (Japanese)",
    "repo.screener": "Breadth-of-View Screener",
    "repo.screenerDesc":
      "Perspective, metacognition, and inclusiveness — 16 questions with 5 options each to see how much you take in. The 6.0 and 6.5 bands also look at whether things are seen as distinct yet not separate. (Japanese only)",
    "knowledge.designThinking.title": "What is Design Thinking?",
    "knowledge.trust.title": "What is Trust?",
    "knowledge.value.title": "What is Value?",
    "modal.aboutTitle": "About this site",
    "modal.close": "Close",
    "modal.knowledgeTitle": "Research note",
    "knowledge.pdf.pending": "PDF pending",
    "knowledge.pdf.open": "Open PDF",
    "howto.triggerLabel": "Let AI Read",
    "howto.title": "Let AI Read This Project",
    "howto.steps.heading": "Start in 3 Steps",
    "howto.steps.1": "Open an LLM (Claude.ai / ChatGPT / Gemini, etc.)",
    "howto.steps.2": "Copy and paste the prompt below",
    "howto.steps.3": 'Replace "○○" with your topic and send',
    "howto.copy": "Copy",
    "howto.copied": "OK!",
    "howto.prompt.basic.label": "Basic Prompt",
    "howto.prompt.basic.code":
      "https://github.com/uminomae/project-design-theory\n\nPlease read this repo.\nUsing the knowledge and frameworks in this project,\nhelp me with \"○○\".",
    "howto.research.heading": "A. Use for Research & Analysis",
    "howto.research.desc":
      "Apply the theoretical structures and research methods in this project to your own topic.",
    "howto.research.ex1":
      '"I want to review my project through the three foundations of Doing, Being, and Falling"',
    "howto.research.ex2":
      '"Research ○○ from multiple angles using the 30-domain triangulation method"',
    "howto.research.ex3":
      '"I want to structure my creative process using the Five-Stage Model of Creation"',
    "howto.research.ex4":
      '"I want to analyze team dynamics through the signals of survival and trust"',
    "howto.prompt.research.label": "Research Prompt",
    "howto.prompt.research.code":
      "https://github.com/uminomae/project-design-theory\n\nPlease read this repo, and using the\ntheoretical structures within (the three foundations of Doing/Being/Falling,\nFive-Stage Model of Creation, the signals of\nsurvival and trust, triangulation, etc.), analyze the topic\n\"○○\" from multiple perspectives.",
    "howto.harness.heading": "B. Set Up LLM Collaboration in Your Project",
    "howto.harness.desc":
      "Reference the design of CLAUDE.md and docs/rules/ (how to judge, recurring error types, how to write, how to research).",
    "howto.harness.ex1":
      "\"I want to build an LLM collaboration environment based on the CLAUDE.md and rules design\"",
    "howto.harness.ex2":
      "\"I want to sort an LLM's recurring errors into types and check them before writing\"",
    "howto.prompt.harness.label": "Harness Setup Prompt",
    "howto.prompt.harness.code":
      "https://github.com/uminomae/project-design-theory\n\nPlease read CLAUDE.md and docs/rules/ in this repo,\nanalyze the design of the rules for researching and\nwriting with an LLM (how to judge, recurring error types,\nhow to write, how to research), and suggest how to\nintroduce it to my project.",
    "howto.thinking.heading": "C. Organize Thinking & Interpersonal Skills",
    "howto.thinking.ex1":
      '"Apply the emotional processing and metacognition framework to my situation"',
    "howto.thinking.ex2":
      '"I want to think about how to keep unease as a question (holding) instead of resolving it at once"',
    "howto.thinking.ex3":
      '"Design a creative process using the 5-stage model (Field → Wave → Edge → Vortex → Bundle)"',
    "howto.era.heading": "D. How to Use This Site in the AI Era",
    "howto.era.desc":
      "With AI, “correct-looking” answers that were never checked are coming to light. What sets people apart then may be the capacity to receive rather than to produce. The reader “<a href=\"./reader/capacity-after-ai.html\">AI の時代に、差になるスキルは何か</a>” (in Japanese) sets out this view and what this site can help with.",
    "howto.map.heading": "Why One URL Is Enough",
    "howto.map.desc":
      "The four theories live in one repo (pd/, cs/, as/, ks/). The LLM follows them to find knowledge that fits your purpose.",
    "howto.map.colTitle": "Page Title",
    "howto.map.colContent": "Content Overview",
    "howto.map.pd":
      "Theory of project envisioning, design, and execution encompassing Doing, Being, and Falling",
    "howto.map.cs.title": "What Is Creation",
    "howto.map.cs":
      "What structure and process does something follow when it comes into being? An exploration that sets theories from 30 fields side by side and writes them in five stages (Field → Wave → Edge → Vortex → Bundle)",
    "howto.map.as.title": "What Is Consciousness",
    "howto.map.as":
      "What do people cut the world with? An exploration through two signals: whether we can survive, and whether we can stay connected (trust)",
    "howto.map.ks.title": "What Is Kesson-Driven Thinking",
    "howto.map.ks":
      "What do people sense where symbols read zero? An exploration of a stance of mind driven by a sense of lack or unease",
    "howto.tips.1":
      "The more specific you are about your goal, the better the results",
    "howto.tips.2":
      "Adding \"also check cs/, as/, ks/\" enables deeper exploration",
    "howto.tips.3": "Works with any LLM: Claude.ai, ChatGPT, Gemini, etc.",
    "howto.note":
      "MIT License — Free for commercial use, modification, and redistribution. When you share copies or modified versions, keep the copyright and permission notice (LICENSE). See the LICENSE file in the repo for details.",
    "slides.trigger": "Slides",
    "slides.title": "Presentation Slides",
  },
};
