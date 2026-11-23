// Neon Snake entry for make.fun's "The agent builds a game from one prompt".
//
// What this program does: it reads POST.json from the repository root,
// checks the address in it is really an X post (https://x.com/<handle>/status/<id>),
// and only then copies the file into the grader's output directory, where
// the gate reads the X post's address. That is the whole job of main.ts —
// the entry itself is the post on X, and the house reads the post's views
// and interactions from X, never from here. A POST.json whose url is missing
// or not an X post address is refused with an error and nothing is copied,
// so a bad address can never reach the gate as if it were the entry.
//
// The game the video shows lives in game.html beside this file: a tiny
// browser Snake game, written in this same session from one prompt. Open
// game.html in any browser, steer with arrow keys or WASD, eat the dots,
// don't hit the walls or yourself.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22 runs this TypeScript as it is. Standard library only, no network,
// no clock, no files outside the repository: two runs write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The only address the gate accepts: an X post, https://x.com/<handle>/status/<id>.
const POST_URL = /^https:\/\/x\.com\/[^/\s]+\/status\/\d+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')) as unknown;
  const url = (post as { url?: unknown } | null)?.url;
  if (typeof url !== 'string' || !POST_URL.test(url)) {
    console.error(`refusing POST.json: url is not an X post address (expected https://x.com/<handle>/status/<id>)`);
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error(`refusing POST.json: not valid JSON: ${err.message}`);
  } else {
    console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  }
  process.exit(1);
}
