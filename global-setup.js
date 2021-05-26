import { localPaths } from './config/properties.js';
import { sync } from 'rimraf';
import mkdirp from 'mkdirp';
import * as jestEnvironmentPuppeteer from 'jest-environment-puppeteer/lib/global';

export default async function globalSetup(globalConfig) {
  sync(localPaths.screenshots);
  mkdirp(localPaths.screenshots);
  return jestEnvironmentPuppeteer.setup(globalConfig);
}
