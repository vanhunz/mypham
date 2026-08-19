import urllib.request
import json
import re
import ssl

ssl_context = ssl._create_unverified_context()

def search_unsplash(query):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=20"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = []
            for item in data.get('results', []):
                results.append({
                    'id': item.get('id'),
                    'description': item.get('alt_description') or item.get('description') or '',
                    'url': item.get('urls', {}).get('regular') or item.get('urls', {}).get('small')
                })
            return results
    except Exception as e:
        print(f"Error searching for {query}: {e}")
        return []

test_res = search_unsplash("luxury serum bottle")
print(f"Found {len(test_res)} items for 'luxury serum bottle'")
for r in test_res[:5]:
    print(r['id'], r['description'], r['url'])
