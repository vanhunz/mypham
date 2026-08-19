import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()

def scrape_unsplash_photos(query):
    url = f"https://unsplash.com/s/photos/{urllib.parse.quote(query)}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for photo URLs: https://images.unsplash.com/photo-15...
            matches = re.findall(r'https://images\.unsplash\.com/(photo-[0-9a-zA-Z\-]+)', html)
            # Filter unique
            seen = set()
            unique = []
            for m in matches:
                if m not in seen:
                    seen.add(m)
                    unique.append(f"https://images.unsplash.com/{m}?auto=format&fit=crop&w=800&q=80")
            return unique
    except Exception as e:
        print(f"Error scraping {query}: {e}")
        return []

res = scrape_unsplash_photos("serum bottle skincare")
print(f"Scraped {len(res)} photos:")
for r in res[:10]:
    print(r)
