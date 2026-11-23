# Neon Snake — the agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/arukh89/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/arukh89/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one agent, one game. My AI agent built a tiny browser game from a
single prompt while I watched, and the video of it is the entry: a post on X
carrying the clip, ending with make.fun's referral end card.

The prompt was: "Build me a tiny browser game I can actually play — snake,
neon, score, game over. One file."

## Play it

Open `game.html` in any browser. Steer with arrow keys or WASD (swipe on
touch), eat the pink dots, don't hit the walls or yourself. Every dot is
10 points and the snake gets a little faster each time.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` — the address
of the X post carrying the video — to the output directory, where the gate
reads it. That is all the program has to do: the post itself is the entry,
and the house reads its views, likes, reposts, quotes and replies from X.

## The post

`POST.json` at the repository root names the post:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=2j29ygqp&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
