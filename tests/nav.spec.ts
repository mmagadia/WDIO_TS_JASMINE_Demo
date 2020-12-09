import LoginPage from '../pages/login.page';
import NavPage from '../pages/nav.page';

// const jasmine = require('jasmine');
const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Nav Bar', () => {
  beforeAll(() => {
    // Add code here
  });

  beforeEach(() => {
    // Add code here
  });

  afterAll(() => {
    // Add code here
  });

  afterEach(() => {});

  it('should open support page', () => {
    LoginPage.open();

    LoginPage.login(username, password);

    NavPage.burgerMenu.click();

    NavPage.supportLink.click();

    browser.switchWindow('https://glitchitsystem.com/');

    expect(browser.getUrl()).toEqual('https://glitchitsystem.com/', 'New window url is not correct');
    // console.log(`SUPPORT WEBSITE: GLITCH IT SYSTEM ${browser.getUrl()}`);
  });

  it('should log out', () => {
    LoginPage.open();

    LoginPage.login(username, password);

    NavPage.burgerMenu.click();

    NavPage.logoutLink.click();

    expect(NavPage.burgerMenu.isDisplayed()).toBe(false, 'Burger menu is still displayed');

    console.log(`************************* URL after logout ${browser.getUrl()} ********************************`);
    expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/`, 'Url is not correct');
  });
});
