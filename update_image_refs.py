#!/usr/bin/env python3
"""
Update source code references to images (.png/.jpg/.jpeg) to .webp,
based on which images actually got converted (found as .webp files
inside the given images folder).

Usage:
    python update_image_refs.py <project_root> <images_folder>

Example:
    python update_image_refs.py . ./constants/images
    python update_image_refs.py . ./images

What it does:
  1. Scans <images_folder> recursively for .webp files -> collects their basenames.
  2. Scans <project_root> (skipping node_modules, .next, .git) for source files.
  3. In each source file, replaces occurrences of  basename.png / .jpg / .jpeg
     with  basename.webp  (only when the basename matches exactly, with a
     boundary check so "photo1.png" doesn't get matched by basename "photo").
  4. Prints a summary of every file changed and how many replacements were made.

This does NOT touch binary image files -- only text/source files.
Run this AFTER convert_to_webp.py has already converted your images.
"""

import argparse
import os
import re
import sys

SOURCE_EXTENSIONS = (
    ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
    ".css", ".scss", ".sass", ".less",
    ".html", ".mdx", ".md", ".json",
)

SKIP_DIRS = {"node_modules", ".next", ".git", "dist", "build", ".turbo"}

OLD_EXTS = ("png", "jpg", "jpeg")


def collect_webp_basenames(images_folder: str) -> set:
    basenames = set()
    for root, _, files in os.walk(images_folder):
        for f in files:
            if f.lower().endswith(".webp"):
                basenames.add(os.path.splitext(f)[0])
    return basenames


def build_pattern(basenames: set) -> re.Pattern:
    # Sort longest-first so similar basenames don't shadow each other
    escaped = sorted((re.escape(b) for b in basenames), key=len, reverse=True)
    ext_group = "|".join(OLD_EXTS)
    # (?<![\w.-]) ensures we match a full basename, not a substring of a longer one
    pattern = rf"(?<![\w.-])({'|'.join(escaped)})\.(?:{ext_group})\b"
    return re.compile(pattern, re.IGNORECASE)


def update_project(project_root: str, images_folder: str) -> None:
    basenames = collect_webp_basenames(images_folder)
    if not basenames:
        sys.exit(f"No .webp files found in '{images_folder}'. Run convert_to_webp.py first.")

    pattern = build_pattern(basenames)
    files_changed = 0
    total_replacements = 0

    for root, dirs, files in os.walk(project_root):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]

        for filename in files:
            if not filename.endswith(SOURCE_EXTENSIONS):
                continue

            path = os.path.join(root, filename)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
            except (UnicodeDecodeError, PermissionError):
                continue

            new_content, count = pattern.subn(r"\1.webp", content)
            if count > 0:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                files_changed += 1
                total_replacements += count
                print(f"✔ {path}  ({count} reference{'s' if count != 1 else ''} updated)")

    print("\n--- Done ---")
    print(f"Files changed: {files_changed}")
    print(f"Total references updated: {total_replacements}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update image extension references to .webp")
    parser.add_argument("project_root", help="Root folder of your project to scan")
    parser.add_argument("images_folder", help="Folder containing the already-converted .webp images")
    args = parser.parse_args()
    update_project(args.project_root, args.images_folder)