import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getPath = (filename, folder) => path.resolve(process.cwd(), `__fixtures__/${folder}`, filename);
const getData = (filename) => {
  let data;
  const [, format] = filename.split('.');
  switch (format) {
    case ('json'): data = JSON.parse(fs.readFileSync(getPath(filename, 'json'), 'utf8')); break;
    case ('yml'): data = yaml.load(fs.readFileSync(getPath(filename, 'yml'), 'utf8')); break;
    case ('yaml'): data = yaml.load(fs.readFileSync(getPath(filename, 'yml'), 'utf8')); break;
    default: console.log('format not support');
  }
  return data;
};

export default getData;
