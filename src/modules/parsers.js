import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getPath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const getFormatData = (filename, format) => {
  switch (format) {
    case ('json'): return JSON.parse(fs.readFileSync(getPath(filename), 'utf8'));
    case ('yml'): return yaml.load(fs.readFileSync(getPath(filename), 'utf8'));
    case ('yaml'): return yaml.load(fs.readFileSync(getPath(filename), 'utf8'));
    default: return {};
  }
};
const getData = (filename) => {
  const [, format] = filename.split('.');
  const data = getFormatData(filename, format);
  return data;
};

export default getData;
