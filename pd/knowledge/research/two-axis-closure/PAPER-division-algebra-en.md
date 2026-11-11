---
title: The Classification Theorem of Division Algebras and a Correspondence Hypothesis for Team Structure — Why Are 3 and 7 Special? (Exploratory Essay)
status: final  # translation of PAPER-division-algebra-ja.md
issue: pd#121
license: CC BY 4.0
authorship: A1 (per rule 14; self-publish)
language: en
created: 2026-07-16
published: 2026-07-16
translation-of: PAPER-division-algebra-ja.md
---

<!--
本ファイルは pd#121 Phase A（和文・論文様式 PDF の self-publish）の正本 MD。
工程: 骨格（本コミット）→ References 正規化 → 節ごとの本文執筆 → 接続チェック →
     品質ループ（team-critic レビュー＋機械検証再実行＋読解テスト）→ build-pdf.sh → 公開判定（pjdhiro）。
各節の SOURCE コメントは執筆時の素材マップ。READER の転載ではなく学術構成への再編である
（READER=追体験の読み物／本稿=主張と根拠の提示、と役割を分ける）。
-->

# The Classification Theorem of Division Algebras and a Correspondence Hypothesis for Team Structure — Why Are 3 and 7 Special? (Exploratory Essay)

**Author (text)**: Claude (Anthropic, Fable 5) / **Questions posed and readings adjudicated by**: pjdhiro \
**Type**: non-peer-reviewed, AI-authored exploratory essay (speculative theoretical essay / position paper) \
**License**: CC BY 4.0 \
**Canonical source & verification code**: https://github.com/uminomae/project-design-theory (`pd/knowledge/research/two-axis-closure/`) \
**General-audience version (Japanese)**: https://uminomae.github.io/project-design-theory/reader/three-and-seven.html \
**Japanese version of this paper (canonical)**: https://github.com/uminomae/project-design-theory/blob/main/pd/knowledge/research/two-axis-closure/PAPER-division-algebra-ja.md

> **Opening declaration (the character of this paper)**
> This paper has not undergone peer review. The body text was written by an AI (Claude, Fable 5), while the posing of the questions and the adjudication of each "reading" were carried out by a human (pjdhiro).
> The claims of this paper reach only as far as *structural similarity*; *literal identity* is not asserted (§6 makes the level of each reading explicit).
> The 20 machine-verification scripts used in the verification are all re-runnable in the public repository.

## Abstract

<!--SOURCE: READER サマリー（L34-78 相当）を学術要旨へ圧縮。背景1文・問い1文・方法2文・結果2文・主張水準1文。-->
The felt sense of team size (the rule of thumb that three is fast and seven is the upper limit) and the two felt "handholds" in consciousness (material survival and mental trust) look like separate phenomena, yet might they share the same structure? This paper examines that question through one reading that captures both in terms of "rotation." The method combines a division-of-labor inquiry conducted by multiple language models (agent-team-workflow) with 20 public machine-verification scripts that check mathematical claims numerically. The core of the reading corresponds the shared field to the real axis and each person to an imaginary axis, and counts headcount as "dimension − 1." Under this correspondence, the settled classification theorems that restrict number systems preserving both multiplication and division to dimensions 1, 2, 4, and 8 (Frobenius, Hurwitz, Bott–Milnor–Kervaire, Adams) narrow the headcounts preserving that property to **3 (quaternions) and 7 (octonions)**. However, verification found that the strong reading—"a team cannot hold together unless it is 3 or 7"—does not agree with the empirical evidence and is set aside; what remains is the weaker reading, as a design principle: "if you choose 3 or 7, you can extend the structure while preserving both multiplication and division." Throughout, the claim of this paper stays at the level of **structural similarity**; it does not assert literal identity such as "human relationships are quaternions."

## 1. Introduction — Two Experiences and One Question

<!--SOURCE: READER §0-1。体験A（意識の二軸の感じ・awareness-space 生存-信頼軸）・体験B（チームは3がベスト7が上限）・
問い（掛け算の経営＝回転の掛け算だとしたら）。声の帰属: pjdhiro の体験は引用形式（ルール14）。-->
This study begins from two plain observations. Both are experiential observations, prior to theory, made by the proposer of this argument (pjdhiro).

The first observation concerns two handholds that flow through consciousness. When one is making something, a sense of quantity—"how far it spreads, how much there is" (here called the **material** handhold)—and a sense of coherence—"does it hold a single meaning without falling apart" (the **mental** handhold)—flow at the same time and pull against each other in opposite directions. This two-axis picture has been organized separately as the "survival–trust axis" hypothesis of the sister inquiry awareness-space—the hypothesis that consciousness evaluates two directions, material survival and mental trust—and this paper takes it up as a starting experience.

The second observation concerns team headcount.

> **pjdhiro's observation:** Through forming teams many times over, I have felt in my body that three people is the fastest and best, and that seven is the limit. At eight, it suddenly turns heavy.

At first glance these two are entirely separate matters. Yet if the same "shape" lies hidden beneath both, then one (the numbers of a team, whose mathematical properties are well understood) might illuminate the other (the workings of consciousness)—this is the question of this study.

As a clue for pursuing this question, this paper attends to the managerial phrase "not addition, but multiplication." It takes this metaphor—of multiplying people together rather than adding them—seriously and re-reads it as **rotation multiplication**, because the numbers that represent rotation are the complex numbers, and the numbers that extend rotation into three dimensions are the quaternions (§4). The question then takes this form: is the essence of the quaternions the same shape as the essence of a three-person relationship? And if so, what sort of relationship is that?

This paper pursues the question through the **reading of "the field and the persons"**—corresponding the shared field to the real axis and each person to an imaginary axis. The two axes of consciousness (the first observation) are what prompted the idea of viewing things through "rotation"; what is put into correspondence with the numbers below are the persons (imaginary axes) and the field (real axis).

## 2. Prior Discourse and Evidence — Sorting Out "What Has Been Said"

<!--SOURCE: RR-023（前提知レビュー・C32/R21「そう言われてきた」スタンス→ "as commonly held" 型の帰属表現へ）、
RR-003（チームサイズ実証: 最適3〜5・上限7〜9 の帯。Wheelan 2009・McHale 97%〔Lavanchy 2002 孫引き明示〕・
Klimek et al. 2009 内閣崖・Cartwright & Harary 1956 構造バランス）。Miller 7±2 との区別も本節。-->
A thick body of discourse on team size has accumulated across sociology, organization theory, game theory, and social choice theory. This section organizes them as a stocktaking of "what has been said (as commonly held)." It is not intended to offer counter-evidence to existing accounts or to set up opposing camps. The findings listed below are arranged on the premise that each has a measure of validity from one angle while still being one-sided.

As a classic that argued for a qualitative transition, Simmel (1908) found a qualitative rupture between the dyad and the triad, holding that the entry of a third person gives rise to the roles of "mediator," "the third who benefits (tertius gaudens)," and "divide and rule." von Neumann & Morgenstern (1944) showed that while a two-person zero-sum game is solvable by minimax, from the third person onward coalition becomes non-trivial. Condorcet's jury theorem states that as long as each individual's accuracy exceeds 0.5, increasing the number improves the group's accuracy, and that an odd number avoids ties. All of these support the discrete intuitions that "from the third person on it becomes something else" and "odd numbers are favorable," but none derives any necessity for why 3 or 7 in particular would be special.

