import base64
import os
from PIL import Image
import io

# Base64 data from the user (simulated/extracted from context internally by model)
# I will use the image passed in the user message. 
# Since I cannot literally "see" the raw binary bytes here, I will assume the system handles the "use this image" context.
# Actually, I should use the image which was uploaded.
# The user uploaded an image. I need to save it.

def optimize_image(input_path, output_path):
    with Image.open(input_path) as img:
        # Convert to RGB if necessary (e.g. if RGBA)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        # Optimize and save as webp
        img.save(output_path, "WEBP", quality=80, optimize=True)
        print(f"Optimized image saved to {output_path}")

# In this environment, I'll rely on the standard procedure of capturing the image from the context.
# However, I need to know the path of the image the user shared. 
# I will assume the user's image is available.

if __name__ == "__main__":
    # Placeholder for the actual image path provided by the system context
    # Usually, I can access the uploaded images via the filesystem if they are saved.
    # Looking at the context, there isn't a direct path to the newly uploaded image yet.
    # I'll check common upload/temporary directories or use the provided artifact path if it exists.
    pass
