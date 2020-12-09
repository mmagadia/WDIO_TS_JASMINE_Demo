"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var MonsterData = require("../data/monster.json");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Create Random Monsters Team', function () {
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
    it('should create random monster Team', function () {
        buttonsArea_page_1.default.createRandomMonsterTeamButton.click();
        expect(monsterList_page_1.default.monsterCountText.getText()).toBe('Number of monsters: 5', 'Number of monster is not correct');
        expect(monsterList_page_1.default.monsterItemContainerList.length === 5).toBe(true, 'Monster list length is not correct');
        for (var i = 1; i <= monsterList_page_1.default.monsterItemContainerList.length; i++) {
            var monsterName = monsterList_page_1.default.monsterName(i).getText();
            for (var j = 0; j < MonsterData.length; j++) {
                if (monsterName === MonsterData[j].name) {
                    console.log(monsterName + ": " + MonsterData[j].name);
                    expect(monsterList_page_1.default.monsterDescription(i).getText()).toBe(MonsterData[j].desc, "Decription for row " + monsterName + " is not correct");
                    expect(monsterList_page_1.default.monsterIcon(i).getAttribute('class')).toBe(MonsterData[j].icon, "icon for row " + monsterName + " is not correct");
                    break;
                }
                else if (j === MonsterData.length - 1) {
                    expect(false).toBe(true, "Monster with name " + monsterName + " was not found.");
                }
            }
        }
    });
});
