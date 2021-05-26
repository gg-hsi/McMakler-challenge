import { getAllAds, createNewAd, editAd, getAd } from '../helpers/api';
import { getRandomString, getRandomNumber } from '../helpers/utils';

import { apiUrl } from '../config/properties';
describe('create new ad', () => {
  const adData = {
    name: getRandomString(5),
    street: getRandomString(10),
    rooms: getRandomNumber(),
    price: getRandomNumber().toString(),
    status: true,
  };
  it('create new ad', async () => {
    await createNewAd(apiUrl, adData);
  });
  it('edit existing', async () => {
    const ads = await getAllAds(apiUrl);
    expect(ads).toBeTruthy();
    await editAd(apiUrl, ads[0]._id);
    const adEdited = await getAd(apiUrl, ads[0]._id);
    expect(ads[0]).not.toBe(adEdited);
    expect(ads[0]._id).toStrictEqual(adEdited._id);
  });
});
