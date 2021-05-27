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
    const adCreated = await createNewAd(apiUrl, adData);
    expect({ ...adData, _id: adCreated._id }).toStrictEqual(adCreated);
  });
});
describe('edit existing ad', () => {
  let ads = [];
  const adData = {
    name: getRandomString(5),
    street: getRandomString(10),
    rooms: getRandomNumber(),
    price: getRandomNumber().toString(),
    status: true,
  };
  it('get ad to be modified', async () => {
    ads = await getAllAds(apiUrl);
    expect(ads).toBeTruthy();
  });
  it('edit ad', async () => {
    await editAd(apiUrl, ads[0]._id, adData);
    const adEdited = await getAd(apiUrl, ads[0]._id);
    expect(ads[0]).not.toBe(adEdited);
    expect(ads[0]._id).toStrictEqual(adEdited._id);
  });
});
