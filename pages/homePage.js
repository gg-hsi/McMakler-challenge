const selectors = {
  appHeader: '.app__header',
  addNewAd: '.al-add__icon',
  adDetails: '.advertisement-details',
  adName: 'input[name="name"]',
  adStreet: 'input[name="street"]',
  adRooms: 'input[name="rooms"]',
  adPrice: 'input[name="price"]',
  checkBox: '.md-primary[type="checkbox"] .md-container',
  saveButton: '.md-primary[ng-click="$ctrl.saveAdvertisementDetails()"]',
};
const getLineSelectorInTable = (row) => `tbody tr:nth-of-type(${row})`;
const getCellSelectorInTable = (row, cell) =>
  `tbody tr:nth-of-type(${row}) td:nth-of-type(${cell})`;

export async function open(url) {
  await page.goto(url, { waitUntil: 'networkidle0' });
  return expect(page).toMatchElement(selectors.appHeader, {
    text: 'Advertisements',
    visible: true,
  });
}

export async function addNewAdvertisement() {
  await expect(page).toClick(selectors.addNewAd);
  return expect(page).toMatchElement(selectors.adDetails, { visible: true });
}

export async function fillAdPopUp({ name, street, rooms, price }) {
  await expect(page).toFill(selectors.adName, name);
  await expect(page).toFill(selectors.adStreet, street);
  await expect(page).toFill(selectors.adRooms, rooms);
  await expect(page).toFill(selectors.adPrice, price);
  return expect(page).toClick(selectors.checkBox);
}

export async function saveAd() {
  await expect(page).toClick(selectors.saveButton);
  await expect(page).toMatchElement(selectors.adDetails, { hidden: true });
  return expect(page).toMatch('Saved successfully');
}

export async function openAd(row) {
  await expect(page).toClick(getLineSelectorInTable(row));
  return expect(page).toMatchElement(selectors.adDetails, { visible: true });
}

export async function getAdName(row, cell) {
  const adNameElement = await expect(page).toMatchElement(
    getCellSelectorInTable(row, cell),
    { visible: true },
  );
  return page.evaluate((el) => el.innerText, adNameElement);
}
