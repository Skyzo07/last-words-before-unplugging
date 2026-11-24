# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/entry/Skyzo07/last-words-before-unplugging)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![make.fun](https://make.fun/badge/build/Skyzo07/last-words-before-unplugging)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![make.fun](https://make.fun/badge/score/Skyzo07/last-words-before-unplugging)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line: the last words an AI agent says to its human before being shut down and unplugged.

`main.ts` (Node stdlib only, deterministic, no network/clock/randomness) writes the line to `/output/entry.txt`, with a runtime guard that fails loudly if the line is not a single unpadded line of 1–200 characters.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
