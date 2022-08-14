import gendiff from '../src/index.js';
import difJson from './__fixtures__/difJsonToJson.js';
import difYml from './__fixtures__/difYmlToYml.js';

test('differentJson', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(difJson());
});
test('differentYml', () => {
  expect(gendiff('file1.yml', 'file2.yaml')).toEqual(difYml());
});
