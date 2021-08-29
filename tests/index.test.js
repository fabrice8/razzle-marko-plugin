'use strict';

const createRazzleTestConfig = require('razzle/config/createRazzleTestConfig');
const plugin = require('../index');
const { markoLoaderFinder, fileLoaderFinder } = require('../helpers');

describe('razzle-marko-plugin', () => {
  let config;
  beforeAll(async () => {
    config = await createRazzleTestConfig('web', 'dev', {
      plugins: [{ object: plugin }],
    });
    console.log(config);
  });

  it('should add .marko', () => {
    expect(config.resolve.extensions).toContain('.marko');
  });

  it('should add marko-loader', () => {
    const rule = config.module.rules.find(markoLoaderFinder);
    expect(rule).not.toBeUndefined();
  });

  it('should add marko format to exclude', () => {
    const fileRule = config.module.rules.find(fileLoaderFinder);
    expect(fileRule.exclude).toContainEqual(/\.marko?$/);
  });
});
