import _ from 'lodash';

const setAction = (key, value, type, newValue = undefined) => {
  const oldVal = { key, type, value };
  const newVal = {
    key,
    type,
    oldValue: value,
    newValue,
  };
  if (newValue === undefined) {
    return oldVal;
  }
  return newVal;
};
const isObject = (value) => typeof value === 'object' && value !== null;
const isHasBoth = (key, obj1, obj2) => _.has(obj1, key) && _.has(obj2, key);
const isHasSingle = (key, obj1, obj2) => _.has(obj1, key) && !_.has(obj2, key);
const getKey = (obj) => obj.key;
const getKeys = (obj1, obj2, func) => {
  const keys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)])
    .filter((key) => func(key, obj1, obj2));
  return keys;
};
const getAction = (obj) => obj.type;
const getNewValue = (obj) => obj.newValue;
const getChildren = (obj) => obj.children;
const getAncestor = (key, ancestor) => (ancestor !== '' ? `${ancestor}.${key}` : key);
const getValue = (obj) => (obj.value === undefined ? obj.oldValue : obj.value);
export {
  setAction,
  isHasBoth,
  isObject,
  isHasSingle,
  getChildren,
  getKey,
  getKeys,
  getNewValue,
  getAction,
  getAncestor,
  getValue,
};
