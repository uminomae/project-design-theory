# 価値とは何か

Issue: #18  
Parent: #6  
作成日: 2026-03-27  
作成: Codex  
使用モデル: `GPT-5`

## 要約

「価値」は一つの意味を持つ単語ではない。少なくとも、価格や交換をめぐる経済的価値、役に立つかをめぐる効用・有用性、善悪や何を大切にするかをめぐる規範的価値、何が重要かをめぐる意義、そして名誉・威信・象徴性のような社会的価値が重なっている。日本語の「価値」はこの束を比較的広く覆うのに対し、英語では `value`, `values`, `worth`, `utility`, `significance` などへ分かれやすい。したがって「価値とは何か」を問うときは、まずどの問題系の value を指しているかを切り分けないと、価格の話と価値観の話、規範の話と効用の話が混線する。

哲学では、価値論（axiology / value theory）は「何が価値をもつのか」「価値は主観か客観か」「内在的価値と道具的価値はどう違うか」といった問いを扱う。[SEP Value Theory](https://plato.stanford.edu/entries/value-theory/), [Britannica axiology](https://www.britannica.com/topic/axiology) SEP は intrinsic value, instrumental value, final value, well-being, fitting attitude といった区別を示し、Britannica は axiology を economic, moral, aesthetic, religious など多様な問いを統合する value の学だと説明する。日本語辞書側でも、コトバンクは「価値」を「その事物がどのくらい役に立つかの度合い」「値打ち」と説明しつつ、経済学的には使用価値・交換価値を区別し、世界大百科事典系の記述では「主体の欲求をみたす客体の性能」として価値を関係的に捉えている。[Kotobank 価値](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651)

この全体像から見ると、今後 project-design で「価値」を扱うときに重要なのは、価値を単なる preference や price に還元しないこと、しかし逆に神秘化もしないことである。価値は、主体の欲求、規範、共同体、制度、評価基準、意味づけ、設計対象との関係の中で立ち上がる。したがって設計や trust や AI alignment に接続するには、「何に価値があるか」だけでなく、「誰にとって、どの関係の中で、どの基準に照らして価値なのか」を明示する必要がある。

## 1. 価値の基本的な分節

### 1.1 経済的価値

- 価格や交換価値としての価値
- Kotobank でも `使用価値 / 交換価値` の区別が前面に出る
- ここでは価値は、交換、希少性、効用、価格形成と近い

### 1.2 効用・有用性

- 役に立つか、便益があるかという意味
- 哲学では instrumental value と重なりやすい
- 経済学では utility としてより形式化される

### 1.3 規範的価値

- 何が善いか、正しいか、大切か
- 英語では複数形 `values` がこの意味に寄りやすい
- 倫理学、宗教、教育、政治思想に強く関わる

### 1.4 意義・重要性

- significance / importance に近い
- 価格でも規範でもないが、「なぜそれが重要なのか」を指す
- 人生の意味、文化的重要性、学問的意義などがここに入る

### 1.5 社会的・象徴的価値

- prestige, status, honor, symbolic worth
- ある対象が共同体の中でどんな位置づけを与えられているか
- 名誉、ブランド、評判、文化資本などと接続する

## 2. 英語の分節

### 2.1 value

- 最も広い語
- worth, usefulness, importance, price-like meaning をまたぐ
- そのため文脈を明示しないと曖昧になりやすい

### 2.2 values

- 価値観、信念、規範
- moral / cultural / personal commitments に近い
- 日本語の「価値観」に相当する場面が多い

### 2.3 worth

- 値打ち、見合うだけの価値
- `worth it` のように「割に合う」感覚が強い
- self-worth のように自己価値感へも伸びる

### 2.4 utility

- 有用性、効用
- 日常語では usefulness に近い
- 経済学では preference ordering の表現として厳密化される

### 2.5 significance

- 意義、重要性
- value のうち、meaningful importance に近い側面を切り出す語

## 3. 哲学では何が問われるか

### 3.1 axiology / value theory

- [Britannica axiology](https://www.britannica.com/topic/axiology) は、axiology を `value` を widest sense で扱う領域とし、economic, moral, aesthetic questions を統合すると説明する
- つまり哲学では、価格だけでなく真善美や意味まで含めて価値を問う

### 3.2 intrinsic / instrumental value

- [SEP Value Theory](https://plato.stanford.edu/entries/value-theory/) は、intrinsic value と instrumental value を中核区別として扱う
- intrinsic value:
  それ自体として価値がある
- instrumental value:
  別の価値あるものへ至る means として価値がある
- final value, constitutive value などの区別も加わる

### 3.3 主観か客観か

- Britannica は fact-value distinction や objectivity / validity を value theory の中心争点として挙げる
- 何かが望まれるから価値があるのか
- 価値があるから望まれるのか
- この問いは、倫理学だけでなく economics, sociology, psychology にも波及する

## 4. 日本語「価値」の特徴

### 4.1 広さ

- [Kotobank 価値](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651) は、「値打ち」「役立ちの度合い」から始まり、経済学的意味、価値判断、価値意識、社会的価値まで広く含む
- このため日本語では、`価値` が price-like な話から values-like な話まで滑りやすい

### 4.2 関係性

- Kotobank の百科記述では、価値は主体の欲求との相関概念でありつつ、客体の側の属性として現れると説明される
- これは「価値は主観だけにも、対象だけにも還元できない」という含意を持つ

### 4.3 規範との近さ

- 同辞典群では、価値と規範がしばしばセットで説明される
- 価値が一般的な望ましさの基準、規範が具体的な行為基準という区別は、project-design で後に使いやすい

## 5. project-design にとっての論点

### 5.1 design との接続

- design は何を `価値あるもの` とみなすかを implicit に含む
- usability, desirability, dignity, meaning, social legitimacy はそれぞれ別種の価値である
- したがって design では、value proposition を単に utility に潰せない

### 5.2 trust との接続

- trust は価値を含む
- 誰を信じるか、何を守るか、どの損失を受け入れられないかは、価値判断と切り離せない
- そのため trust repair は、事実説明だけでなく価値秩序の修復を含みうる

### 5.3 AI alignment との接続

- AI alignment でいう `values` は、しばしば規範的価値観を指すが、実装では preference や utility に近い扱いへ落ちやすい
- ここで「価値」という語の多義性がそのまま technical confusion になりうる

## 6. 暫定結論

1. 「価値」は price, utility, values, significance, social worth を束ねた多義語である。  
2. 英語では `value / values / worth / utility / significance` に分節されやすいが、日本語の「価値」はそれを広く覆う。  
3. 哲学では、価値論は intrinsic / instrumental, subjective / objective, fact / value を中心に問う。  
4. 日本語辞書の整理でも、価値は主体の欲求と客体の性質の関係から立ち上がるものとして理解できる。  
5. project-design で価値を扱うなら、「何が価値か」だけでなく、「誰にとって、どの関係と基準の中で価値か」を問う必要がある。  

## 7. 重要資料

- Stanford Encyclopedia of Philosophy, “Value Theory.” [SEP](https://plato.stanford.edu/entries/value-theory/)  
- Encyclopaedia Britannica, “Axiology.” [Britannica](https://www.britannica.com/topic/axiology)  
- コトバンク「価値」 [Kotobank](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651)  
- [value-chatgpt-20260326.md](/knowledge/research/value/value-chatgpt-20260326.md)  
  用語マップと深掘り候補の広いチェックリストとして参照

## 8. 未確認・保持論点

- 英語辞書の `value / values / worth` の細かな用法差は、今回 Cambridge 直接取得が不安定で十分に確認できていない
- 経済学の utility をどこまで心理的経験と切り離すかは、別途独立に掘る余地がある
- 今回は概観に留めており、次段では environmental value, moral value, value alignment などの個別 deep dive が必要
