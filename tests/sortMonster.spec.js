"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Sort Monster', function () {
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
    it('should sort monsters', function () {
        buttonsArea_page_1.default.createRandomMonsterTeamButton.click();
        buttonsArea_page_1.default.sortMonsterButton.click();
        var monsters = [];
        var monsterSorted = [];
        for (var i = 1; i <= monsterList_page_1.default.monsterItemContainerList.length; i++) {
            monsters.push(monsterList_page_1.default.monsterName(i).getText());
        }
        monsterSorted = monsters.sort();
        // ('');
        for (var j = 0; j < monsters.length; j++) {
            expect(monsters[j] === monsterSorted[j]).toBe(true, "Row " + (j + 1) + " is not in the correct position");
            // console.log(`${monsters[j]} : ${monsterSorted[j]}`);
        }
    });
});
