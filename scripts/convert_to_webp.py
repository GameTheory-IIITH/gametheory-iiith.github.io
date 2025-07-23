#!/usr/bin/env python3
import subprocess
from pathlib import Path

# --- Configuration ---
# All paths are relative to the project root (the parent of the 'scripts' directory)
PROJECT_ROOT = Path(__file__).parent.parent
SOURCE_DIR = PROJECT_ROOT / "public"
OUTPUT_DIR = PROJECT_ROOT / "public" / "img-optimized"

WEBP_QUALITY = "85"  # Quality as a string for subprocess
# --- End of Configuration ---


def process_images():
    """
    Finds all images in the source directory, and creates resized,
    optimized WebP versions in the output directory.
    """
    print("🚀 Starting image processing with Python...")
    print(f"Project Root: {PROJECT_ROOT}")
    print(f"Source Dir:   {SOURCE_DIR}")
    print(f"Output Dir:   {OUTPUT_DIR}")

    # Ensure the output directory exists
    OUTPUT_DIR.mkdir(exist_ok=True)

    # Recursively find all image files
    image_files = list(SOURCE_DIR.rglob("*.jpg", case_sensitive=False)) + \
                  list(SOURCE_DIR.rglob("*.jpeg", case_sensitive=False)) + \
                  list(SOURCE_DIR.rglob("*.png", case_sensitive=False))

    for source_file in image_files:
        # Important: Skip any images that are already in our output directory!
        if OUTPUT_DIR in source_file.parents:
            continue

        relative_path = source_file.relative_to(SOURCE_DIR)
        output_subdir = OUTPUT_DIR / relative_path.parent
        output_basename = source_file.stem  # Filename without extension

        # Create the corresponding output subdirectory (e.g., public/img-optimized/profiles)
        output_subdir.mkdir(parents=True, exist_ok=True)
        
        # Get original image width using ffprobe
        try:
            probe_cmd = [
                "ffprobe",
                "-v", "error",
                "-select_streams", "v:0",
                "-show_entries", "stream=width",
                "-of", "csv=s=x:p=0",
                str(source_file)
            ]
            result = subprocess.run(probe_cmd, capture_output=True, text=True, check=True)
            original_width = int(result.stdout.strip())
        except (subprocess.CalledProcessError, ValueError) as e:
            print(f"❌ ERROR: Could not get width for '{relative_path}'. Skipping. Reason: {e}")
            continue

        print(f"Processing '{relative_path}' (Width: {original_width}px)...")

        output_webp_path = output_subdir / f"{output_basename}.webp"
        
        # Check if the output file is already up-to-date
        if output_webp_path.exists() and output_webp_path.stat().st_mtime > source_file.stat().st_mtime:
            # print(f"  ✅ Skipping {width}w (up-to-date)")
            continue
        
        ffmpeg_cmd = [
            "ffmpeg",
            "-i", str(source_file),
            "-q:v", WEBP_QUALITY,
            "-y", str(output_webp_path)
        ]
        
        subprocess.run(ffmpeg_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    print("🎉 Advanced image processing complete!")

if __name__ == "__main__":
    process_images()