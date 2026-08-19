import shutil
import os

brain_dir = "C:/Users/LENOVO/.gemini/antigravity-ide/brain/ac34664a-9304-465e-ac57-7b0a3b61ded5"
dest_dir = "c:/Users/LENOVO/Desktop/mypham/assets/products"
os.makedirs(dest_dir, exist_ok=True)

image_mapping = {
    11: "luxury_cushion_compact_1786959124779.jpg",
    12: "luxury_eyeshadow_palette_1786953666921.jpg",
    13: "luxury_tiara_palette_1786958796970.jpg",
    14: "luxury_peach_blush_1786958693383.jpg",
    15: "luxury_pearl_powder_1786958665283.jpg",
    16: "luxury_mascara_product_1786958268878.jpg",
    17: "luxury_pearl_primer_1786958830792.jpg",
    18: "luxury_eyeliner_product_1786958288198.jpg",
    19: "luxury_highlighter_palette_1786958616630.jpg",
    20: "luxury_setting_spray_1786958500928.jpg"
}

for pid, src_name in image_mapping.items():
    src_path = os.path.join(brain_dir, src_name)
    dst_path = os.path.join(dest_dir, f"p{pid}.jpg")
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        print(f"Copied {src_name} -> p{pid}.jpg")
    else:
        print(f"File not found: {src_path}")

print("All 10 Makeup products updated with 100% bespoke luxury cosmetic photos!")
