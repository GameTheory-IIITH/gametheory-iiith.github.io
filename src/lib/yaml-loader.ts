import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function loadYamlContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
}
