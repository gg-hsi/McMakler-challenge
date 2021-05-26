import axios from 'axios';
import { getRandomString, getRandomNumber } from './utils';

export async function getAllAds(url) {
  const config = {
    url,
    method: 'get',
    timeout: 2000,
    headers: {},
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  };
  const response = await axios.request(config);
  return response.data;
}

export async function getAd(url, adID) {
  const config = {
    url: `${url}/${adID}`,
    method: 'get',
    timeout: 2000,
    headers: {},
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  };
  const response = await axios.request(config);
  return response.data;
}

export async function createNewAd(url, data) {
  const config = {
    url,
    method: 'post',
    data,
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  };
  const response = await axios.request(config);
  return response.data;
}

export async function editAd(url, adID) {
  const config = {
    url: `${url}/${adID}`,
    method: 'put',
    data: {
      _id: adID,
      name: getRandomString(5),
      street: getRandomString(10),
      rooms: getRandomNumber(),
      price: getRandomNumber().toString(),
      status: true,
    },
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  };
  const response = await axios.request(config);
  return response.data;
}
