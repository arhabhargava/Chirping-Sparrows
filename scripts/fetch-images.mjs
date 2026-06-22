// Downloads all site images from chirpingsparrows.org into public/images/
// Run once after cloning the project on a machine with internet access:
//   node scripts/fetch-images.mjs
// Then set NEXT_PUBLIC_IMG_BASE="" in .env.local to serve them locally.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

const HOST = "https://www.chirpingsparrows.org";

const PATHS = [
  "/images/logo.png",
  "/images/footer-logo.png",
  "/images/aim.png",

  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",

  "/images/course/1.jpg",
  "/images/course/2.jpg",
  "/images/course/3.jpg",
  "/images/course/4.jpg",

  "/images/team/team1.jpg",
  "/images/team/team2.jpg",

  "/images/services/1.jpg",
  "/images/services/2.jpg",
  "/images/services/3.jpg",
  "/images/services/4.jpg",
  "/images/services/5.jpg",

  "/images/bg/f2.png",
  "/images/bg/bg1.JPG",
  "/images/bg/bg2.jpg",
  "/images/bg/bg3.JPG",
  "/images/bg/bg4.jpg",
  "/images/bg/bg5.jpg",
  "/images/bg/p2.jpg",
  "/images/bg/p3.jpg",
  "/images/bg/bg8.jpg",

  "/images/gallery/gallery10-1-2022.png",
  "/images/gallery/gallery10-2-2022.png",
  "/images/gallery/gallery10-3-2022.png",
  "/images/gallery/gallery10-4-2022.png",
  "/images/gallery/gallery10-5-2022.png",
  "/images/gallery/gallery10-6-2022.png",
  "/images/gallery/gallery10-7-2022.png",
  "/images/gallery/gallery10-8-2022.png",
  "/images/gallery/gallery10-9-2022.png",
  "/images/gallery/gallery10-10-2022.png",
  "/images/gallery/gallery10-11-2022.png",
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",

  // News
  "/images/chirpingsparrow.images.png",
  "/images/kiya.jpeg",
  "/new-branch-gaur-city2.png",
  "/branchJ-83P.png",
  "/new-branch.png",
  "/images/news1.jpg",
  "/images/news2.jpg",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadOne(p, idx) {
  const url = HOST + p;
  const dest = path.join(PUBLIC_DIR, p);
  await fs.mkdir(path.dirname(dest), { recursive: true });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(dest, buf);
      console.log(
        `[${String(idx + 1).padStart(2, "0")}/${PATHS.length}] ✓ ${p} (${(
          buf.length / 1024
        ).toFixed(1)} KB)`
      );
      return;
    } catch (err) {
      console.warn(
        `[${idx + 1}] retry ${attempt}/3 for ${p}: ${err.message}`
      );
      await sleep(500 * attempt);
    }
  }
  console.error(`[${idx + 1}] ✗ FAILED ${p}`);
}

async function run() {
  console.log(`Fetching ${PATHS.length} images from ${HOST} → public/images/\n`);
  const concurrency = 4;
  let i = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (i < PATHS.length) {
        const myIdx = i++;
        await downloadOne(PATHS[myIdx], myIdx);
      }
    })
  );
  console.log("\nDone. Now set NEXT_PUBLIC_IMG_BASE=\"\" in .env.local to serve them locally.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
