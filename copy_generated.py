import shutil
import os

brain_dir = "C:/Users/LENOVO/.gemini/antigravity-ide/brain/6317bdc5-90e6-43be-8c94-9331b6ab4a7a"
dest_dir = "c:/Users/LENOVO/Desktop/mypham/assets/products"
os.makedirs(dest_dir, exist_ok=True)

generated_mapping = {
    13: "p13_tiara_1787026620909.jpg",
    14: "p14_blush_1787026580930.jpg",
    15: "p15_powder_1787026598248.jpg",
    16: "p16_mascara_1787025759663.jpg",
    17: "p17_primer_1787026646067.jpg",
    18: "p18_eyeliner_1787026310372.jpg",
    70: "p70_brush_1787026563226.jpg"
}

for pid, fname in generated_mapping.items():
    src = os.path.join(brain_dir, fname)
    dst = os.path.join(dest_dir, f"p{pid}.jpg")
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied ID {pid}: {fname} -> p{pid}.jpg ({os.path.getsize(dst)} bytes)")
    else:
        print(f"File not found: {src}")
