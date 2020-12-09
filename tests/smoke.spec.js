"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("../pages/login.page");
var nav_page_1 = require("../pages/nav.page");
var buttonsArea_page_1 = require("../pages/buttonsArea.page");
var monsterList_page_1 = require("../pages/monsterList.page");
var monsterCard_page_1 = require("../pages/monsterCard.page");
var newEditMonster_page_1 = require("../pages/newEditMonster.page");
var username = 'bob@bob.com';
var password = 'Test123';
describe('Test Suite: Smoke', function () {
    beforeAll(function () {
        // Add code here
    });
    beforeEach(function () {
        login_page_1.default.open();
        // LoginPage.login(username, password);
    });
    afterAll(function () {
        // Add code here
    });
    afterEach(function () { });
    it('should validate static contents on login page', function () {
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/", 'URL is not correct');
        // Test that static elements are displayed
        expect(nav_page_1.default.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
        expect(nav_page_1.default.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');
        expect(login_page_1.default.usernameLabel.isDisplayed()).toBe(true, 'Username label is not displayed');
        expect(login_page_1.default.usernameField.isDisplayed()).toBe(true, 'Username field is not displayed');
        expect(login_page_1.default.passwordLabel.isDisplayed()).toBe(true, 'Password label is not displayed');
        expect(login_page_1.default.passwordField.isDisplayed()).toBe(true, 'Password field is not displayed');
        expect(login_page_1.default.emailErrorText.isDisplayed()).toBe(false, 'Email error text is displayed');
        expect(login_page_1.default.passwordErrorText.isDisplayed()).toBe(false, 'Password error text is displayed');
        expect(login_page_1.default.loginButton.isDisplayed()).toBe(true, 'Login button is not displayed');
        // Test that static element texts are correct
        expect(nav_page_1.default.brand.getText()).toBe('Monster Dream Team', 'Brand text is not correct');
        expect(nav_page_1.default.monsterNavItem.getText()).toBe('My Monster Team', 'Monster nav item text is not correct');
        expect(login_page_1.default.usernameLabel.getText()).toBe('Username', 'Username text is not correct');
        expect(login_page_1.default.passwordLabel.getText()).toBe('Password', 'Password text is not correct');
        expect(login_page_1.default.loginButton.getText()).toBe('Login', 'Login button text is not correct');
        // Test default element state
        expect(login_page_1.default.loginButton.isClickable()).toBe(false, 'Login button is clickable');
        expect(login_page_1.default.usernameField.getValue()).toBe('', 'Username field is not blank');
        expect(login_page_1.default.passwordField.getValue()).toBe('', 'Password field is not blank');
        expect(login_page_1.default.usernameField.getAttribute('placeholder')).toBe('example@example.com', 'Username placeholder is not correct');
    });
    it('should validate static contents on nav bar when logged in', function () {
        expect(nav_page_1.default.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
        expect(nav_page_1.default.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');
        // Login
        login_page_1.default.login(username, password);
        expect(nav_page_1.default.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
        expect(nav_page_1.default.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');
        expect(nav_page_1.default.burgerMenu.isDisplayed()).toBe(true, 'Burger menu is not displayed');
        // before opening menu
        expect(nav_page_1.default.supportLink.isClickable()).toBe(false, 'Support Link is clickable');
        expect(nav_page_1.default.logoutLink.isClickable()).toBe(false, 'Logout Link is clickable');
        // after opening menu
        nav_page_1.default.burgerMenu.click();
        expect(nav_page_1.default.supportLink.isClickable()).toBe(true, 'Support Link is not clickable');
        expect(nav_page_1.default.logoutLink.isClickable()).toBe(true, 'Logout Link is not clickable');
    });
    it('should validate static buttons area buttons', function () {
        login_page_1.default.login(username, password);
        //  assert.equal(ButtonsAreaPage..isDisplayed(), true, ' button is not displayed');
        expect(buttonsArea_page_1.default.newMonsterButton.isDisplayed()).toBe(true, 'New Monster button is not displayed');
        expect(buttonsArea_page_1.default.randomMonsterButton.isDisplayed()).toBe(true, 'Random Monster button is not displayed');
        expect(buttonsArea_page_1.default.removeMonsterButton.isDisplayed()).toBe(true, ' Remove monster button is not displayed');
        expect(buttonsArea_page_1.default.unfavoriteMonsterButton.isDisplayed()).toBe(true, 'Unfavorite button is not displayed');
        expect(buttonsArea_page_1.default.createRandomMonsterTeamButton.isDisplayed()).toBe(true, 'Create random monster team button is not displayed');
        expect(buttonsArea_page_1.default.sortMonsterButton.isDisplayed()).toBe(true, 'Sort monster button is not displayed');
        expect(buttonsArea_page_1.default.newMonsterButton.getText()).toBe('New Monster', 'New Monster button text is not correct');
        expect(buttonsArea_page_1.default.randomMonsterButton.getText()).toBe('Random Monster', 'Random Monster button text is not correct');
        expect(buttonsArea_page_1.default.removeMonsterButton.getText()).toBe('Remove All Monsters', ' Remove monster button text is not correct');
        expect(buttonsArea_page_1.default.unfavoriteMonsterButton.getText()).toBe('Unfavorite All', 'Unfavorite button text is not correct');
        expect(buttonsArea_page_1.default.createRandomMonsterTeamButton.getText()).toBe('Create Random Monster Team', 'Create random monster team button text is not correct');
        expect(buttonsArea_page_1.default.sortMonsterButton.getText()).toBe('Sort Monsters', 'Sort monster button text is not correct');
    });
    it('should display default monster list', function () {
        login_page_1.default.login(username, password);
        // assert.equal(MonsterListPage..getText(), '', '');
        expect(monsterList_page_1.default.monsterCountText.getText()).toBe('Number of monsters: 2', 'Monster count text is not correct');
        // Monster row 1
        expect(monsterList_page_1.default.monsterName(1).getText()).toBe('Vampire', 'Monster name 1 is not correct');
        expect(monsterList_page_1.default.monsterDescription(1).getText()).toBe('He just wants your blood.', 'Monster Decription row 1 is not correct');
        expect(monsterList_page_1.default.monsterIcon(1).getAttribute('class')).toBe('glyphicon ra ra-sword pull-right role', 'Monster icon row 1 is not correct');
        expect(monsterList_page_1.default.favoriteIcon(1).getAttribute('class')).toBe('glyphicon glyphicon-heart pull-right hearted', 'Monster favorite icon row 1 is not correct');
        // Monster row 2
        expect(monsterList_page_1.default.monsterName(2).getText()).toBe('Swamp Creature', 'Monster name row 2 is not correct');
        expect(monsterList_page_1.default.monsterDescription(2).getText()).toBe('He awaits you in the swamp.', 'Monster Decription row 2 is not correct');
        expect(monsterList_page_1.default.monsterIcon(2).getAttribute('class')).toBe('glyphicon ra ra-health pull-right role', 'Monster icon row 2 is not correct');
        expect(monsterList_page_1.default.favoriteIcon(2).isDisplayed()).toBe(false, 'Monster favorite icon row 2 is displayed');
    });
    it('should validate default contents in monster card', function () {
        login_page_1.default.login(username, password);
        expect(monsterCard_page_1.default.selectMonstertext.isDisplayed()).toBe(true, 'Select a monster text is not displayed');
        expect(monsterCard_page_1.default.selectMonstertext.getText()).toBe('Select a Monster to edit.', 'Select a monster text is not displayed');
        monsterList_page_1.default.monsterItemContainer(1).click();
        expect(monsterCard_page_1.default.selectMonstertext.isDisplayed()).toBe(false, 'Select a monster text is still displayed');
        expect(monsterCard_page_1.default.monsterCard.isDisplayed()).toBe(true, ' Monster Card is not displayed');
        expect(monsterCard_page_1.default.monsterCardName.getText()).toBe('Vampire', ' Monster name is not displayed');
        expect(monsterCard_page_1.default.monsterDescription.getText()).toBe('He just wants your blood.', 'Monster Description is not correct');
        expect(monsterCard_page_1.default.monsterIcon.getAttribute('class')).toBe('glyphicon ra ra-sword pull-right role', 'icon is not correct');
        expect(monsterCard_page_1.default.monsterfavoriteIcon.getAttribute('class')).toBe('glyphicon glyphicon-heart pull-right hearted', 'monster favorite is not correct');
        expect(monsterCard_page_1.default.manageMonsterMenu.isDisplayed()).toBe(true, 'Manage monster menu is not displayed');
        monsterCard_page_1.default.manageMonsterMenu.click();
        expect(monsterCard_page_1.default.editMonster.isDisplayed()).toBe(true, 'Edit monster is not displayed');
        expect(monsterCard_page_1.default.deleteMonster.isDisplayed()).toBe(true, 'Delete monster is not displayed');
    });
    it('should validate static content for new or edit form', function () {
        login_page_1.default.login(username, password);
        buttonsArea_page_1.default.newMonsterButton.click();
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/mine/new", 'url is not correct');
        expect(newEditMonster_page_1.default.saveButton.isDisplayed()).toBe(true, 'Save button is not displayed');
        expect(newEditMonster_page_1.default.saveButton.isEnabled()).toBe(false, 'Save button is enabled');
        expect(newEditMonster_page_1.default.cancelButton.isDisplayed()).toBe(true, 'Cancel button is not displayed');
        expect(newEditMonster_page_1.default.cancelButton.isEnabled()).toBe(true, 'Cancel button is not enabled');
        expect(newEditMonster_page_1.default.nameLabelText.isDisplayed()).toBe(true, 'Name label text is not correct');
        expect(newEditMonster_page_1.default.nameField.isDisplayed()).toBe(true, 'Name field is not displayed');
        expect(newEditMonster_page_1.default.favoriteCheckbox.isDisplayed()).toBe(true, 'is not displayed');
        expect(newEditMonster_page_1.default.favoriteLabel.isDisplayed()).toBe(true, 'is not displayed');
        expect(newEditMonster_page_1.default.mosterRoleLabelText.isDisplayed()).toBe(true, 'Monster Role text is not displayed');
        expect(newEditMonster_page_1.default.soldierRadio.isDisplayed()).toBe(true, 'Soldier radio button is not displayed');
        expect(newEditMonster_page_1.default.soldierIcon.isDisplayed()).toBe(true, 'Soldier icon is not displayed');
        expect(newEditMonster_page_1.default.medicRadio.isDisplayed()).toBe(true, 'Medic radio is not displayed');
        expect(newEditMonster_page_1.default.medicIcon.isDisplayed()).toBe(true, 'Medic icon is not displayed');
        expect(newEditMonster_page_1.default.shieldRadio.isDisplayed()).toBe(true, 'Shield radio is not displayed');
        expect(newEditMonster_page_1.default.shieldIcon.isDisplayed()).toBe(true, 'Shield icon is not displayed');
        expect(newEditMonster_page_1.default.thiefRadio.isDisplayed()).toBe(true, 'Thief radio is not displayed');
        expect(newEditMonster_page_1.default.thiefIcon.isDisplayed()).toBe(true, 'Thief icon is not displayed');
        expect(newEditMonster_page_1.default.mageRadio.isDisplayed()).toBe(true, 'Mage radio is not displayed');
        expect(newEditMonster_page_1.default.mageIcon.isDisplayed()).toBe(true, 'Mage icon is not displayed');
        expect(newEditMonster_page_1.default.descriptionLabelText.isDisplayed()).toBe(true, 'Description label text is not displayed');
        expect(newEditMonster_page_1.default.descriptionField.isDisplayed()).toBe(true, 'Description field is not displayed');
        expect(newEditMonster_page_1.default.nameRequiredErrorText.isDisplayed()).toBe(false, 'Name required error text is not displayed');
        expect(newEditMonster_page_1.default.decsriptionRequiredErrorText.isDisplayed()).toBe(false, 'Decsription required error text is not displayed');
        expect(newEditMonster_page_1.default.roleLabelGroup.getText()).toContain('Soldier', 'Soldier label is not correct');
        expect(newEditMonster_page_1.default.roleLabelGroup.getText()).toContain('Medic', 'Medic label is not correct');
        expect(newEditMonster_page_1.default.roleLabelGroup.getText()).toContain('Shield', 'Shield label is not correct');
        expect(newEditMonster_page_1.default.roleLabelGroup.getText()).toContain('Thief', 'Thief label is not correct');
        expect(newEditMonster_page_1.default.roleLabelGroup.getText()).toContain('Mage', 'Mage label is not correct');
        // assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Mage', 'Mage label is not correct');
    });
});
