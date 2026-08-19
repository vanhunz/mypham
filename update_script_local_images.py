import re

with open('c:/Users/LENOVO/Desktop/mypham/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

for p_id in range(1, 81):
    local_path = f"assets/products/p{p_id}.jpg"
    pattern = rf'(id:\s*{p_id},\s*name:.*?)image:\s*"[^"]+",\s*images:\s*\[[^\]]+\]'
    replacement = rf'\1image: "{local_path}",\n    images: ["{local_path}"]'
    js = re.sub(pattern, replacement, js, flags=re.DOTALL)

with open('c:/Users/LENOVO/Desktop/mypham/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

with open('c:/Users/LENOVO/Desktop/mypham/js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("SUCCESS: script.js and js/script.js updated with 80 local 100% pure cosmetics images!")
