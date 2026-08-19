import urllib.request
import ssl

ssl_context = ssl._create_unverified_context()

def check_unsplash_photo(photo_id):
    url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=800&q=80"
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=5) as resp:
            content_type = resp.headers.get('Content-Type')
            size = len(resp.read())
            return True, size
    except Exception as e:
        return False, str(e)

# Test some known cosmetic photo IDs
test_ids = [
    "photo-1620916566398-39f1143ab7be", # serum
    "photo-1535585209827-a15fcdbc4c2d", # cream jar
    "photo-1608248543803-ba4f8c70ae0b", # botanical oil
    "photo-1556228720-195a672e8a03", # cream
    "photo-1586495777744-4413f21062fa", # lipstick
    "photo-1592945403244-b3fbafd7f539", # perfume
    "photo-1522337360788-8b13dee7a37e", # makeup brushes
]

for tid in test_ids:
    ok, info = check_unsplash_photo(tid)
    print(f"{tid}: {'OK (' + str(info) + ' bytes)' if ok else 'FAILED (' + str(info) + ')'}")
