"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var monsterCard_page_1 = require("../pages/monsterCard.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var newEditMonster_page_1 = require("../pages/newEditMonster.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Edit Monster', function () {
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
    it('should edit a monster', function () {
        var name = 'The Burning Man';
        var description = 'This guy is on fire';
        monsterList_page_1.default.monsterItemContainer(1).click();
        monsterCard_page_1.default.manageMonsterMenu.click();
        monsterCard_page_1.default.editMonster.click();
        expect(browser.getUrl()).toBe(browser.config['baseUrl'] + "/mine/0/edit", 'Url is not correct');
        newEditMonster_page_1.default.nameField.setValue(name);
        newEditMonster_page_1.default.favoriteCheckbox.click();
        newEditMonster_page_1.default.mageRadio.click();
        newEditMonster_page_1.default.descriptionField.setValue(description);
        newEditMonster_page_1.default.saveButton.click();
        expect(monsterList_page_1.default.monsterName(1).getText()).toBe(name, 'monster name is not correct');
        expect(monsterList_page_1.default.monsterDescription(1).getText()).toBe(description, 'Description is not correct');
        expect(monsterList_page_1.default.monsterIcon(1).getAttribute('class')).toBe('glyphicon ra ra-laser-blast pull-right role', 'icon is not correct');
        expect(monsterList_page_1.default.favoriteIcon(1).isDisplayed()).toBe(false, 'monster row 1 is still favorite');
        expect(monsterCard_page_1.default.monsterCardName.getText()).toBe(name, 'monster name is not correct');
        expect(monsterCard_page_1.default.monsterDescription.getText()).toBe(description, 'Description is not correct');
        expect(monsterCard_page_1.default.monsterIcon.getAttribute('class')).toBe('glyphicon ra ra-laser-blast pull-right role', 'icon is not correct');
    });
});