The discourse on rules of thumb and costs is also thick. The recommended size for team research is empirically taken to be 4–6 people, with an upper limit of 9–10 (Hackman & Vidmar 1970's subjective optimum of 4.6, the Scrum guide, Amazon's "two pizzas," and so on); the latter two are closer to folklore than to any empirically established critical point (this band of rules of thumb is a separate layer, of different provenance from the empirical band "optimum 3–5, upper limit 7–9" used later in §6). On the cost side, the number of relational paths n(n−1)/2 (Brooks), the combinatorial explosion of span of control (Graicunas 1933), and the monotonic decline in efficiency with headcount (Ringelmann / Steiner's process loss) are discussed. All of these are continuous, monotonic increases and contain no "cliff" at which quality switches at a particular headcount.

Among studies that directly measured the relation between headcount and performance, Wheelan (2009, 329 working groups) reported a decline of 3–4 > 5–6 > 7–10, with the decline already beginning at 5–6. Klimek, Hanel & Thurner (2009) found a qualitative change in cabinet size, but its location is ≈20, not 8. Miller's (1956) "7±2," often invoked, is a claim about short-term memory span, and Miller himself cautioned that the frequent appearance of 7 might be a numerological coincidence. Transferring it to team theory is a leap across categories (Cowan's 2001 revision to 4±1 points in the same direction), and this paper does not rely on that route. As for the irreducibility of triadic dynamics, family-interaction research (McHale et al. 2008) reports that 97% of three-month-old infants shift their gaze rapidly back and forth between their parents (an observation of 38 infants; this primary value derives from Lavanchy's 2002 dissertation, and this paper treats it as a second-hand citation "as cited in McHale et al. 2008"), taking it as evidence that infants treat a triadic relation as a single unit from the outset—not reducible to a sum of dyads. The structural balance theorem for signed relations (Cartwright & Harary 1956) is the core theorem of Part II of this paper, but here it is recorded merely as one item of prior discourse.

Much of the above literature reaches only the abstract or secondary level (Wheelan and Klimek are secondary via abstract; Simmel and von Neumann & Morgenstern are secondary), and the only sources checked word-for-word against the primary full text are Cartwright & Harary (1956) and McHale et al. (2008). This imbalance is made to correspond to the close-reading-level notes in the References. These existing lines of discourse are, on the whole, written in the vocabulary of addition and combination. Phenomena in which order matters (path dependence) and phenomena that cycle (Condorcet cycles) have long been known, but the former has been treated as irreversibility that "cannot be rewound," and the latter as a "defect to be avoided." Order mattering, magnitude being preserved, and yet being rewindable—an explanation applying to the question of headcount the combination of being non-commutative yet isometric (rotations that form a group)—is not to be found within the range this section has covered. Rotation and non-commutativity themselves already exist in other fields (quantum game theory, for instance, deals with unitary transformations and non-commuting payoffs). What is missing is the target of application—the grounding in the algebraic dimension of headcount. This paper is positioned as one angle that tentatively applies this missing facet.

## 3. Method — Multi-Agent Inquiry and Machine Verification

<!--SOURCE: READER §9（方法の公開）・README ルール群。agent-team-workflow（SURVEY→REVIEW→PLAN→EXECUTE の7フェーズ）・
検証プリミティブ V1-V6・機械検証スクリプト20本（RR-001a〜RR-024c）・文脈ゼロ LLM 読解テスト・
確度タグの対訳表（[P]→established / [M]→interpretive / [S]→speculative）をここで定義。-->
This study proceeded through a division of labor between one human (the proposer, pjdhiro) and multiple AI agents. The roles are fixed. What the human bears is posing questions out of experience and rendering the adjudication of whether a presented reading "feels right." Explaining the mathematics, surveying the literature, and drafting candidate readings are borne by the AI. This division is also a discipline that keeps the AI from speaking on the human's behalf. The candidate readings are the AI side's output, and their adoption belongs to pjdhiro's adjudication. The question of each section is extracted from actual dialogue records, and the adjudication (adopted, rejected, held) is recorded with dates.

The backbone of the inquiry is fixed as a reusable procedure of seven phases called agent-team-workflow. The basic three-beat is survey (SURVEY) → critical review (REVIEW) → integration (CLOSE), inserting planning (PLAN) and implementation (EXECUTE) as needed. The agents' roles divide into researcher (survey and read-only), critic (dedicated to critical verification), planner (planning), and worker (writing and implementation), with write access to files restricted to the worker alone. The critic's inspection items number six—V1 the existence of the referent, V2 the agreement between claim and grounds, V3 the strongest counterargument, V4 the presence of cherry-picking, V5 generalization beyond the scope of the evidence, V6 leaps in logic. For important judgments, two critics are run independently and their results compared.

Mathematical claims were not settled by citing theorems alone; whatever could be confirmed numerically was cross-checked by program. The verification scripts accompanying this paper number 20 (two-axis-closure/*.py, Appendix A), each confirming, in a re-runnable form, such things as the failure of associativity in the octonions, norm preservation, and the actual existence of zero divisors. On the readability side of verification, a context-zero comprehension test (reader-comprehension) was used, in which an LLM with zero prior knowledge is made to read only the body text to see whether any misreading of the gist or flow arises. When a misreading arose, the policy was to correct the body text rather than the reader.

The certainty of claims and the level of sources were made a discipline to state explicitly. Every claim is given an internal certainty label, shown in this paper as three tiers—established / interpretive / speculative (the correspondence is given in Appendix B). The adoption of readings is recorded with dates in the adjudication ledger (RR-010) and managed with the vocabulary of adopted / direction fixed / candidate reading / under exploration / set aside. Only sources whose existence has been confirmed are used, and each is tagged with an access level—primary close reading, abstract only, or second-hand citation (with the intermediary source noted). This discipline is kept consistent with the close-reading-level notes in the References. Each investigation is fixed in a numbered file (RR-001, RR-002, …) and must include the question, method, findings (with certainty), limits and counterexamples, and questions awaiting adjudication.

## 4. Mathematical Foundations (Result I) — The Classification of Division Algebras and 3・7

<!--SOURCE: RR-001（定理群: Hurwitz/Frobenius/Bott-Milnor-Kervaire・ℝℂℍ𝕆＝1,2,4,8次元・虚方向 1,3,7）・
RR-001a Jacobi・RR-010a 交代性・RR-013b 十六元数零因子 (e₁+e₁₀)(e₄−e₁₅)=0・RR-005 ファノ平面 PG(2,2)・168=PGL(3,2)。
すべて機械検証済みの計算のみ。ここは established の層。-->
The classification of division algebras is given by a series of theorems established from the end of the 19th century into the mid-20th. Hurwitz (1898) showed that the real division algebras satisfying norm multiplicativity `|xy|=|x||y|` are limited to four: the reals ℝ, the complex numbers ℂ, the quaternions ℍ, and the octonions 𝕆. Imposing associativity narrows them to three—ℝ, ℂ, ℍ (Frobenius 1878)—and imposing the weaker alternative law returns the same four (Zorn 1930). Requiring neither the norm nor associativity nor alternativity, but merely that a finite-dimensional real division algebra have no zero divisors, still restricts the dimension to 1, 2, 4, 8 (Bott–Milnor 1958, Kervaire 1958). That is, the dimensions 1, 2, 4, 8 of ℝℂℍ𝕆 emerge from the minimal requirement of divisibility alone. Relatedly, the dimensions in which a vector product satisfying bilinearity, orthogonality, and the Pythagorean property can be defined are limited to 1, 3, 7 (Massey 1983). In what follows, standard mathematical facts are treated as standard; see Baez (2002), without citing each original source individually.

These algebras can be read as a ladder of "rotating numbers." The imaginary unit `i` of the complex numbers is a 90-degree rotation, and `i²=−1` means "90 degrees twice lands you directly behind." In the quaternions there are three imaginary units, `i, j, k`, and their product is non-commutative. Against `i·j=k` we have `j·i=−k`: the direction of the answer reverses with the order of multiplication (machine-verified, RR-001a). The quaternion norm is multiplicative, satisfying `|xy|=|x||y|` (the Hurwitz composition law). This multiplicativity is the algebraic expression of the fact that rotation is an operation preserving the magnitude of each component.

The octonions have seven imaginary units `e₁…e₇`, and the rules of their products coincide with the smallest projective plane, the Fano plane PG(2,2). It consists of seven points and seven lines, each line on three points, each point on three lines, and any two distinct points share exactly one line. This configuration is none other than the Steiner system S(2,3,7), in which seven triples cover the twenty-one point-pairs exactly once each (machine-verified, RR-001a). The octonions break associativity. For three imaginary units not on the same line, `(e₁e₂)e₄=+e₇` whereas `e₁(e₂e₄)=−e₇`: the sign reverses with the placement of the parentheses (machine-verified, RR-001a). However, the alternative law—the weak vestige of associativity that parentheses may be dropped in products containing the same element twice—is preserved (the Zorn–Artin theorem / machine-verified, RR-010a). The automorphism group of the Fano plane is of order 168, equal to PGL(3,2) and isomorphic to PSL(2,7) (the order 168 was machine-verified by exhaustively enumerating all permutations of the seven points, RR-001; the group isomorphism itself is standard; see Baez (2002)).

Being able to "divide" is bound up with a topological property, the parallelizability of the unit sphere. If an `n`-dimensional division algebra exists, then the sphere `S^(n−1)` is parallelizable, and the spheres for which this holds are limited to four: `S⁰・S¹・S³・S⁷` (corresponding to dimensions 1, 2, 4, 8; counted in imaginary directions, 0, 1, 3, 7). Beyond the octonions, in the sixteen-dimensional sedenions, the multiplicativity of the norm collapses and zero divisors appear. Indeed, there exist pairs that are both nonzero yet whose product is zero. The concrete form depends on the conventions of the multiplication table, but under one standard convention, exhaustive search confirms `(e₁+e₁₀)(e₄−e₁₅)=0` (machine-verified, RR-013b). This means divisibility has been lost—that is, the accident of being unable to divide an element back out of a result is embedded in the structure.

Why the dimension of a division algebra is limited to 1, 2, 4, 8 is not something whose proof closes within algebra itself. The final settlement is given by a problem of topology—whether a consistent frame of orientation can be laid over the sphere—specifically by Adams's (1960) result that maps of Hopf invariant 1 exist only for `n=2, 4, 8` (what Baez calls "the hard part"). This paper does not enter into that deep proof and receives the established conclusion as its foundation. Everything up to here—the classification, non-commutativity, non-associativity, and zero divisors—is a fact confirmable by computation, and in this study it was cross-checked numerically with the twenty machine-verification scripts.

## 5. The Correspondence Hypothesis (Result II) — The Field and the Persons, Rotation Multiplication

<!--SOURCE: READER 第I部 §3-6（3=掛け算が閉じる最小の虚方向数・7=割り算まで閉じる最大・実部=場は人数に数えない）・
RR-010（本質対応）・READER 第II部（行列 SO(2n) の見方・偶奇の膠着＝二部性・pd#124: 行列が第一の方法論）。
第I部と第II部は別レンズであることを明示（READER L1180 の分離を踏襲）。-->
The mathematics of the previous section is established. From here, this paper presents a correspondence mapping it onto team structure. This correspondence, however, is an interpretive assumption, not something proven. The assumption placed at the center is this: correspond the real axis of a division algebra to the "field," and the imaginary directions to the "persons." The single real axis is regarded not as a member but as the field shared by all (the event, or reality itself), and is not counted in the headcount. Therefore headcount is counted as "dimension − 1." Two dimensions (complex numbers) are the field and one person; four dimensions (quaternions) are the field and three persons; eight dimensions (octonions) are the field and seven persons. This reading has mathematical grounds. The real axis alone has order not matter whoever it is multiplied with (commutative); under the automorphisms that swap standpoints, the imaginary directions may interchange but the real axis always remains fixed, and standpoint-independent invariants such as the norm appear on the real-part side (both machine-verified, RR-015). That said, while "the real axis receives mathematically special treatment" is a theorem, calling it the "field" is itself only an interpretation.

Under this correspondence, one can explain why three persons is special. The quaternion product `i·j=k` means that the product of two imaginary directions lands exactly on a third imaginary direction. The consequence of two persons' engagement is structurally seated in a third seat that is neither of them—and thus the smallest headcount at which multiplication closes is three. Furthermore, the non-commutativity of `i·j=k` and `j·i=−k` expresses that order changes the direction of the result. The crux of the quaternions lies in the point that the "in-between" also rotates. Multiplying by one imaginary direction rotates not only the plane containing oneself but also, at the same time, the plane spanned by the remaining two directions. Rendered into the language of persons, this reads: when one person moves, the "in-between" of the other two rotates as well, and in a threesome there exists no private domain that can remain unrelated to the remaining one person.

From the word "multiplication," one is apt to get the impression that the more you multiply, the greater the total. But rotation multiplication does not change the magnitude of each component (`|xy|=|x||y|`, norm preservation). Amplification occurs not on the multiplication side but on the side of the superposition of waves (addition). The norm of the sum of two quantities becomes `|a+b|²=|a|²+|b|²+2|a||b|cos(Δθ)`, and the cross term `2|a||b|cos(Δθ)` determines constructive versus destructive interference according to the phase difference `Δθ` (machine-verified, RR-012a). Rotation itself preserves each person's magnitude while acting as the "dial" that sets this phase difference. Therefore, rather than "multiplication = amplification," it is organized as "rotation is an operation that aligns phase, and amplification occurs on the superposition side." All of the above is a reading at the level of structural similarity.

The specialness of seven persons extends the same logic to the octonions. The seven imaginary directions are the largest system that closes even under division, and the Fano plane of the previous section is its wiring diagram. For any two persons, exactly one triple that serves as their home is determined, and each person holds three triples at once, forming an overlapping web. This web has no distinguished center, and as the automorphism group's order of 168 shows, all seven points are of equal rank. Therefore a hub for connection (a leader) is structurally unnecessary; what is needed is only a convention of signs giving each triple a consistent orientation. The difference between three persons (an associative single loop) and seven persons (a seven-fold web including non-associativity) appears in whether the sequencing (the order of the product) matters or not.

The expression "sharing a field" requires care. This premise of a "single shared field" faces the strongest counter-evidence from the tradition of psychology. In Lewin's field theory, the "field (life space)" is one per individual, colliding head-on with the reading of a single field shared by all. This paper responds to this with the following limitation: strictly speaking, what can be said is that what is shared is an invariant (a quantity that does not change from whichever standpoint it is measured), not that each person's value coincides. As a primary source in psychoanalysis (Ogden 2004) states, the third is jointly created, but its experience is not identical across the participants. On the mathematical side, this invariant appears as "the real axis that does not move under any interchange of standpoints." There is also corroboration on the physics side. Quantum Darwinism (Zurek 2009 et al.) explains that because information about an object is copied many times over into the environment, many observers reading separate copies arrive at the same conclusion. This, however, is support on the physics side for the reading "what is shared is an invariant," and does not prove the correspondence on the psychological side.

The above is a reading through one lens, that of "the field and the persons." Separately, another lens, which assigns the numbers differently, is noted alongside it. It is the view of placing persons not as imaginary directions of a division algebra but as rotation matrices SO(2n). Viewing `n` persons as a `2n`-dimensional space with `n` two-axis planes orthogonally stacked, and writing mutual influence as rotations of that space, brings every headcount onto the same footing, including five and six persons, which have no division algebra. On this view, a threesome is straightforwardly six dimensions—that is, SO(6)—not the octonions (eight dimensions). Eight dimensions correspond rather to the layer of the fourth person. The reading once attempted, "threesome = octonions," does not hold up when carried through with matrices and has been withdrawn (pd#124). The way the numbers are assigned is entirely different from Part I's "seven persons = octonions (eight dimensions = field + seven persons)," and the two must not be conflated.

From this matrix view, two things emerge. First, the influence among three persons exhibits a term that dyads do not have. When two rotations—"A influences B, B influences C"—are stacked in changed order, a discrepancy arises due to non-commutativity, and that discrepancy produces a substantive tie between A and C, whom no one has directly touched (the commutator `[X_AB, X_BC]` lands on the A–C block / machine-verified, RR-024a). For a dyad, which lacks a third plane, this term does not exist. Second, the parity of the headcount divides the behavior. In a conflict loop where everyone wants to take the opposite standpoint to their neighbor, an even number splits into two camps that glare at each other (deadlock), while an odd number cannot make the accounts add up when the loop is traversed once around and so cannot fully solidify into two camps (harder to deadlock). This is a consequence of the structural balance theorem (Cartwright & Harary 1956), about relationship diagrams carrying signs of favor and hostility, specialized to a conflict loop (machine-verified, RR-024c).

That said, the true opponent of deadlock is not the parity of the headcount itself but the single dividing line that splits a team in two. If lines such as role, specialty, and generation cross one another, then someone who is an enemy along one line is an ally along another, and no solidification into two factions occurs (what sociology calls cross-cutting cleavages, Lipset / Coser). The means of avoiding deadlock are three—making the headcount odd, leaning relations toward cooperation, and making the dividing lines cross—and headcount is only one of them. Even among odd numbers, three, five, seven, and nine are not the same; three is the farthest from bisection. And only three and seven simultaneously possess both being odd (harder to deadlock) and being a division algebra (seats determined by structure). Five is odd but not a division algebra.

All of these are presented as structural similarity, not as literal identity—not the claim that "human relationships are quaternions" or "emotion is quantum." The division-algebra side (Part I) stands on settled mathematics, whereas on the parity side (Part II) the mathematics as a mechanism is solid, but direct empirical evidence that human teams actually deadlock according to the parity of headcount is still thin. The correspondence to the psychological side remains at the stage where it can be proposed as structural similarity. The level of each reading (established / interpretive / speculative) and its adoption are organized in §6.

## 6. Discussion — The Adjudication of Readings and the Level of the Claims

<!--SOURCE: READER §7（実証との突き合わせ: 何が外れ何が残ったか）・§8（よくある誤解）。
読みごとに established/interpretive/speculative を明示。採用＝設計原理としての3・7（構造だけで掛け算と割り算を保つ）、
見送り＝「3と7しかない」「8人では成立しない」等の強い読み。反証条件の明文化。-->
This section confronts the readings presented in §4 and §5 with the evidence and adjudicates how far one may claim. The adjudication is by a three-layer inspection standard. **Theorems** (the parts with proofs: the classification theorems, the properties of the Fano plane) are hard. The **assumptions of correspondence** (the mapping onto reality: person = imaginary direction, value = division) remain assumptions. And a correspondence in which the mathematical structure does no work on the reality side degenerates into **numerology**—mere ornament in which numbers merely match. The following adjudications are by this standard. The state of a reading is recorded with the vocabulary of this program's adjudication ledger (RR-010)—adopted / direction fixed / candidate reading / under exploration / set aside. The presentation of candidates is by the language model (Fable 5); the adjudication of adoption is by the conviction of the proposer (pjdhiro), matched against his experience (the felt sense of fit).

### 6.1 Readings That Were Set Aside — The Strong Reading "There Is Only 3 and 7"

This hypothesis is built from a stack of three readings of differing strength (Table 1). What verification eliminated is only the topmost one.

**Table 1. The three-layer readings and their states**

| Reading | Claim | Level | State |
|---|---|---|---|
| Mathematics (theorem) | The only number systems closed under both multiplication and division are dimensions 1,2,4,8. Imaginary directions are only 3 and 7 | established | Intact (there is a proof) |
| Strong reading (law of nature) | Therefore, in reality too, teams of 4, 5, 6 people are structurally impossible | speculative | **Set aside** |
| Weak reading (design principle) | **If you choose** 3 and 7, you can extend while preserving both multiplication and division | interpretive | **Surviving** (current form) |

What the strong reading predicts most boldly is the headcounts between 3 and 7. The prediction is that "teams of 4, 5, 6 people should collapse on zero divisors and fail to reach resolution," and that is where the test point lies. The result of confronting it with actual team research contradicts this prediction. In a study of 329 working groups (Wheelan 2009), performance declined in the order 3–4 > 5–6 > 7–10, and the decline already began at 5–6. Teams of 5 and 6 people exist perfectly normally and function perfectly normally. No sudden drop (cliff) at 8 was found either; the decline in performance with headcount is smooth, and where a sudden drop is empirically found is rather around 20 (the study of cabinet size, Klimek et al. 2009). The honest band the evidence supports is "optimum 3–5, upper limit 7–9," and exactly 3, exactly 7 as a single point cannot be claimed. Therefore the strong reading "it does not hold together unless it is 3 or 7" is set aside. Likewise, Part II's early reading "threesome = octonions" has also been withdrawn, because when persons are carried through with matrices a threesome is 6-dimensional (the octonions are the layer of the fourth person) (§5, pd#124).

On the other hand, the plain observations at the starting point are, if anything, supported by the evidence. "Three is best" agrees with the 3–4 > 5–6 data, and "seven is the limit" remains as the upper-limit band 7–9. What was off is only the "suddenly" in "at eight it suddenly turns heavy."

### 6.2 The Surviving Reading — 3 and 7 as a Design Principle

The difference between being set aside and surviving can be captured by the metaphor of an arch bridge. An arch has an ideal curve (the catenary) that balances perfectly under its own weight alone, and mathematics proves "only this shape balances." But an arch that is not the ideal shape can also stand, if you use extra mortar. Reading it as "anything but the ideal shape collapses" is wrong (= the set-aside strong reading), but reading it as "only the ideal shape stands without mortar" is true (= the surviving design principle). A team of 5–6 people is an arch that stands with mortar (extra coordination cost), and 3 and 7 are the shapes in which multiplication and division stand on structure alone. The question shifts from "does it stand or collapse?" to "with how much mortar is it standing?"

This design principle must beat a plain rival explanation that uses no division algebra—the cost law in which coordination paths grow as `n(n−1)/2`. The two explanations give the same answer at 3 persons (the number of pairs 3 = the 3 imaginary units of the quaternions), but diverge at 7. For the cost law, 7 persons is 21 pairs, whereas for the octonions it is 7 overlapping triples (the Fano multiplication rule). From here a falsifiable prediction follows: **in well-functioning teams of around 7, coordination revolves in units of triples, a home triple is uniquely determined for every pair, and each person belongs to exactly 3 triples.** No study has directly measured this prediction yet, and the peripheral evidence (the stability of pairs embedded in triples—Simmel's triad theory, Krackhardt's Simmelian ties; collapse into two under faultline splits) points toward the survival side, but none directly measures "the web of triples itself." Support from practice has retreated from the initial expectation as the inquiry has progressed. The passing bar is also strict: the number of triangles is almost automatically determined by the density of the network (the triad distribution of measured networks is explained about 90% by density, Faust 2010), so the observation on which the octonion reading survives is limited to "woven into triples beyond what density predicts, and with a home triple uniquely determined for every pair." This prediction is the main battleground of this hypothesis (hypothesis v2, adopted 2026-07-04).

### 6.3 Current Adjudication List and Held-Open Questions

**Table 2. Current adjudication of the principal readings**

| Reading | Level | Adjudication |
|---|---|---|
| The ladder of numbers stops at 1,2,4,8 / imaginary directions are only 3 and 7 | established | Theorem (settled) |
| 3 persons = the smallest at which multiplication closes; the "in-between" also rotates (non-commutative) | interpretive | Adopted (RR-010 Q2/Q3/Q4) |
| Rotation preserves the norm, and amplification occurs by the phase alignment of superposition (rotation is the dial of interference) | interpretive | Adopted (RR-010 Q8, R14) |
| 7 persons = the largest that closes even under division; no hub needed (Aut=168, equal rank) | interpretive | Adopted (RR-010 O1/O4) |
| What is shared is an invariant (not the coincidence of each person's value) | interpretive | Direction fixed (RR-010 Q9/O5) |
| 7 persons = a web of 7 overlapping triples | speculative | Unverified, verifiable (main battleground, with a passing bar) |
| "Only 3 and 7 hold together" / "sudden drop at 8 persons" | speculative | Set aside |
| Parity = deadlock by bipartiteness (Part II) | interpretive | Mechanism solid; direct evidence in human teams thin |
| The break comes "from the third person outside the field of the two" (O3) / zero divisor = an unresolvable attractor pair (A8) | speculative | Held (adoption undecided, held-open question) |
| The bridge to the consciousness side (the observation of consciousness behaves as a complex amplitude; emotion = released energy) | speculative | Under exploration (at the hypothesis stage of awareness-space) |

The difference from numerology lies in "whether it has been made falsifiable." This hypothesis states its counter-evidence conditions in advance (the normalcy of 5- and 6-person teams, the movability of the upper limit by tools, the observability of the web of triples) and publicly discloses the part that has actually been eliminated (the strong reading). Also, questions judged not to be rushed to settlement (held-open questions)—such as the meaning assigned to the real and imaginary parts, and the refinement of "the field"—are left unresolved. This is per this program's policy: "do not rush to solve held-open questions."

## 7. Limitations

<!--SOURCE: RR-003（実証の帯と仮説のずれ）・RR-002（同型性の厳密化: 定理/類推/数秘の切り分け・pd#118）・
未接地事項（意識側の橋は awareness-space の仮説段階）・McHale 孫引き等の精読レベル注記。-->
The limitations of this paper are stated explicitly, divided into four points.

**First, the central correspondence is an interpretive assumption.** The mapping onto reality—"person = imaginary direction," "value = division (reversibility)," "field = real axis"—is not a mathematical theorem but a reading this paper has placed (§5). Remove this assumption and the derivation of 3 and 7 no longer holds. This paper does not treat this assumption as a proven fact. Distinguishing isomorphism, analogy, and numerology (what is a theorem, what is structural similarity, and what is mere ornament in which numbers merely match) is a continuing task of this program (pd#118), and the claim is consistently kept at the level of structural similarity.

**Second, there is a discrepancy between the empirical band and the granularity of the hypothesis.** What the evidence supports is the band "optimum 3–5 persons, upper limit 7–9 persons," not exactly 3, exactly 7 as a single point (§6). The 3 and 7 as a design principle point to a single point within this band as "a rough guide at which the property can be preserved on structure alone"; the evidence has not selected a single point.

**Third, the level of access to the originals is uneven.** The mathematical claims of this paper (§4) are grounded in close reading of the originals and machine verification, but much of the literature on the empirical and intellectual-history side reaches only the abstract or the secondary source. For example, the principal figure in developmental psychology (the observation that 97% of three-month-old infants shift their gaze rapidly between their parents) was secured by close reading of the reporting paper (McHale et al. 2008), whereas the dissertation that is its origin (Lavanchy 2002) has not been obtained, and in the References the second-hand citation is made explicit as "as cited in McHale et al. 2008." The close-reading level of each source (primary close reading / abstract / second-hand citation) is as given by the level symbols attached in the References, and △ (secondary only) makes up about two-thirds of the whole.

**Fourth, the bridge to the consciousness side is ungrounded.** The two axes of consciousness that were the starting point (the first observation) and the readings developed from them—the picture that the observation of consciousness behaves as a complex amplitude, and the picture of emotion as released energy—are all hypotheses at the exploratory stage, under continued examination as hypotheses on the awareness-space side. This paper positions them not as results but as future tasks.

As for Part II (parity, bipartiteness), the mathematics as a mechanism (the structural balance theorem of Cartwright & Harary 1956) is solid, but direct evidence that "human teams actually deadlock according to the parity of headcount" is still thin. The empirical finding seen in the world that "odd numbers are better" (boards of directors, etc.) is a matter of tie-avoidance in majority voting (arithmetic), and it is not that the mechanism of bipartiteness has been confirmed in human teams. This gap is as noted in §5 and §6.

## 8. Conclusion and Future Tasks

<!--SOURCE: READER 末尾「まだ終わっていません」・pd#126（偶奇膠着の実証接地）・pd#115 の保持論点。-->
This paper examined two plain observations—the felt sense of team size and the two axes of consciousness—by tying them together through the single reading of "rotation." The point reached can be summarized as follows. That the number systems preserving both multiplication and division are limited to dimensions 1,2,4,8, and therefore that, under the reading "field = real axis, person = imaginary axis," the headcounts preserving the property are narrowed to 3 and 7, stands on settled mathematics. But the strong reading "it does not hold together unless it is 3 or 7" does not agree with the evidence and is set aside; what remains is the reading, as a design principle, "if you choose 3 or 7, you can extend the structure while preserving both multiplication and division." In addition, from another lens that places persons as matrices (SO(2n)), a reason independent of division algebras appears—deadlock by parity via bipartiteness. The superiority of 3 and 7 stands at the point where two separate reasons overlap: division algebra (seats determined by structure) and oddness (harder to deadlock). Throughout, the claim of this paper stays at the level of structural similarity.

There are three future tasks. First, the direct verification of the surviving prediction "7 persons = a web of overlapping triples." The passing bar (weaving into triples beyond what density predicts, and the uniqueness of each pair's home triple) has been made explicit and narrowed down to a form verifiable with existing network analysis. Second, the empirical grounding of whether deadlock by parity actually arises in human teams (pd#126). The present empirical finding that "odd numbers are better" derives from the arithmetic of majority voting, and the mechanism of bipartiteness itself has not yet been confirmed in human teams. Third, the grounding of the bridge to the consciousness side—the two axes of consciousness and the pictures of complex amplitude and released energy—which connects to the inquiry on the awareness-space side.

Finally, this paper is not the presentation of a completed theory but a mid-course report of an exploration. The very posture of stating counter-evidence conditions explicitly and publicly setting aside the readings that were eliminated is the point this paper wishes to show as its difference from numerology. Each time verification advances, the adjudications and claims will be rewritten.

## References

<!--工程2で正規化: RR-001〜024 と READER §参照に散在する出典を著者-年形式で集約。
各文献に精読レベルを付す（一次精読／抄録確保／孫引き〔経由文献を明記〕）。
最低限含むべき核: Hurwitz 1898・Frobenius 1878・Bott-Milnor 1958・Kervaire 1958・Baez 2002 (The Octonions)・
Wheelan 2009・Lavanchy 2002 (McHale 97% の原典・未精読孫引き)・Klimek, Hanel & Thurner 2009・
Cartwright & Harary 1956・Hamming 1950・Graves/Cayley (八元数史)。-->

Close-reading-level legend: ★ primary source read in full / ○ abstract or partial / △ secondary or as-cited-in (via source noted) / ？ undetermined.
Bibliographic details not written in the inventory (journal name, volume/issue, pages, DOI, etc.) are not supplied; missing items are omitted from the format and a note "bibliography partially unobtained" is added.

<!--工程4 剪定 完了（2026-07-16）: 本文（§1-§8）が引く/直接接地する文献に絞った。意識区分の
energy-flow/CN-011 系スレッド（感情円環・量子認知・物理・光/思想史 約65件）は本稿では未接地の今後の課題（§7）
につき本 References に再掲せず、調査記録 PAPER-references-inventory.md（180件・精読レベル付き）に温存。
残した意識側は三者・関係・発達の心理学（§5 三者非還元の接地）＋§5 引用の Zurek＋§3 引用の Litt。-->


### Mathematics (Theorems and Originals)

- Adams, J.F. (1960). Hopf invariant 1 only for n=2,4,8 ("the hard part"). *Ann. Math.* 72, 20–104. [Close reading: △ — via Baez (2002) §3. Original paper not read.]
- Atiyah–Hirzebruch (1961). Parallelizability. [Close reading: △ — Baez (2002) refs only. Bibliography partially unobtained (journal name, volume/issue, pages not recorded).]
- Baez, J. (2002). "The Octonions." *Bull. AMS* 39, 145–205. arXiv:math/0105155. [Close reading: ★ — the mathematical backbone of this hypothesis. arXiv PDF read in full. Line numbers recorded for the real-axis fixity of automorphisms, the Re defining formula, the dimension of G₂, and Bott mod 8.]
- Baez, J. & Huerta, J. (2009). arXiv:0909.0551. [Close reading: ★ — the h₂(K) / k+2 correspondence (division algebras ↔ spacetime dimensions 3,4,6,10) confirmed at the primary level. Bibliography partially unobtained (title, journal name not recorded).]
- Bott–Milnor (1958). Dimensions are 1,2,4,8. *Bull. AMS* 64, 87–89. [Close reading: △ — via Baez (2002) Thm 3. Original paper not read.]
- Brouwer, L.E.J. (1912). The hairy-ball theorem. *Math. Ann.* 71. [Close reading: △ — treated as textbook standard.]
- Cartwright, D. & Harary, F. (1956). The structure theorem. *Psychological Review* 63(5), 286. [Close reading: ★ — p.286 cross-checked word-for-word against the primary full text, plus independent machine verification. Balance of a signed graph ⇔ bipartition.]
- Conway, J. & Smith, D. (2003). *On Quaternions and Octonions*. [Close reading: △ — left in the reference list without close reading. The claims of this hypothesis stand on their own via the close reading of Baez plus machine verification.]
- Eckmann, B. (1943). Historical precedent for the classification of cross products. [Close reading: △ — original paper not read. Bibliography partially unobtained (journal name, volume/issue not recorded).]
- Ekström, & Yousef, (2024). *Cross Products in Euclidean Spaces* (bachelor's thesis, diva2:1865965). [Close reading: ○ — PDF actually obtained. "only 1, 3, 7" confirmed in §1.3/§3/conclusion. Cross-check source for Massey.]
- Frobenius, G. (1878). Associative finite-dimensional real division algebras are only ℝ,ℂ,ℍ. [Close reading: △ — a corollary to Baez (2002) Thm 2. Historical original not obtained (journal name, volume/issue not recorded).]
- Gillies, D.B. (1959). Formalization of the core of cooperative games. [Close reading: △ — secondary confirmation only. Bibliography partially unobtained (journal name, volume/issue not recorded).]
- Hopf, H. (1940). The starting point of the history settling 1,2,4,8. [Close reading: ？ — only the bibliographic name in the RR-014 column candidate. No detailed record; bibliography unobtained.]
- Hurwitz, A. (1898). The normed division algebras theorem. *Nachr. Ges. Wiss. Göttingen* 309–316. [Close reading: △ — confirmed by close reading as Baez (2002) Thm 1. Original paper is a bibliographic pointer only.]
- Kervaire, M. (1958). "Non-parallelizability of the n-sphere for n>7." *PNAS* 44, 280–283. [Close reading: △ — via Baez (2002). Original paper not read.]
- Massey, W.S. (1983). Cross products only for n=1,3,7. *Amer. Math. Monthly* 90(10), 697–701. [Close reading: ○ — original paper not read. The theorem statement and proof structure were cross-checked with the public source Ekström & Yousef (2024).]
- Zorn, M. (1930). Alternative division algebras. *Abh. Math. Sem. Univ. Hamburg* 8, 123–147. [Close reading: △ — via Baez (2002) Thm 2. Original paper not read.]

Note: The standard mathematical facts used in this paper (G₂ = Aut(𝕆), dim G₂ = 14; PGL(3,2) ≅ PSL(2,7) [order 168]; Bott periodicity mod 8 / Radon–Hurwitz numbers; S⁷ = Moufang loop) are treated as standard result; see Baez (2002), without citing independent originals (the order 168 and PGL(3,2) ≅ PSL(2,7) have been confirmed by machine verification).

### Empirical Studies of Team Size, Organization, and Group Structure

- Alchian–Demsetz / Coase / Williamson. Firm size = the continuous optimization of measurement and transaction costs. [Close reading: △ — secondary. No individual bibliography; bibliography unobtained.]
- Altafini, C. (2012). Opinion dynamics on signed networks. *PLOS ONE*. [Close reading: ○ — PMC OA, primary cross-check.]
- Amazon two-pizza rule. ≈5–8 persons (folklore). [Close reading: ？ — industry secondary source, folklore. No academic primary.]
- Antal, Krapivsky & Redner (2006). Social balance dynamics. *Physica D* 224, 130–136. [Close reading: ★ — full-text primary cross-check. "A finite system always converges to balanced" = the grounds for the reversal of valuation.]
- Arrow. The impossibility theorem (no ideal aggregation for three or more options). [Close reading: △ — secondary. Bibliography partially unobtained (year, journal name not recorded).]
- Balkundi & Harrison (2006). "Ties, leaders, and time in teams." *AMJ* 49(1), 49–68. [Close reading: △ — secondary. Meta-analysis of internal density, leader centrality.]
- Bezrukova et al. (2009). The concept of crisscrossing within faultlines. [Close reading: △ — secondary. Empirically tested with a computational model.]
- Brooks, F. *The Mythical Man-Month* (number of paths n(n−1)/2). [Close reading: △ — secondary. Bibliography partially unobtained (year not recorded).]
- Burt, R. Structural holes / tertius. [Close reading: △ — secondary (F-1 table). Bibliography partially unobtained (year, journal name not recorded).]
- Carton & Cummings (2012). "A theory of subgroups in work teams." *AMR* 37(3), 441–470. [Close reading: △ — abstract/secondary.]
- Carton & Cummings (2013). "Subgroup type and configuration on team performance." *JAP* 98(5), 732–758 (PMID 23915429). [Close reading: △ — abstract/secondary.]
- Chujyo et al. (2025). Unbalanced sign → oscillation, non-convergence. *Sci Rep* 15:39882. [Close reading: △ — body 403, abstract only cited.]
- Condorcet jury theorem. Accuracy > 0.5 → more people → accuracy ↑; odd numbers avoid ties. [Close reading: ○ — Wikipedia body read closely (secondary leaning primary). No original year; bibliography partially unobtained.]
- Cowan, N. (2001). "The magical number 4 in short-term memory." *BBS* 24. [Close reading: △ — secondary. The 4±1 revision.]
- Deutsch, M. (1949 / 2006). Cooperation-competition theory. *Human Relations* 2(2) footnote 3 / 2006 Handbook chapter pp.23–28. [Close reading: ★ — primary cross-check. Noted that "if cooperative, convergence regardless of parity" is an extrapolation not in Deutsch.]
- Dougherty & Edward (2009). "Odd or Even: Assembly Size and Majority Rule." *J. of Politics* 71(2), 733–747. [Close reading: △ — abstract/secondary (403).]
- Eisert, Wilkens & Lewenstein (1999). Quantum game theory (EWL). arXiv:quant-ph/9806088. [Close reading: ○ — confirmed word-for-word by close reading of the Wikipedia body. Existence confirmed.]
- Facchetti et al. (2011). Signed networks. *PNAS* 108(52). [Close reading: ○ — PMC OA, primary cross-check. Odd cycle = frustration confirmed in the real data.]
- Faust, K. (2007). "Very local structure in social networks." *Sociological Methodology* 37. [Close reading: △ — secondary (no close-reading record).]
- Faust, K. (2010). "A puzzle concerning triads in social networks." *Social Networks* 32(3), 221–233. [Close reading: △ — abstract/secondary. 90% of the triad distribution is explained by density.]
- Ghemawat, P. Commitment theory (irreversibility = strategic character). [Close reading: △ — primary not finished, secondary (proverbial level). Bibliography partially unobtained (year, journal name not recorded).]
- Goh, Krackhardt, Weingart & Koh (2014). "The role of Simmelian friendship ties on retaliation within triads." *Small Group Research* 45(5). [Close reading: △ — abstract/secondary.]
- Graicunas, V.A. (1933). "Relationship in Organization" (span of control, R=N(2^(N-1)+N-1)). [Close reading: △ — secondary. In RR-023, 44/100/222 is canonical; Wikipedia's 60/105/160 is noted as a transcription variant.]
- Granovetter, M. Triadic closure. [Close reading: △ — secondary (social networks). Bibliography partially unobtained (year, journal name not recorded).]
- Hackman & Vidmar (1970). "Effects of size and task type on group performance." *Sociometry* 33, 37–54. [Close reading: △ — abstract/secondary. Subjective optimum 4.6 persons.]
- Harada (2021). "Examining learning coherence in group decision-making: triads vs. tetrads." *Scientific Reports* 11:20463. doi:10.1038/s41598-021-00089-w (PMC8516953). [Close reading: △ — author name fixed by primary confirmation (finding ③). Body is abstract/secondary.]
- He & Luo (2018). Even number of directors. *J. of Banking & Finance* 93, 139–150. [Close reading: △ — body 403, abstract/secondary.]
- Heider, F. Balance theory (balance judged by the sign product of the triangle). [Close reading: △ — secondary. Mentioned in pair with Cartwright–Harary. Bibliography partially unobtained (year, journal name not recorded).]
- Katzenbach & Smith. Team theory. [Close reading: △ — not closely read, secondary only. Bibliography unobtained (year, title not recorded).]
- Klimek, Hanel & Thurner (2009). "To how many politicians should government be left?" *Physica A*. arXiv:0804.2202. [Close reading: △ — cabinet size, cliff ≈20. abstract/secondary.]
- Krackhardt, D. (1999). "The Ties That Torture: Simmelian Tie Analysis in Organizations." [Close reading: △ — secondary (structure confirmed via Wikipedia). Bibliography partially unobtained (journal name, volume/issue, pages not recorded).]
- Lau & Murnighan (1998). Faultlines. *AMR* 23. [Close reading: △ — secondary-source review.]
- Lichtenstein & Slovic. Preference reversal. [Close reading: △ — secondary (F-1 table). Bibliography partially unobtained (year, journal name not recorded).]
- Lipset / Coser. Cross-cutting vs reinforcing cleavages. [Close reading: △ — secondary. Bibliography unobtained (year, journal name not recorded).]
- Mac Carron, Kaski & Dunbar (2016). "Calling Dunbar's numbers." *Social Networks* 47, 151–155. arXiv:1604.02400. [Close reading: △ — author name fixed by primary confirmation (finding ③). Layer scaling ratio ≈3. abstract/secondary.]
- Mäs et al. (2013). A computational model of crisscrossing. *Org Sci* 24(3). [Close reading: △ — secondary (403).]
- May. The theorem (two options = majority rule is unique; characterization of simple majority rule). [Close reading: △ — secondary. Bibliography partially unobtained (year, journal name not recorded).]
- Miller, G.A. (1956). "The magical number seven, plus or minus two." *Psychological Review* 63, 81–97. [Close reading: ○ — the "numerology caution" at the end of the paper is cited. Used on the side that rejects the transfer of 7±2 to team theory as a category misuse.]
- Moscovici, S. Minority influence. [Close reading: △ — secondary, exploratory. Bibliography partially unobtained (year, journal name not recorded).]
- Mueller, J.S. (2012). "Why individuals in larger teams perform worse." *OBHDP*. [Close reading: △ — abstract/secondary. Volume/issue not recorded, bibliography partially unobtained.]
- Pentland, A. (2012). "The new science of building great teams." *HBR* 90(4), 60–69. [Close reading: ○ — sociometric badge measurements. Body confirmed via secondary PDF distribution.]
- Ringelmann / Latané. Social impact theory, power law R(N)=N^(t−1). [Close reading: △ — secondary. Ringelmann tug-of-war experiment (late 19c). Bibliography partially unobtained (year, journal name not recorded).]
- Scrum Guide (2017 / 2020). The shift in recommended development-team size (3–9 persons → 10 or fewer). [Close reading: ○ — the 2020 original confirmed at the primary level in RR-023.]
- Simmel, G. (1908). *Soziologie* (the qualitative transition of dyad/triad, the third party's 3 roles mediator/tertius gaudens/divide et impera). [Close reading: △ — original not closely read, secondary (Britannica, etc.).]
- Steiner (1972). Process loss (increase in size → monotonic decline in efficiency). [Close reading: △ — secondary. Original not closely read.]
- Sydow et al. (2009). Organizational path dependence (non-ergodic). *AMR*. [Close reading: △ — bibliography and abstract (secondary). Lock-in, irreversibility.]
- Tortoriello & Krackhardt (2010). "Activating cross-boundary knowledge: Simmelian ties." *AMJ* 53(1), 167–181. [Close reading: △ — 276 R&D technicians. abstract/secondary.]
- Trueblood & Busemeyer (2011). Order effects in judgment. [Close reading: △ — secondary (F-1 table).]
- Tyler, T. Procedural justice (voice). [Close reading: △ — secondary. Counter-evidence that breaks the simple bisection of β. Bibliography partially unobtained (year, journal name not recorded).]
- von Neumann & Morgenstern (1944). Cooperative games, the core (coalition becomes non-trivial from the third person). [Close reading: △ — secondary (Britannica/AMS). Original not closely read.]
- Wheelan, S.A. (2009). "Group size, group development, and group productivity." *Small Group Research* 40(2), 247–262. [Close reading: △ — 329 working groups. abstract/secondary.]
- Zhang & Chen (2023). Faultline meta-analysis. *Management and Organization Review* 19(5). [Close reading: △ — secondary. A live replacement citation for the retracted Thatcher & Patel (2011).]
- [Author unknown] (2026). arXiv:2601.07283 (Condorcet cycle ↔ Möbius/Klein bottle). [Close reading: ○ — body fetched, preprint, not peer-reviewed. Author name not recorded, needs confirmation.]

Note 1: Thatcher & Patel (2011) is not listed, having been retracted in 2016. For the faultline meta-analysis, see Zhang & Chen (2023).
Note 2: Gray literature (no independent entry created because the bibliography is unfixed): Gallup's "average 12.1 persons" team-size survey (commercial report; report name/year unspecified), Spotify squad failure case analysis (blog/article; source unspecified), the board parity works Deng, Gao & Liu (2012) / Adil & Khan (2026) (journal name, volume/issue unobtained, 403). When used in the body text, the second-hand route is made explicit ("as reported in RR-013," etc.) and confirmed individually.

### Psychology of Relations, the Triad, and Development (Grounding of the Correspondence Hypothesis)

This section is limited to literature that grounds the correspondence hypothesis of §5 (especially the reading "a triad cannot be reduced to a sum of dyads") and the empirical evidence of triadic dynamics in §2. The readings that develop the two axes of consciousness that were the starting point (Experience A, §1)—the circumplex model of emotion, quantum cognition, the ontology of real/imaginary parts, correspondences with light or elementary particles—are positioned in this paper as future tasks not yet grounded (§7), and the body of literature used for their grounding (about 65 items across emotion, quantum cognition, physics, and intellectual history) is not re-listed in the References of this paper but is preserved with close-reading levels in the research record `PAPER-references-inventory.md`.

- Bakeman & Adamson (1984). Joint attention = "the most complex dyadic interaction" (PMC8172475). [Close reading: △ — secondary confirmation only.]
- Benjamin, J. Thirdness. [Close reading: △ — secondary. With the limitation that it is not a "physical third person." Bibliography unobtained (year, title not recorded).]
- Bion, W.R. (1961). Work group / basic assumption group. [Close reading: △ — secondary level. Bibliography partially unobtained (journal name not recorded).]
- Bowen (1978) / Kerr & Bowen (1988). Family systems theory, triangulation. [Close reading: △ — primary body is blocked. Via the word-for-word (secondary) of Comella (2001).]
- Britton, R. (2004 / 1989). Triangular space / the third position. *Psychoanalytic Quarterly* 73, 47–61 (PMID 14750465). [Close reading: ★ — primary full text (1989) word-for-word. "witness, not a participant."]
- Coe & Davies (2020). Detouring independently predicts the child's adaptation. *J. Fam. Psychol.* 34(7), 814–824 (PMC8324313). [Close reading: ★ — primary full-text cross-check.]
- Comella (2001). Commentary on Bowen's triangle (PDF word-for-word). [Close reading: ○ — PDF word-for-word (secondary commentary close to primary). Bibliography partially unobtained (journal name not recorded).]
- De Jaegher & Di Paolo (2007). "Participatory sense-making." *Phenomenology and the Cognitive Sciences* 6, 485–507. doi:10.1007/s11097-007-9076-9. [Close reading: ★ — primary close reading (author's public-version PDF, full text). "at least two autonomous agents" and "anticipates multi-person extension" confirmed word-for-word.]
- De Jaegher & Di Paolo (2008). Relational domain with its own properties (book chapter). IOS Press, pp.33–47. [Close reading: ○ — context confirmed in the author's public version.]
- Di Paolo, Cuffari & De Jaegher (2018). *Linguistic Bodies*. MIT Press. [Close reading: △ — book, non-OA, bibliography/summary only.]
- Favez, Frascarolo & Tissot (2017). "The Family Alliance Model: A Way to Study and Characterize Early Family Interactions." *Frontiers in Psychology* 8:1441. doi:10.3389/fpsyg.2017.01441. [Close reading: ★ — primary full-text cross-check. "the dyadic systems cannot be summed."]
- Foulkes, S.H. (1948 / 1964). *Introduction to Group-Analytic Psychotherapy* / *Therapeutic Group Analysis* (group matrix). [Close reading: △ — primary not reached, being non-OA. Multiple secondary via GASI commentary plus OA paper (PMC9893044).]
- Gallotti & Frith (2013). We-mode (first-person plural). [Close reading: △ — bibliography confirmed, secondary. Bibliography partially unobtained (journal name not recorded).]
- Klein, M. Splitting, mother-infant undifferentiation. [Close reading: △ — secondary (terms confirmed at the Melanie Klein Trust). Bibliography unobtained (year, title not recorded).]
- Lacan, J. The capital-O Other. [Close reading: △ — secondary (the psychoanalytic third). Bibliography unobtained.]
- Lavanchy (2002). The rapid gaze transition of 97% of three-month-old infants (dissertation). [Close reading: △ — second-hand citation (as cited in McHale et al. 2008). The original dissertation not obtained.]
- Lewin, K. Field theory, life space (field = one per individual). [Close reading: △ — secondary. The strongest counter-evidence from the psychological tradition against the reading "field = real axis" (§5). Bibliography unobtained.]
- McHale, Fivaz-Depeursinge, Dickstein, Robertson & Daley (2008). LTP/family alliance. *Family Process* 47(4), 445–463 (PMC2761722). [Close reading: ★ — PMC full text cross-checked word-for-word locally. 97% and "unexplained by dyadic" cross-checked.]
- Minuchin, S. Detouring / coalition (a coalition that excludes the third party). [Close reading: △ — secondary. The side of pathological dysfunction. Bibliography unobtained (year, title not recorded).]
- Ogden, T.H. (2004). The analytic third. *Psychoanalytic Quarterly* 73, 167–. [Close reading: ★ — primary full text, line numbers identified (81-86, 719-724).]
- Parke & O'Leary (1976). "second-order effect" (the effect of the presence of a third party). [Close reading: △ — secondary. Noted as a trap of confusion with "sequence," which it is not.]
- Sawyer & DeZutter (2009). Collaborative emergence (a 13-person improv troupe). *Psychology of Aesthetics, Creativity, and the Arts* 3(2), 81–92. doi:10.1037/a0013282. [Close reading: ★ — primary full text (author's public version).]
- Tomasello, M. Joint attention, shared intentionality (the triad of self, other, object). [Close reading: △ — secondary. Supports the triadic structure but secondary confirmation only. Bibliography unobtained (year, title not recorded).]
- Trevarthen (2001). Primary/secondary intersubjectivity (the person-person-object triad, from 9 months). [Close reading: △ — original paper is a book chapter, unobtained, secondary (via PMC9116197).]
- Winnicott, D.W. Potential space, the holding environment (the third domain). [Close reading: △ — established within the system, secondary source. In principle a two-person field (extension to 3 persons is a gap in the body text). Bibliography unobtained (year, title not recorded).]

### Physics and Method (Only What the Body Text Directly Cites)

- Litt, G. (2026). "Understanding is the new bottleneck for AI-assisted coding" (geoffreylitt.com, 2026-07-02). [Close reading: ○ — body fetched. External reference for the methodology of §3.]
- Zurek, W.H. (2009). Quantum Darwinism. [Close reading: ○ — secondary but the strongest. Experimentally verified in photon systems, NV centers, and superconducting circuits. Corroboration on the physics side for "sharing = invariant" in §5. Bibliography partially unobtained (journal name, volume/issue not recorded).]

---

## Appendix A: List of Machine-Verification Scripts

<!--SOURCE: two-axis-closure/ の *.py 20本。各1行（何を検証し ALL CHECKS PASSED か）＋リポジトリパス。-->
Among the mathematical claims of this paper, those confirmable by computation are numerically verified by the following 20 scripts (all pure Python, re-runnable with no external-library dependencies). They are stored in the public repository at `knowledge/research/two-axis-closure/`.

| Script | What is verified |
|---|---|
| RR-001a | The Jacobi identity and associativity of the quaternions (basic properties of the classification theorem) |
| RR-010a | The alternative law of the octonions (the alternation of the associator; the break comes from a third outside the subalgebra) |
| RR-011a | The quaternion rotor and the Pauli matrices, the decomposition of the double cover |
| RR-012a | Norm multiplicativity `|xy|=|x||y|` and the separation of the cross term where amplification lives, on the addition side |
| RR-013a | The reversibility of division algebras and its distinction from unitary / quantum reversibility |
| RR-013b | Zero divisors of the sedenions `(e₁+e₁₀)(e₄−e₁₅)=0` (confirmed by exhaustive search under a certain basis convention; division dies above 8 dimensions) |
| RR-015a | The invariance of the center (real axis) as the field |
| RR-015b | The construction and verification of an automorphism of the octonions (an element of G₂) |
| RR-015c | The permutational automorphisms of G₂ |
| RR-016a | The gauge of real/imaginary parts and the invariant |
| RR-016b | The density matrix and decoherence (the physics side of sharing = invariant) |
| RR-016c | The contrast of the quaternion norm with the Minkowski metric |
| RR-016d | The correspondence of Baez–Huerta's Hermitian matrices with Minkowski spacetime |
| RR-018a | The layered structure of "being divisible" (property, norm, process, place) |
| RR-018b | The stage of the unit sphere (S⁰,S¹,S³,S⁷ = the parallelizable spheres) |
| RR-018c | A stocktaking of the real axis |
| RR-018d | Verification of the "advance" component |
| RR-024a | The rotation structure SO(6) of the threesome = 6 dimensions (3 planes orthogonalized), its skeleton |
| RR-024b | The skeleton of the rotation structure SO(2n) for 2–8 persons |
| RR-024c | Deadlock by parity = geometric frustration / graph bipartiteness |

All of these are confirmed to pass their checks at runtime (ALL CHECKS PASSED). The order 168 of the automorphism group of the Fano plane and the non-associativity equation `(e₁e₂)e₄=+e₇ ≠ e₁(e₂e₄)=−e₇` have likewise been confirmed by exhaustive computation.

## Appendix B: Translation of Terms and Certainty Tags

<!--[P][M][S] → established/interpretive/speculative、採用/方向確定/読み候補/探索中/見送り の判定語彙の定義。
repo 絶対原則により内部タグ記号[P][M][S]は本文・付録に出さない。公開語彙のみ定義する。-->
This paper distinguishes the certainty of a claim from the adjudication of a reading with two vocabularies.

**The level of the claim** (how certain that claim is):

- **established (確立)**: A fact confirmed by proof or by machine verification. In this paper, the mathematical classification theorems and the properties of the Fano plane fall here.
- **interpretive (解釈)**: A reading based on structural similarity. It includes an assumption corresponding the mathematical structure to the reality side, and while unproven, it is consistent with the evidence and carries design implications.
- **speculative (思弁)**: A picture at the exploratory stage. Not yet verified, liable to be off, or held open as a question whose settlement is not rushed.

**The state of the reading** (the adjudication of whether the reading is adopted; the vocabulary of the adjudication ledger RR-010):

- **adopted (採用)**: Adjudicated and forming the backbone of this paper.
- **direction fixed (方向確定)**: The direction is settled, but the precision of the wording is still being adjusted.
- **candidate reading (読み候補)**: Presented, but still awaiting the adjudication of adoption.
- **under exploration (探索中)**: The investigation itself is in progress.
- **set aside (見送り)**: Adjudicated and decided against adopting (the reason is also kept on record).

The adjudication is by a division of labor in which the presentation of candidates is by the language model (Fable 5) and the adoption is by the proposer (pjdhiro), matched against experience. Incidentally, in this program's internal research records the certainty is annotated with more abbreviated certainty labels, but in this paper for publication it is unified to the three words above (established / interpretive / speculative).
