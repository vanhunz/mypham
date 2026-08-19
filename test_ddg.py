import urllib.request
import urllib.parse
import json
import re
import ssl

ssl_context = ssl._create_unverified_context()

def search_ddg_unsplash(keyword):
    query = f"site:images.unsplash.com/photo- {keyword}"
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract photo URLs
            matches = re.findall(r'images\.unsplash\.com/(photo-[0-9a-zA-Z\-]+)', html)
            seen = set()
            out = []
            for m in matches:
                if m not in seen:
                    seen.add(m)
                    out.append(m)
            return out
    except Exception as e:
        print(f"Error {keyword}: {e}")
        return []

res = search_ddg_unsplash("mascara cosmetics product")
print("Found DDG Unsplash photos for mascara:", res[:5])

res2 = search_ddg_unsplash("eyeliner pen cosmetic")
print("Found DDG Unsplash photos for eyeliner:", res2[:5])

res3 = search_ddg_unsplash("sunscreen tube SPF")
print("Found DDG Unsplash photos for sunscreen:", res3[:5])
