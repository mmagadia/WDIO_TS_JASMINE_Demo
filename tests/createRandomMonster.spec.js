"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Create Random Monster', function () {
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
    it('should create random monster', function () {
        for (var i = 0; i < 10; i++) {
            buttonsArea_page_1.default.randomMonsterButton.click();
            var item = monsterList_page_1.default.monsterName(i + 2).getText().length > 0;
            var description = monsterList_page_1.default.monsterDescription(i + 2).getText().length > 0;
            expect(monsterList_page_1.default.monsterItemContainerList.length).toBe(i + 3, 'The number of monsters is not correct');
            expect(item).toBe(true, 'Name is not greater than 0');
            expect(description).toBe(true, 'decsription is not greater than 0');
            expect(monsterList_page_1.default.monsterIcon(i + 2).isDisplayed()).toBe(true, 'icon is missing');
            expect(monsterList_page_1.default.favoriteIcon(i + 2).isDisplayed()).toBe(false, 'random monster is favorite');
        }
    });
});
