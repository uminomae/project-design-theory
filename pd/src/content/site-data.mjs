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
];

const KNOWLEDGE_MENU_KEYS = ["design-thinking", "trust", "value"];

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

  // 読み物・ツールのページ（src/reader-menu.js）。サイトとツールだけを出す
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
    "menu.tools": "ツール",
    "menu.toolScreener": "ものの見方の広さスクリーナー",
    "controls.topBarAria": "サイト操作",
    "controls.languageAria": "言語切替",
    "hero.notice":
      "<a href=\"./reader/love-driven-dev.html\">Love駆動開発と呼びたい現象</a>を、これまで何度も経験してきました。<br>ここでいうプロジェクトは「やること（Doing）」だけでなく「起きていること（Being）」まで含む出来事です。<br>Love駆動開発の見方の使い道は、理論や指示を当てる前に、受け取ったものを確かめることです。",
    "love.faq.summary": "よくある誤解",
    "love.faq.body":
      "<ul><li><strong>「Love は恋愛・愛情のことだ」</strong> → Love のいちばん狭い切り取り方は、恋や好意のような感情です。pjdhiro が Love と呼びたいのは、その感情も含めて、それらを動かしているものです。Love と言い切れるほどには、まだ分かっていません。</li></ul>",
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
      "まず、その基底として射程と領域を固定し、以降の議論を「やること（Doing）」と「起きてること（Being）」に分けて整理します。",
    "overview.p3":
      "プロジェクト実務は、環境適応（物質的条件）とコミュニケーション（非物質的条件）に大別できます。本サイトでは環境適応を前提知（PMBOK等）とし、コミュニケーションを情報処理／感情処理に分解して、とくに感情処理を中心に扱います。",
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
    "section.direction.label": "Direction",
    "section.direction.title": "今後の方向性",
    "section.direction.body":
      "本ページで固定した「射程・領域・Doing/Beingの二分」は基底（土台・骨格）です。以降の各ページは、この骨格の上に展開します。",
    "repo.kesson": "欠損駆動思考",
    "repo.creation": "創造とは",
    "repo.loveDrivenDev": "Love駆動開発と呼びたいもの β",
    "repo.awareness": "意識とは",
    "repo.loveDrivenDevDesc":
      "私は何に駆られてプロジェクトを行うのか。人やプロジェクトを動かしているもの（駆動源）が何かを探す読み物",
    "repo.kessonDesc":
      "記号の上では 0 と出るところで、人は何を感じているのか。欠けている感じや違和感を駆動源にする、思考や精神の構えを見る探究",
    "repo.creationDesc":
      "物事が生まれるとき、どんな構造と過程をたどるのか。30 の分野の論を並べ、五つの段（場 → 波 → 縁 → 渦 → 束）で書く探究",
    "repo.awarenessDesc":
      "人は、何で世界を切り取っているのか。生き延びられるか（生存）と、つながっていられるか（信頼）の二つの信号から見る探究",
    "section.questions.label": "Questions",
    "section.questions.title": "問い",
    "section.questions.body":
      "プロジェクトデザイン論の途中で生まれた問いを、読み物にして、調べながら更新しています。",
    "repo.gravityLove": "愛は、重力に似ていないか — 動かず、何もなく、自分からは見えないのに、すべてを回す中心",
    "repo.gravityLoveDesc":
      "重力の井戸（重力場を、質量のまわりのすり鉢のようなくぼみとして描いた絵）の中心は、動かず、何もなく、自分からは見えないのに、周りのすべてを回している。愛はそれに似ていないか。周りを動かす駆動源としての力を、二つの現象の構造の類似から探す読み物。後半で、その類似を踏まえて「経営者の役割とは？」に仮説的に答える。",
    "repo.waveVortex": "波間の渦 — 宇宙は「モノ」でできているか、「流れ」でできているか",
    "repo.waveVortexDesc":
      "「宇宙は海の渦のような現象でできている」という直観を、物理学と思想史のどこまでが支えるか三層に分けて接地する（創造とは）",
    "repo.multiplication": "足し算ではなく、掛け算の経営 — 答えは「3 と 7」",
    "repo.multiplicationDesc":
      "掛け算を、向きと位相が振幅を決める「回転の掛け算」として読み、チームの 3 と 7 を数学で確かめる読み物",
    "repo.syllabus": "Love駆動開発は、事業構想の授業になるか — 総論と特論の試案",
    "repo.syllabusDesc":
      "事業構想（Project Design）の授業を組むとしたら。総論は、学の輪郭と届く範囲を、見方の道具を持ってかんたんな順に一周する。特論は、Love駆動開発の読み物を順にたどる。pjdhiro の思案を書き起こした試案で、現実の講義ではない",
    "section.tools.label": "Tools",
    "section.tools.title": "ツール",
    "section.tools.body":
      "自分で試して、自分のものの見方に気づくきっかけにするページです。",
    "section.references.label": "References",
    "section.references.title": "参考文献",
    "section.references.body":
      "pjdhiro が影響を受けてきた論を、分野ごとにまとめたページです。",
    "repo.refPsychology": "心理学",
    "repo.refPsychologyDesc":
      "精神分析と発達心理。学者の名前、主要な論の短い説明、pjdhiro の印象の順に紹介する",
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
      "「Being×Doingの二軸で、自分のプロジェクトを見直したい」",
    "howto.research.ex2":
      "「30領域の三角測量手法を参考に、○○を多角的に調査して」",
    "howto.research.ex3":
      "「創造の5段階モデルで、私の創作プロセスを構造化したい」",
    "howto.research.ex4":
      "「生存と信頼の信号の見方で、チームの関係性を分析したい」",
    "howto.prompt.research.label": "調査向けプロンプト",
    "howto.prompt.research.code":
      "https://github.com/uminomae/project-design-theory\n\nこのrepoを読んで、中にある理論構造\n（Doing/Being の二軸、創造の5段階モデル、\n生存と信頼の信号、三角測量など）を参考に、\n「○○」というテーマを多角的に分析してください。",
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
    "howto.map.heading": "なぜ1つのURLで済むのか",
    "howto.map.desc":
      "四つの論を一つのrepoにまとめています（pd/・cs/・as/・ks/）。LLMがそれらを辿り、目的に合う知見を引き出します。",
    "howto.map.colTitle": "ページタイトル",
    "howto.map.colContent": "コンテンツ概要",
    "howto.map.pd":
      "Doing（やること）と Being（起きていること）を包含するプロジェクトの構想・設計・実行の理論",
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
    "menu.tools": "Tools",
    "menu.toolScreener": "Breadth-of-View Screener",
    "controls.topBarAria": "Site controls",
    "controls.languageAria": "Language switcher",
    "hero.notice":
      'Many times, I have experienced <a href="./reader/love-driven-dev.html">what I want to call Love-Driven Development</a>.<br>Here, a project is an event that includes not only "Doing" but also "Being."<br>The use of the Love-Driven Development view is to check what you have received before applying a theory or an instruction.',
    "love.faq.summary": "Common misconceptions",
    "love.faq.body":
      "<ul><li><strong>“The ‘Love’ here means romance or affection”</strong> → The narrowest way of cutting out Love is a feeling such as romance or fondness. What pjdhiro wants to call Love includes those feelings and is what moves them. It is not yet understood well enough to say flatly that it is Love.</li></ul>",
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
      'First, we fix the scope and domain as the foundation, and organize the subsequent discussion into "Doing" and "Being."',
    "overview.p3":
      "Project practice can be broadly divided into environmental adaptation (material conditions) and communication (non-material conditions). This site treats environmental adaptation as prerequisite knowledge (PMBOK, etc.), decomposes communication into information processing and emotional processing, and focuses especially on emotional processing.",
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
    "section.direction.label": "Direction",
    "section.direction.title": "Future Direction",
    "section.direction.body":
      'The "scope, domain, and Doing/Being dichotomy" established on this page is the foundation (base and skeleton). Each subsequent page develops upon this skeleton.',
    "repo.kesson": "Kesson-Driven Thinking",
    "repo.creation": "What Is Creation",
    "repo.loveDrivenDev": "What I Want to Call Love-Driven Development (beta)",
    "repo.awareness": "What Is Consciousness",
    "repo.loveDrivenDevDesc":
      "What am I driven by when I carry out a project? A reader that looks for what moves people and projects (the driving source)",
    "repo.kessonDesc":
      "What do people sense where symbols read zero? An exploration of a stance of mind driven by a sense of lack or unease",
    "repo.creationDesc":
      "What structure and process does something follow when it comes into being? An exploration that sets theories from 30 fields side by side and writes them in five stages (Field → Wave → Edge → Vortex → Bundle)",
    "repo.awarenessDesc":
      "What do people cut the world with? An exploration through two signals: whether we can survive, and whether we can stay connected (trust)",
    "section.questions.label": "Questions",
    "section.questions.title": "Open Questions",
    "section.questions.body":
      "Questions that emerged along the way are published as readers and updated as the inquiry proceeds.",
    "repo.gravityLove": "Is Love Like Gravity? — On a Leader's Role",
    "repo.gravityLoveDesc":
      "The center of a gravity well (a picture of a gravitational field as a bowl-like dip around a mass) does not move, holds nothing and cannot see itself, yet everything turns around it. Is love like that? A reader that looks for the driving force that moves things around, through the structural likeness of the two. In the second half, building on that likeness, it gives a hypothetical answer to “what is a leader's role?”",
    "repo.waveVortex": "Vortices Between Waves — Is the Universe Made of 'Things' or 'Flows'?",
    "repo.waveVortexDesc":
      "Grounds the intuition that 'the universe is made of ocean-like vortices' by sorting how far physics and intellectual history support it, in three layers (What Is Creation)",
    "repo.multiplication": "Management by Multiplication, Not Addition — the Answer Is 3 and 7",
    "repo.multiplicationDesc":
      "Reads multiplication as a multiplication of rotations, where direction and phase drive amplitude, and checks the 3 and 7 of teams with mathematics",
    "repo.syllabus": "Could Love-Driven Development Be a Course on Project Design? — Draft Survey and Special-Topics Syllabi",
    "repo.syllabusDesc":
      "What a course on business design (Project Design) could look like, split in two. The survey course tours the outline and reach of the field in 15 sessions, from easier to harder, with tools for checking one's own viewpoint. The special-topics course follows the Love-Driven Development reader in its own order. A draft written up from pjdhiro's thinking, not an actual course",
    "section.tools.label": "Tools",
    "section.tools.title": "Tools",
    "section.tools.body":
      "Pages to try for yourself, as prompts to notice how you see.",
    "section.references.label": "References",
    "section.references.title": "References",
    "section.references.body":
      "Pages that gather, by field, the theories pjdhiro has been influenced by.",
    "repo.refPsychology": "Psychology",
    "repo.refPsychologyDesc":
      "Psychoanalysis and developmental psychology: the scholar, a short note on the main theory, and pjdhiro's impression (Japanese)",
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
      '"I want to review my project through the Being × Doing dual-axis lens"',
    "howto.research.ex2":
      '"Research ○○ from multiple angles using the 30-domain triangulation method"',
    "howto.research.ex3":
      '"I want to structure my creative process using the Five-Stage Model of Creation"',
    "howto.research.ex4":
      '"I want to analyze team dynamics through the signals of survival and trust"',
    "howto.prompt.research.label": "Research Prompt",
    "howto.prompt.research.code":
      "https://github.com/uminomae/project-design-theory\n\nPlease read this repo, and using the\ntheoretical structures within (Doing/Being dual-axis,\nFive-Stage Model of Creation, the signals of\nsurvival and trust, triangulation, etc.), analyze the topic\n\"○○\" from multiple perspectives.",
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
    "howto.map.heading": "Why One URL Is Enough",
    "howto.map.desc":
      "The four theories live in one repo (pd/, cs/, as/, ks/). The LLM follows them to find knowledge that fits your purpose.",
    "howto.map.colTitle": "Page Title",
    "howto.map.colContent": "Content Overview",
    "howto.map.pd":
      "Theory of project envisioning, design, and execution encompassing Doing and Being",
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
