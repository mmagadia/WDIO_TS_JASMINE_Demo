"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Remove All Monster', function () {
    beforeAll(function () {
        // Add code here
    });
    beforeEach(function () {
        login_page_1.default.open();
        login_page_1.default.login(username, password);
    });
    afterAll(function () {
        // Add code here
    });
    afterEach(function () { });
    it('should remove all monster', function () {
        buttonsArea_page_1.default.removeMonsterButton.click();
        expect(browser.getAlertText()).toBe('Are you sure you want to remove all monsters?', 'Alert text is not correct');
        browser.acceptAlert();
        expect(monsterList_page_1.default.monsterCountText.getText()).toBe('Number of monsters: 0', 'Count text is not correct');
        expect(monsterList_page_1.default.monsterItemContainerList.length === 0).toBe(true, 'Monster list still exist');
    });
    it('should not remove all monster', function () {
        buttonsArea_page_1.default.removeMonsterButton.click();
        browser.dismissAlert();
        expect(monsterList_page_1.default.monsterCountText.getText()).toBe('Number of monsters: 2', 'Count text is not correct');
        expect(monsterList_page_1.default.monsterItemContainerList.length === 2).toBe(true, 'Monster list still exist');
    });
});
