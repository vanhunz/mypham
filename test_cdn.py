import urllib.request
import ssl

ssl_context = ssl._create_unverified_context()
url = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, context=ssl_context, timeout=5) as resp:
        data = resp.read()
        print(f"Success! Downloaded {len(data)} bytes")
except Exception as e:
    print(f"Error: {e}")
