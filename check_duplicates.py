import os
import hashlib

prod_dir = 'c:/Users/LENOVO/Desktop/mypham/assets/products'
files = [f"p{i}.jpg" for i in range(1, 81)]

hashes = {}
duplicates = {}

for f in files:
    path = os.path.join(prod_dir, f)
    if os.path.exists(path):
        with open(path, 'rb') as fp:
            h = hashlib.md5(fp.read()).hexdigest()
            if h in hashes:
                duplicates.setdefault(hashes[h], []).append(f)
            else:
                hashes[h] = f
    else:
        print(f"Missing: {f}")

print(f"Unique image files: {len(hashes)} out of 80")
print(f"Duplicate groups ({len(duplicates)}):")
for orig, dups in duplicates.items():
    print(f"  {orig} is duplicated as: {dups}")
