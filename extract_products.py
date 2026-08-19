import re
import json

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find all product objects
prod_blocks = re.findall(r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*brand:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*categoryName:\s*"([^"]+)",.*?image:\s*"([^"]+)"', content, re.DOTALL)

print(f"Total extracted: {len(prod_blocks)}")
products = []
for p in prod_blocks:
    products.append({
        "id": int(p[0]),
        "name": p[1],
        "brand": p[2],
        "category": p[3],
        "categoryName": p[4],
        "image": p[5]
    })

with open('products_list.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

for p in products:
    print(f"ID {p['id']}: [{p['category']}] {p['name']} -> {p['image']}")
