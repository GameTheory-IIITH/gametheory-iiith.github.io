import yaml
import random

input_path = "../src/content/gallery.yaml"
output_path = "../src/content/gallery.yaml"

with open(input_path, "r") as f:
    data = yaml.safe_load(f)

random.shuffle(data["images"])

with open(output_path, "w") as f:
    yaml.dump(data, f, sort_keys=False, allow_unicode=True)