import getData from './modules/parsers.js';

const gendiff = (firstFile, secondFile) => {
  const data1 = getData(firstFile);
  const data2 = getData(secondFile);
  let dif = '';
  /* eslint-disable-next-line */
  for (const [key, values] of Object.entries(data1)) {
    if (Object.hasOwn(data2, key)) {
      data2[key] === values ? dif += `${key}:${values}\n` : dif += `- ${key}:${values}\n+ ${key}:${data2[key]}\n`;
    } else {
      dif += `- ${key}:${values}\n`;
    }
  }
  /* eslint-disable-next-line */
  for (const [key, values] of Object.entries(data2)) {
    if (!Object.hasOwn(data1, key)) {
      dif += `+ ${key}:${values}\n`;
    }
  }
  return `{\n${dif}}`;
};

export default gendiff;
