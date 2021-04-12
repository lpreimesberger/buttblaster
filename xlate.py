import json

adjectives = []

with open('fun.csv', newline='') as f:
    for line in f.readlines():
        l = line.strip().capitalize()
        adjectives.append(l)

with open('fun.json', 'w+') as o:
    json.dump({"data": adjectives}, o, sort_keys=True, indent=4)
