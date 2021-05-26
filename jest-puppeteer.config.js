const windowWidth = 1920;
const windowHeight = 1080;
module.exports = {
  launch: {
    defaultViewport: {
      width: windowWidth,
      height: windowHeight,
    },
    headless: true,
    slowMo: 20,
    args: [
      `--window-size=${windowWidth},${windowHeight}`,
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
  },
};
