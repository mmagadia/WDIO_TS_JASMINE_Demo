"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var monsterCard_page_1 = require("../pages/monsterCard.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Delete Monster', function () {
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
    it('should delete a monster', function () {
        monsterList_page_1.default.monsterItemContainer(1).click();
        monsterCard_page_1.default.manageMonsterMenu.click();
        monsterCard_page_1.default.deleteMonster.click();
        browser.pause(3000);
        expect(monsterCard_page_1.default.deleteMonsterModal.isDisplayed()).toBe(true, 'Delete modal is not displayed');
        expect(monsterCard_page_1.default.deleteMonsterModalText.getText()).toBe('Are you sure you want to delete this monster?', 'text is not correct');
        monsterCard_page_1.default.deleteMonsterModalYes.click();
        browser.pause(3000);
        expect(monsterList_page_1.default.monsterItemContainer(1).isDisplayed()).toBe(true, 'item 1 does not exist');
        expect(monsterList_page_1.default.monsterName(1).getText() !== 'Vampire').toBe(true, 'Vampire still exist');
    });
    it('should not delete a monster', function () {
        monsterList_page_1.default.monsterItemContainer(1).click();
        monsterCard_page_1.default.manageMonsterMenu.click();
        monsterCard_page_1.default.deleteMonster.click();
        monsterCard_page_1.default.deleteMonsterModalNo.click();
        expect(monsterList_page_1.default.monsterItemContainer(2).isDisplayed()).toBe(true, 'item 2 does not exist');
        expect(monsterList_page_1.default.monsterName(1).getText() === 'Vampire').toBe(true, 'Vampire does not exist');
    });
});
