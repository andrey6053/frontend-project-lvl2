import gendiff from '../src/index.js';
import difFile1toFile2 from '../__fixtures__/correctData/difJsonToJson.js';
import difYmlFile1toFile2 from '../__fixtures__/correctData/difYmlToYml.js';
import difFile3toFile4 from '../__fixtures__/correctData/difFile3ToFile4Stylish';
import plainFile1File2 from '../__fixtures__/correctData/plainFile1toFIle2';
import plainFile3File4 from '../__fixtures__/correctData/plainFile3toFIle4';

test('difFile1File2', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(difFile1toFile2());
});
test('difYmlFile1File2', () => {
  expect(gendiff('file1.yml', 'file2.yaml')).toEqual(difYmlFile1toFile2());
});
test('difFile3File4Stylish', () => {
  expect(gendiff('file3.json', 'file4.json', 'stylish')).toEqual(difFile3toFile4());
});
test('plainFile1File2', () => {
  expect(gendiff('file1.json', 'file2.json', 'plain')).toEqual(plainFile1File2());
});
test('plainFile3Fil4', () => {
  expect(gendiff('file3.json', 'file4.json', 'plain')).toEqual(plainFile3File4());
});
