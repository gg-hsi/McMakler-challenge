import filenamify from 'filenamify';
import path from 'path';

export function getFileName(testDescription, localPath, extension) {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Berlin',
  });
  const convertedTimestamp = filenamify(timestamp, {
    replacement: '_',
  }).replace(/[, ]/g, '_');
  const convertedDescription = testDescription.replace(/\s+/g, '_');
  const fileName = `${convertedTimestamp}_${convertedDescription}.${extension}`;
  return path.join(localPath, fileName);
}

export function getRandomString(length = 1) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}
