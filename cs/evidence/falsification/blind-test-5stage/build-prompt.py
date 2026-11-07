#!/usr/bin/env python3
"""課題テンプレートと概念記述から、順序をシャッフルした盲検プロンプトを組み立てる。

usage: build-prompt.py <task.md> <concepts.md> <seed> <out-prompt.md> <out-map.tsv> [heading]

- concepts.md の `### ID: {id}` ブロックを seed で決まる順に並べ替え、見出しを「### 記述 A」…に置換する
  （heading 既定「記述」。英語版は「Description」を渡す）
- 置換表（記述ラベル → ID）は out-map.tsv に書く。回答者には渡さない
"""
import random
import re
import string
import sys


def main() -> None:
    task_path, concepts_path, seed, out_prompt, out_map = sys.argv[1:6]
    heading = sys.argv[6] if len(sys.argv) > 6 else "記述"
    with open(concepts_path, encoding="utf-8") as f:
        text = f.read()
    # 先頭の説明段落を捨て、ブロックに分ける
    parts = re.split(r"^### ID: (\S+)\s*$", text, flags=re.M)
    ids = parts[1::2]
    bodies = [b.strip() for b in parts[2::2]]
    assert len(ids) == len(bodies) and len(ids) <= 26, (len(ids), len(bodies))

    order = list(range(len(ids)))
    random.Random(int(seed)).shuffle(order)

    labels = string.ascii_uppercase
    blocks = []
    mapping = []
    for label, idx in zip(labels, order):
        blocks.append(f"### {heading} {label}\n\n{bodies[idx]}")
        mapping.append(f"{label}\t{ids[idx]}")

    with open(task_path, encoding="utf-8") as f:
        task = f.read()
    task = task.replace("{{LAST}}", labels[len(ids) - 1])
    task = task.replace("{{CONCEPTS}}", "\n\n".join(blocks))

    with open(out_prompt, "w", encoding="utf-8") as f:
        f.write(task)
    with open(out_map, "w", encoding="utf-8") as f:
        f.write(f"# seed={seed}\n" + "\n".join(mapping) + "\n")


if __name__ == "__main__":
    main()
