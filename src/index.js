import _ from 'lodash';
import getData from './modules/parsers.js';
import formate from './modules/index.js';
import {
  setAction,
  isHasBoth,
  isObject,
  isHasSingle,
  getKey,
  getKeys,
} from './cli.js';

const newTree = (obj1, obj2) => {
  const iter = (key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      const nested = {
        key,
        type: 'nested',
        children: newTree(obj1[key], obj2[key]),
      };
      return nested;
    } if (obj1[key] === obj2[key]) {
      return setAction(key, obj1[key], 'unchanged');
    }
    return setAction(key, obj1[key], 'changed', obj2[key]);
  };

  const common = getKeys(obj1, obj2, isHasBoth).map(iter);
  const unique1 = getKeys(obj1, obj2, isHasSingle)
    .map((key) => setAction(key, obj1[key], 'removed'));
  const unique2 = getKeys(obj2, obj1, isHasSingle)
    .map((key) => setAction(key, obj2[key], 'added'));
  const result = [...common, ...unique1, ...unique2].flat();
  return _.sortBy(result, getKey);
};

const gendiff = (firstFile, secondFile, style) => {
  const data1 = getData(firstFile);
  const data2 = getData(secondFile);
  const tree = newTree(data1, data2).flat();
  const result = formate(tree, style);
  return result;
};

export default gendiff;
