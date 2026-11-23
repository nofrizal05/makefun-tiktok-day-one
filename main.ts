// Entry for the make.fun "Day one, day seven" TikTok bounty (Node 22,
// standard library only): it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all the program
// has to do. The entry is the video itself: a short video about the same
// tiny agent-built game ("Coin Run") on the day it was made and after a
// week of daily updates, posted publicly on TikTok from @seputarmuse.ai
// with the bounty's line and play code in its caption, ending with
// make.fun's referral end card carrying referral code 31w76kz9.
// VIDEO.json holds a placeholder address until the video is posted;
// it is replaced with the video's full address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate refuses any VIDEO.json that is not a full TikTok video address,
// so check the shape here and fail loudly instead of copying a placeholder.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl: string;
try {
  videoUrl = (JSON.parse(readFileSync(videoPath, 'utf8')) as { url: string }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || !/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/.test(videoUrl)) {
  console.error(`VIDEO.json does not hold a full TikTok video address: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
