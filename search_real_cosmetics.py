import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()

# Let's search Unsplash for specific product terms and parse photo IDs
queries = [
    "cosmetics-bottle", "serum-bottle", "lipstick-product", "eyeshadow-palette",
    "perfume-bottle", "face-cream-jar", "sunscreen-lotion", "body-lotion-bottle",
    "shampoo-bottle", "makeup-powder", "mascara-product", "cosmetic-skincare"
]

found_photos = {}

for q in queries:
    url = f"https://unsplash.com/s/photos/{q}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=ssl_context, timeout=5) as resp:
            html = resp.read().decode('utf-8')
            # Extract photo URLs with ID
            # matches https://images.unsplash.com/photo-XXXXX
            matches = re.findall(r'https://images\.unsplash\.com/(photo-[0-9a-fA-F\-]+)', html)
            for m in matches:
                if m not in found_photos:
                    found_photos[m] = q
    except Exception as e:
        print(f"Error fetching {q}: {e}")

print(f"Total discovered unique cosmetic photo IDs from Unsplash search: {len(found_photos)}")
for pid, category in list(found_photos.items())[:30]:
    print(f"  {pid} ({category})")

with open('c:/Users/LENOVO/Desktop/mypham/discovered_cosmetics.txt', 'w') as f:
    for pid, category in found_photos.items():
        f.write(f"{pid}\t{category}\n")
