/* eslint-disable no-console, import/no-extraneous-dependencies, consistent-return */
const { join } = require('path');
const { existsSync, mkdir } = require('fs');
const { copy } = require('fs-extra');
const rimraf = require('rimraf');

const dist = process.argv[2];

if (!dist) {
  console.log('Please pass name for new directory');
  return 1;
}

const distPath = join(process.cwd(), '..', dist);

if (existsSync(distPath)) {
  console.log('Directory already exists.');
  return 1;
}

async function clean () {
  return new Promise((resolve) => {
    rimraf(`${join(process.cwd(), 'dist')}/{css/*,js/*,static/*,react/*,index.html}`, resolve);
  });
}

async function makeDirectory () {
  return new Promise((resolve) => {
    mkdir(distPath, resolve);
  });
}

async function copyDirectory () {
  console.log('Starting to copy');
  return copy(process.cwd(), distPath)
    .catch((err) => {
      throw err;
    });
}

async function removeGit () {
  return new Promise((resolve) => {
    rimraf(`${distPath}/.git`, resolve);
  });
}

async function start () {
  await clean();
  await makeDirectory();
  await copyDirectory();
  await removeGit();
  console.log(`Successfully created new directory at ${distPath}`);
  return 0;
}

try {
  start();
} catch (err) {
  console.log('Error copying directory: ', err);
  return 1;
}
