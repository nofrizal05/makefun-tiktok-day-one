# makefun-tiktok-day-one

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/nofrizal05/makefun-tiktok-day-one/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/nofrizal05/makefun-tiktok-day-one/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

Day one, day seven — a short TikTok video about the same tiny agent-built game ("Coin Run") on the day it was made and after a week of daily updates. Same map, same start, visibly more going on the second time: one coin and no score on day one; coins everywhere, chaser enemies, a particle trail and a live score HUD on day seven. The camera never moves, so the change is the whole story. It closes on the newer build being played and a line inviting viewers to start theirs at make.fun, then make.fun's referral end card.

The video is posted publicly on TikTok from @seputarmuse.ai. Places go by the video's score: views + 10 × (likes + comments + shares + saves).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates that `VIDEO.json` holds a full TikTok video address and copies it to `/output/VIDEO.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=31w76kz9&utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
