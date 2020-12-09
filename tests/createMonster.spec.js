"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var newEditMonster_page_1 = require("../pages/newEditMonster.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Create Monster', function () {
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
    it('should create new monster', function () {
        var row = 3;
        var name = 'Nemesis';
        var description = 'The Pursuer or the Chaser';
        buttonsArea_page_1.default.newMonsterButton.click();
        newEditMonster_page_1.default.nameField.setValue(name);
        newEditMonster_page_1.default.favoriteCheckbox.click();
        newEditMonster_page_1.default.thiefRadio.click();
        newEditMonster_page_1.default.descriptionField.setValue(description);
        newEditMonster_page_1.default.saveButton.click();
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/mine", 'url is not correct');
        expect(monsterList_page_1.default.monsterCountText.getText()).toBe("Number of monsters: " + row, 'Monster count text is not correct');
        expect(monsterList_page_1.default.monsterItemContainer(row).isDisplayed()).toBe(true, 'Monster Item does not exist');
        expect(monsterList_page_1.default.monsterName(row).getText()).toBe(name, 'Monster name is not correct');
        expect(monsterList_page_1.default.monsterDescription(row).getText()).toBe(description, 'Monster Description is not correct');
        expect(monsterList_page_1.default.monsterIcon(row).getAttribute('class')).toBe('glyphicon ra ra-kunai pull-right role', 'Monster icon is not correct');
        expect(monsterList_page_1.default.favoriteIcon(row).isDisplayed()).toBe(true, 'Favorite icon is missing.');
    });
    it('should display error message when mandatory fields are empty', function () {
        buttonsArea_page_1.default.newMonsterButton.click();
        newEditMonster_page_1.default.nameField.click();
        newEditMonster_page_1.default.descriptionField.click();
        expect(newEditMonster_page_1.default.nameRequiredErrorText.isDisplayed()).toBe(true, 'name error text is not displayed');
        expect(newEditMonster_page_1.default.nameRequiredErrorText.getText()).toBe('Name is required', 'name error text is not correct');
        newEditMonster_page_1.default.nameField.click();
        expect(newEditMonster_page_1.default.decsriptionRequiredErrorText.isDisplayed()).toBe(true, 'Description error text is not doisplayed');
        expect(newEditMonster_page_1.default.decsriptionRequiredErrorText.getText()).toBe('Description is required', 'Description error text is not correct');
        expect(newEditMonster_page_1.default.saveButton.isEnabled()).toBe(false, 'Save button is enabled');
    });
});
