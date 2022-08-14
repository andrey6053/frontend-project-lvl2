#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-v, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, type) => {
    const typeFormat = type.format;
    console.log(gendiff(filepath1, filepath2, typeFormat));
  })
  .parse();
