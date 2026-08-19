import urllib.request
import urllib.parse
import json
import ssl

ssl_context = ssl._create_unverified_context()

def search_wikimedia_images(query, limit=10):
    params = {
        'action': 'query',
        'generator': 'search',
        'gsrsearch': f'{query} filetype:bitmap',
        'gsrlimit': limit,
        'prop': 'imageinfo',
        'iiprop': 'url|size|mime',
        'iiurlwidth': 800,
        'format': 'json'
    }
    url = f"https://commons.wikimedia.org/w/api.php?{urllib.parse.urlencode(params)}"
    headers = {'User-Agent': 'RoselleCosmeticsBot/1.0 (contact@roselle.vn)'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for pid, page in pages.items():
                title = page.get('title', '')
                infos = page.get('imageinfo', [])
                if infos:
                    thumb_url = infos[0].get('thumburl') or infos[0].get('url')
                    results.append({'title': title, 'url': thumb_url})
            return results
    except Exception as e:
        print(f"Error searching wikimedia for {query}: {e}")
        return []

print("Searching for cosmetics...")
res = search_wikimedia_images("eyeshadow palette cosmetic")
for r in res[:5]:
    print(r['title'], "->", r['url'])
