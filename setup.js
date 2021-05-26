import { timeouts, localPaths } from './config/properties';
import { setDefaultOptions } from 'expect-puppeteer';
import * as utils from './helpers/utils';
import { appUrl } from './config/properties';
import * as homePage from './pages/homePage';

jest.setTimeout(timeouts.jest);
setDefaultOptions({
  timeout: timeouts.expectPuppeteer,
});
page.setDefaultTimeout(timeouts.puppeteerGeneralWait);
page.setDefaultNavigationTimeout(timeouts.puppeteerNavigation);

beforeAll(async function () {
  await homePage.open(appUrl);
});

afterEach(async function () {
  const result = await page.screenshot({
    path: utils.getFileName(
      'McMakler-challenge',
      localPaths.screenshots,
      'png',
    ),
  });

  return result;
});
