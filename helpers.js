'use strict';
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

const markoLoaderFinder = makeLoaderFinder('marko-loader');
const fileLoaderFinder = makeLoaderFinder('file-loader');

module.exports = {
  fileLoaderFinder,
  markoLoaderFinder,
};
