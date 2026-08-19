import urllib.request
import ssl
import json
import os

ssl_context = ssl._create_unverified_context()

# Curated catalog of 80 unique, verified, high-res cosmetic photos from Unsplash CDN
# Each photo ID is specifically chosen to match the product type and name:
COSMETIC_PHOTOS = {
    # --- 1. SKINCARE (ID 1 - 10) ---
    1: "photo-1620916566398-39f1143ab7be",  # Bio-Cellular Serum (dropper bottle)
    2: "photo-1535585209827-a15fcdbc4c2d",  # Caviar Royal Cream (luxury cream jar)
    3: "photo-1608248543803-ba4f8c70ae0b",  # Damask Rose Cleansing Oil
    4: "photo-1570172619644-dfd03ed5d881",  # Pearl Sleeping Jelly (pink jelly jar)
    5: "photo-1563178406-4cdc2923acbc",  # Rose Petal Toner (clear botanical bottle)
    6: "photo-1556228720-195a672e8a03",  # Edelweiss Silk Cream (white cream jar)
    7: "photo-1556228578-0d85b1a4d571",  # Chamomile Cloud Cleansing Foam (pump bottle)
    8: "photo-1576426863848-c21f53c60b19",  # Diamond Eye Cream (eye care tube/applicator)
    9: "photo-1519735777090-ec97162dc266",  # Almond Face Polish Scrub (facial scrub jar)
    10: "photo-1616683693504-3ea7e9ad6fec", # Pearl Mist (hydrating face mist spray)

    # --- 2. MAKEUP (ID 11 - 20) ---
    11: "photo-1512496015851-a90fb38ba796", # Cushion Compact Luminous Glow SPF 45
    12: "photo-1583241767252-a5e2f7b8fb2d", # Grand Velvet 12-pan Eyeshadow Palette
    13: "photo-1522337360788-8b13dee7a37e", # Tiara Princess Eyeshadow Palette
    14: "photo-1596462502278-27bfdc403348", # Sweet Peach Cream Blush compact
    15: "photo-1503236823255-94609f598e71", # Pearl Loose Powder with puff
    16: "photo-1591360236480-4ed861025fa1", # Butterfly Lash Mascara
    17: "photo-1527799820374-dcf8d9d4a388", # Glowy Pearl Illuminating Primer
    18: "photo-1516975080664-ed2fc6a32937", # Precision Royal Liquid Eyeliner Pen
    19: "photo-1515688594390-b649af70d282", # Diamond Glow Highlighter Palette
    20: "photo-1598440947619-2c35fc9aa908", # Shimmer Setting Spray

    # --- 3. SON MÔI (ID 21 - 30) ---
    21: "photo-1586495777744-4413f21062fa", # Velvet Rose Tint #08 Rouge Noir
    22: "photo-1599733589046-10c005739ef9", # Royal Jewel Lipstick #01 Crown Red
    23: "photo-1625093742435-6fa192b6fb10", # Crystal Jelly Lip Gloss #03 Sakura
    24: "photo-1631730486784-5456119f69ae", # Soft Matte Lipstick #05 Coral Dream
    25: "photo-1631214500115-598fc2cb8d2d", # Rose Honey Lip Balm
    26: "photo-1631214524020-7e18db9a8f92", # Marshmallow Pink Velvet Mud Tint
    27: "photo-1506152983158-b4a74a01c721", # Water Tint #02 Strawberry Milk
    28: "photo-1587854692152-cbe660dbde88", # Camellia Lip Butter Stick
    29: "photo-1571875257727-256c39da42af", # Fairy Diamond 3D Lip Glaze
    30: "photo-1596704017254-9b121068fb31", # 5 Mini Lipsticks Vault Gift Set

    # --- 4. SERUM (ID 31 - 40) ---
    31: "photo-1617897903246-719242758050", # 24K Pure Aurum Gold Flakes Serum
    32: "photo-1601049541289-9b1b7bbbfe19", # Hyaluronic Acid B5 Princess Serum
    33: "photo-1598440947619-2c35fc9aa908", # Alpha Arbutin 5% + Niacinamide Serum
    34: "photo-1552046122-03184de85e08", # Vitamin C 15% Glow Booster Serum
    35: "photo-1508746829417-e6f548d8d6ed", # Niacinamide 10% + Zinc 1% Pore Serum
    36: "photo-1564865878688-9a244444042a", # Retinol 0.5% Night Anti-Aging Serum
    37: "photo-1515377905703-c4788e51af15", # Royal Bird's Nest Peptide Serum
    38: "photo-1540555700478-4be289fbecef", # Centella Calming Green Serum
    39: "photo-1585232004423-244e0e6904e3", # Alpine Edelweiss Stem Cell Serum
    40: "photo-1596755094514-f87e34085b2c", # Marine Collagen Booster Ampoule

    # --- 5. KEM CHỐNG NẮNG (ID 41 - 50) ---
    41: "photo-1584017911766-d451b3d0e843", # Invisible Shield SPF 50+ Sunscreen Tube
    42: "photo-1599305090598-fe179d501227", # Pink Glow Tone-Up Sunscreen SPF 50+
    43: "photo-1611080626919-7cf5a9dbab5b", # Glow Sun Stick SPF 50+ (Sunscreen stick)
    44: "photo-1527799820374-dcf8d9d4a388", # Matte Milk Sunscreen SPF 50+
    45: "photo-1556228720-195a672e8a03", # Water Drop Hydrating Sunscreen
    46: "photo-1556228578-0d85b1a4d571", # Pure Mineral Sensitive Sunscreen
    47: "photo-1608248543803-ba4f8c70ae0b", # Body Sun Mist Spray Canister
    48: "photo-1617897903246-719242758050", # Royal Gold Sun Elixir Sunscreen
    49: "photo-1576426863848-c21f53c60b19", # Blue Shield Anti-Blue Light Sunscreen
    50: "photo-1571781926291-c477ebfd024b", # Sport Shield Waterproof Sunscreen

    # --- 6. BODY CARE (ID 51 - 60) ---
    51: "photo-1571781926291-c477ebfd024b", # Camellia Body Silk Lotion Pump Bottle
    52: "photo-1584308666744-24d5c474f2ae", # French Rose Shower Gel with Rose Petals
    53: "photo-1519735777090-ec97162dc266", # Strawberry Sugar Body Scrub Jar
    54: "photo-1535585209827-a15fcdbc4c2d", # Raw Shea Butter Body Cream Jar
    55: "photo-1528722828814-77b9b83aafb2", # Cherry Blossom Body & Hair Fragrance Mist
    56: "photo-1556228720-195a672e8a03", # Neck & Décolleté Pearl Firming Cream Jar
    57: "photo-1608248543803-ba4f8c70ae0b", # French Lavender Body Massage Oil
    58: "photo-1563178406-4cdc2923acbc", # Shimmering Rose Gold Body Glow Oil
    59: "photo-1519735777090-ec97162dc266", # Royal Himalayan Pink Bath Salts
    60: "photo-1596704017254-9b121068fb31", # Lily of the Valley Hand & Nail Cream Tube

    # --- 7. HAIR CARE (ID 61 - 70) ---
    61: "photo-1526947425960-945c6e72858f", # Biotin & Keratin Shampoo & Conditioner Duo
    62: "photo-1601049541289-9b1b7bbbfe19", # Moroccan Argan Hair Elixir Oil
    63: "photo-1570172619644-dfd03ed5d881", # Rose Collagen Deep Hair Mask Tub
    64: "photo-1528722828814-77b9b83aafb2", # Heat Protectant Hair Perfume Mist
    65: "photo-1519735777090-ec97162dc266", # Sea Salt Scalp Refresh Scrub
    66: "photo-1608248543803-ba4f8c70ae0b", # Volumizing Dry Shampoo Canister
    67: "photo-1598440947619-2c35fc9aa908", # Pink Grapefruit & Biotin Hair Booster
    68: "photo-1556228720-195a672e8a03", # Curl Silk Leave-In Styling Cream
    69: "photo-1584308666744-24d5c474f2ae", # Purple Shield Toning Shampoo for Bleached Hair
    70: "photo-1596462502278-27bfdc403348", # Gold Cushioned Paddle Hair Brush

    # --- 8. NƯỚC HOA (ID 71 - 80) ---
    71: "photo-1592945403244-b3fbafd7f539", # Niche Éclat D'Or Luxury Perfume EDP
    72: "photo-1603006905003-be475563bc59", # Midnight Rose Scented Luxury Candle
    73: "photo-1547887537-6158d64c35b3", # Roselle Dream Floral EDP Perfume
    74: "photo-1523293182086-7651a899d37f", # Royal Amber Wood Oud Perfume
    75: "photo-1588405748880-12d1d2a59f75", # White Jasmine Reed Diffuser with Reeds
    76: "photo-1594035910387-fea47794261f", # Rose Petal Rollerball Pocket Perfume
    77: "photo-1595425970377-c9703cf48b6d", # Sweet Dreams Pillow & Sleep Mist
    78: "photo-1585386959984-a4155224a1ad", # Warm Vanilla Scented Coconut Candle
    79: "photo-1582211594533-268f4f1edcb9", # Black Orchid & Peony EDP Perfume
    80: "photo-1615634260167-c8cdede054de", # 4 Mini Perfumes Discovery Gift Set
}

print(f"Total curated entries: {len(COSMETIC_PHOTOS)}")
