const baseUrl = 'https://admin-advertisement.herokuapp.com';
export const appUrl = `${baseUrl}/advertisements`;
export const localPaths = { screenshots: 'screenshots' };
export const timeouts = {
  expectPuppeteer: 10000, // how much should be waited for a click or element presence
  jest: 60000, // how much time should be given to a single test
  puppeteerNavigation: 20000, // how much should be given to puppeteer to e.g. open url
  puppeteerGeneralWait: 10000,
};
