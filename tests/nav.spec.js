"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var nav_page_1 = require("../pages/nav.page");
// const jasmine = require('jasmine');
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Nav Bar', function () {
    beforeAll(function () {
        // Add code here
    });
    beforeEach(function () {
        // Add code here
    });
    afterAll(function () {
        // Add code here
    });
    afterEach(function () { });
    it('should open support page', function () {
        login_page_1.default.open();
        login_page_1.default.login(username, password);
        nav_page_1.default.burgerMenu.click();
        nav_page_1.default.supportLink.click();
        browser.switchWindow('https://glitchitsystem.com/');
        expect(browser.getUrl()).toEqual('https://glitchitsystem.com/', 'New window url is not correct');
        // console.log(`SUPPORT WEBSITE: GLITCH IT SYSTEM ${browser.getUrl()}`);
    });
    it('should log out', function () {
        login_page_1.default.open();
        login_page_1.default.login(username, password);
        nav_page_1.default.burgerMenu.click();
        nav_page_1.default.logoutLink.click();
        expect(nav_page_1.default.burgerMenu.isDisplayed()).toBe(false, 'Burger menu is still displayed');
        console.log("************************* URL after logout " + browser.getUrl() + " ********************************");
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/", 'Url is not correct');
    });
});
