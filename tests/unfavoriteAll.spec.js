"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var monsterCard_page_1 = require("../pages/monsterCard.page");
var newEditMonster_page_1 = require("../pages/newEditMonster.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Unfavorite all monster', function () {
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
    it('should unfavorite all', function () {
        buttonsArea_page_1.default.createRandomMonsterTeamButton.click();
        for (var i = 1; i <= monsterList_page_1.default.monsterItemContainerList.length; i++) {
            monsterList_page_1.default.monsterItemContainer(i).click();
            monsterCard_page_1.default.manageMonsterMenu.click();
            monsterCard_page_1.default.editMonster.click();
            newEditMonster_page_1.default.favoriteCheckbox.click();
            newEditMonster_page_1.default.saveButton.click();
        }
        for (var j = 1; j <= monsterList_page_1.default.monsterItemContainerList.length; j++) {
            expect(monsterList_page_1.default.favoriteIcon(j).getAttribute('class')).toBe('glyphicon glyphicon-heart pull-right hearted', 'Favorite icon is missing');
        }
        buttonsArea_page_1.default.unfavoriteMonsterButton.click();
        for (var j = 1; j <= monsterList_page_1.default.monsterItemContainerList.length; j++) {
            expect(monsterList_page_1.default.favoriteIcon(j).isDisplayed()).toBe(false, 'Favorite icon still exist');
        }
    });
});
