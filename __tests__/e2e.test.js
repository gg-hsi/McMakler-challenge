import * as homePage from '../pages/homePage';
import { getRandomString, getRandomNumber } from '../helpers/utils';

describe('create new ad', () => {
  const adData = {
    name: getRandomString(5),
    street: getRandomString(10),
    rooms: getRandomNumber().toString(),
    price: getRandomNumber().toString(),
  };
  it('create new Ad', async () => {
    await homePage.addNewAdvertisement();
    await homePage.fillAdPopUp(adData);
    await homePage.saveAd();
  });
  it('check new Ad correctly added', async () => {
    expect(page).toMatch(adData.name);
  });
});
describe('edit existing Ad', () => {
  const adData = {
    name: getRandomString(5),
    street: getRandomString(10),
    rooms: getRandomNumber().toString(),
    price: getRandomNumber().toString(),
  };
  it('open first ad', async () => {
    await homePage.openAd(1);
    await homePage.fillAdPopUp(adData);
    await homePage.saveAd();
  });
  it('check new Ad correctly edited', async () => {
    const adName = await homePage.getAdName(1, 1);
    expect(adName).toStrictEqual(adData.name);
  });
});
