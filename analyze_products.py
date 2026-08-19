import json

with open('products_list.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

with open('product_analysis.txt', 'w', encoding='utf-8') as out:
    for p in products:
        out.write(f"ID {p['id']:02d} | Cat: {p['category']:<15} | Name: {p['name']}\n")
        out.write(f"   Current: {p['image']}\n\n")

print(f"Written analysis for {len(products)} products.")
