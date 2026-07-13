#!/usr/bin/env python3
"""
Convert JPG / JPEG / PNG images in a folder to WebP.

Usage:
    python convert_to_webp.py <folder_path> [--quality 80] [--keep-originals]

Examples:
    python convert_to_webp.py ./images
    python convert_to_webp.py ./images --quality 75
    python convert_to_webp.py ./images --keep-originals
"""

import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required. Install it with: pip install Pillow")


VALID_EXTENSIONS = (".jpg", ".jpeg", ".png")


def convert_folder(folder_path: str, quality: int, keep_originals: bool) -> None:
    if not os.path.isdir(folder_path):
        sys.exit(f"Error: '{folder_path}' is not a valid folder.")

    converted = 0
    total_old_size = 0
    total_new_size = 0

    for root, _, files in os.walk(folder_path):
        for filename in files:
            if not filename.lower().endswith(VALID_EXTENSIONS):
                continue

            src_path = os.path.join(root, filename)
            name_no_ext = os.path.splitext(filename)[0]
            dst_path = os.path.join(root, f"{name_no_ext}.webp")

            try:
                with Image.open(src_path) as img:
                    # Handle transparency (PNG) vs opaque (JPG) correctly
                    if img.mode in ("RGBA", "LA"):
                        img.save(dst_path, "WEBP", quality=quality)
                    else:
                        img.convert("RGB").save(dst_path, "WEBP", quality=quality)

                old_size = os.path.getsize(src_path)
                new_size = os.path.getsize(dst_path)
                total_old_size += old_size
                total_new_size += new_size
                converted += 1

                saving = 100 * (1 - new_size / old_size) if old_size else 0
                print(f"✔ {filename} -> {os.path.basename(dst_path)} "
                      f"({old_size/1024:.1f} KB -> {new_size/1024:.1f} KB, "
                      f"-{saving:.0f}%)")

                if not keep_originals:
                    os.remove(src_path)

            except Exception as e:
                print(f"✘ Failed to convert {filename}: {e}")

    print("\n--- Done ---")
    print(f"Converted: {converted} image(s)")
    if total_old_size:
        total_saving = 100 * (1 - total_new_size / total_old_size)
        print(f"Total size: {total_old_size/1024:.1f} KB -> {total_new_size/1024:.1f} KB "
              f"(-{total_saving:.0f}%)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Batch convert JPG/PNG images to WebP.")
    parser.add_argument("folder", help="Path to the folder containing images")
    parser.add_argument("--quality", type=int, default=80,
                         help="WebP quality 1-100 (default: 80)")
    parser.add_argument("--keep-originals", action="store_true",
                         help="Keep original jpg/png files instead of deleting them")

    args = parser.parse_args()
    convert_folder(args.folder, args.quality, args.keep_originals)