#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const GALLERY_DIR = path.join(ROOT, "public", "image", "gallery");
const MANIFEST_PATH = path.join(GALLERY_DIR, "manifest.json");
const ALLOWED = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);

async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch { }
}

async function generate() {
    await ensureDir(GALLERY_DIR);

    let images = [];
    try {
        const entries = await fs.readdir(GALLERY_DIR, { withFileTypes: true });
        images = entries
            .filter((e) => e.isFile())
            .map((e) => e.name)
            .filter((name) => ALLOWED.has(path.extname(name).toLowerCase()))
            .sort((a, b) => a.localeCompare(b))
            .map((name) => `image/gallery/${name}`);
    } catch (e) {
        images = [];
    }

    const data = { images };
    await fs.writeFile(MANIFEST_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
    console.log(`[gallery] manifest written: ${MANIFEST_PATH} (${images.length} images)`);
}

generate().catch((err) => {
    console.error("Failed to generate gallery manifest:", err);
    process.exit(1);
});


