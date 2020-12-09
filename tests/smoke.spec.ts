import LoginPage from '../pages/login.page';
import NavPage from '../pages/nav.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';
import MonsterCardPage from '../pages/monsterCard.page';
import NewEditMonsterPage from '../pages/newEditMonster.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Smoke', () => {
    beforeAll(() => {
      // Add code here
    });

    beforeEach(() => {
      LoginPage.open();
      // LoginPage.login(username, password);
    });

    afterAll(() => {
      // Add code here
    });

    afterEach(() => {});


    it('should validate static contents on login page', () => {
      expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/`, 'URL is not correct');

      // Test that static elements are displayed
      expect(NavPage.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
      expect(NavPage.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');
      expect(LoginPage.usernameLabel.isDisplayed()).toBe(true, 'Username label is not displayed');
      expect(LoginPage.usernameField.isDisplayed()).toBe(true, 'Username field is not displayed');
      expect(LoginPage.passwordLabel.isDisplayed()).toBe(true, 'Password label is not displayed');
      expect(LoginPage.passwordField.isDisplayed()).toBe(true, 'Password field is not displayed');

      expect(LoginPage.emailErrorText.isDisplayed()).toBe(false, 'Email error text is displayed');
      expect(LoginPage.passwordErrorText.isDisplayed()).toBe(false, 'Password error text is displayed');

      expect(LoginPage.loginButton.isDisplayed()).toBe(true, 'Login button is not displayed');

      // Test that static element texts are correct
      expect(NavPage.brand.getText()).toBe('Monster Dream Team', 'Brand text is not correct');
      expect(NavPage.monsterNavItem.getText()).toBe('My Monster Team', 'Monster nav item text is not correct');

      expect(LoginPage.usernameLabel.getText()).toBe('Username', 'Username text is not correct');
      expect(LoginPage.passwordLabel.getText()).toBe('Password', 'Password text is not correct');

      expect(LoginPage.loginButton.getText()).toBe('Login', 'Login button text is not correct');

      // Test default element state
      expect(LoginPage.loginButton.isClickable()).toBe(false, 'Login button is clickable');
      expect(LoginPage.usernameField.getValue()).toBe('', 'Username field is not blank');
      expect(LoginPage.passwordField.getValue()).toBe('', 'Password field is not blank');

      expect(
        LoginPage.usernameField.getAttribute('placeholder')).toBe(
        'example@example.com',
        'Username placeholder is not correct'
      );
    });


    it('should validate static contents on nav bar when logged in', () => {
      expect(NavPage.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
      expect(NavPage.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');

      // Login
      LoginPage.login(username, password);
      expect(NavPage.brand.isDisplayed()).toBe(true, 'Brand is not displayed');
      expect(NavPage.monsterNavItem.isDisplayed()).toBe(true, 'MonsterNavItem is not displayed');
      expect(NavPage.burgerMenu.isDisplayed()).toBe(true, 'Burger menu is not displayed');

      // before opening menu
      expect(NavPage.supportLink.isClickable()).toBe(false, 'Support Link is clickable');
      expect(NavPage.logoutLink.isClickable()).toBe(false, 'Logout Link is clickable');

      // after opening menu
      NavPage.burgerMenu.click();

      expect(NavPage.supportLink.isClickable()).toBe(true, 'Support Link is not clickable');
      expect(NavPage.logoutLink.isClickable()).toBe(true, 'Logout Link is not clickable');
    });

    it('should validate static buttons area buttons', () => {
      LoginPage.login(username, password);

      //  assert.equal(ButtonsAreaPage..isDisplayed(), true, ' button is not displayed');
      expect(ButtonsAreaPage.newMonsterButton.isDisplayed()).toBe(true, 'New Monster button is not displayed');
      expect(ButtonsAreaPage.randomMonsterButton.isDisplayed()).toBe(true, 'Random Monster button is not displayed');
      expect(ButtonsAreaPage.removeMonsterButton.isDisplayed()).toBe(true, ' Remove monster button is not displayed');
      expect(ButtonsAreaPage.unfavoriteMonsterButton.isDisplayed()).toBe(true, 'Unfavorite button is not displayed');
      expect(
        ButtonsAreaPage.createRandomMonsterTeamButton.isDisplayed()).toBe(
        true,
        'Create random monster team button is not displayed'
      );
      expect(ButtonsAreaPage.sortMonsterButton.isDisplayed()).toBe(true, 'Sort monster button is not displayed');

      expect(ButtonsAreaPage.newMonsterButton.getText()).toBe('New Monster', 'New Monster button text is not correct');
      expect(
        ButtonsAreaPage.randomMonsterButton.getText()).toBe(
        'Random Monster',
        'Random Monster button text is not correct'
      );
      expect(
        ButtonsAreaPage.removeMonsterButton.getText()).toBe(
        'Remove All Monsters',
        ' Remove monster button text is not correct'
      );
      expect(
        ButtonsAreaPage.unfavoriteMonsterButton.getText()).toBe(
        'Unfavorite All',
        'Unfavorite button text is not correct'
      );
      expect(
        ButtonsAreaPage.createRandomMonsterTeamButton.getText()).toBe(
        'Create Random Monster Team',
        'Create random monster team button text is not correct'
      );
      expect(
        ButtonsAreaPage.sortMonsterButton.getText()).toBe(
        'Sort Monsters',
        'Sort monster button text is not correct'
      );
    });

    it('should display default monster list', () => {
      LoginPage.login(username, password);

      // assert.equal(MonsterListPage..getText(), '', '');
      expect(
        MonsterListPage.monsterCountText.getText()).toBe(
        'Number of monsters: 2',
        'Monster count text is not correct'
      );

      // Monster row 1
      expect(MonsterListPage.monsterName(1).getText()).toBe('Vampire', 'Monster name 1 is not correct');

      expect(
        MonsterListPage.monsterDescription(1).getText()).toBe(
        'He just wants your blood.',
        'Monster Decription row 1 is not correct'
      );
      expect(
        MonsterListPage.monsterIcon(1).getAttribute('class')).toBe(
        'glyphicon ra ra-sword pull-right role',
        'Monster icon row 1 is not correct'
      );
      expect(
        MonsterListPage.favoriteIcon(1).getAttribute('class')).toBe(
        'glyphicon glyphicon-heart pull-right hearted',
        'Monster favorite icon row 1 is not correct'
      );

      // Monster row 2
      expect(MonsterListPage.monsterName(2).getText()).toBe('Swamp Creature', 'Monster name row 2 is not correct');

      expect(
        MonsterListPage.monsterDescription(2).getText()).toBe(
        'He awaits you in the swamp.',
        'Monster Decription row 2 is not correct'
      );
      expect(
        MonsterListPage.monsterIcon(2).getAttribute('class')).toBe(
        'glyphicon ra ra-health pull-right role',
        'Monster icon row 2 is not correct'
      );
      expect(MonsterListPage.favoriteIcon(2).isDisplayed()).toBe(false, 'Monster favorite icon row 2 is displayed');
    });

    it('should validate default contents in monster card', () => {
      LoginPage.login(username, password);

      expect(MonsterCardPage.selectMonstertext.isDisplayed()).toBe(true, 'Select a monster text is not displayed');
      expect(
        MonsterCardPage.selectMonstertext.getText()).toBe(
        'Select a Monster to edit.',
        'Select a monster text is not displayed'
      );

      MonsterListPage.monsterItemContainer(1).click();

      expect(MonsterCardPage.selectMonstertext.isDisplayed()).toBe(false, 'Select a monster text is still displayed');
      expect(MonsterCardPage.monsterCard.isDisplayed()).toBe(true, ' Monster Card is not displayed');
      expect(MonsterCardPage.monsterCardName.getText()).toBe('Vampire', ' Monster name is not displayed');
      expect(
        MonsterCardPage.monsterDescription.getText()).toBe(
        'He just wants your blood.',
        'Monster Description is not correct'
      );
      expect(
        MonsterCardPage.monsterIcon.getAttribute('class')).toBe(
        'glyphicon ra ra-sword pull-right role',
        'icon is not correct'
      );
      expect(
        MonsterCardPage.monsterfavoriteIcon.getAttribute('class')).toBe(
        'glyphicon glyphicon-heart pull-right hearted',
        'monster favorite is not correct'
      );

      expect(MonsterCardPage.manageMonsterMenu.isDisplayed()).toBe(true, 'Manage monster menu is not displayed');

      MonsterCardPage.manageMonsterMenu.click();

      expect(MonsterCardPage.editMonster.isDisplayed()).toBe(true, 'Edit monster is not displayed');
      expect(MonsterCardPage.deleteMonster.isDisplayed()).toBe(true, 'Delete monster is not displayed');
    });

    it('should validate static content for new or edit form', () => {
      LoginPage.login(username, password);

      ButtonsAreaPage.newMonsterButton.click();

      expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/mine/new`, 'url is not correct');

      expect(NewEditMonsterPage.saveButton.isDisplayed()).toBe(true, 'Save button is not displayed');
      expect(NewEditMonsterPage.saveButton.isEnabled()).toBe(false, 'Save button is enabled');

      expect(NewEditMonsterPage.cancelButton.isDisplayed()).toBe(true, 'Cancel button is not displayed');
      expect(NewEditMonsterPage.cancelButton.isEnabled()).toBe(true, 'Cancel button is not enabled');

      expect(NewEditMonsterPage.nameLabelText.isDisplayed()).toBe(true, 'Name label text is not correct');
      expect(NewEditMonsterPage.nameField.isDisplayed()).toBe(true, 'Name field is not displayed');

      expect(NewEditMonsterPage.favoriteCheckbox.isDisplayed()).toBe(true, 'is not displayed');
      expect(NewEditMonsterPage.favoriteLabel.isDisplayed()).toBe(true, 'is not displayed');
      expect(NewEditMonsterPage.mosterRoleLabelText.isDisplayed()).toBe(true, 'Monster Role text is not displayed');

      expect(NewEditMonsterPage.soldierRadio.isDisplayed()).toBe(true, 'Soldier radio button is not displayed');
      expect(NewEditMonsterPage.soldierIcon.isDisplayed()).toBe(true, 'Soldier icon is not displayed');
      expect(NewEditMonsterPage.medicRadio.isDisplayed()).toBe(true, 'Medic radio is not displayed');
      expect(NewEditMonsterPage.medicIcon.isDisplayed()).toBe(true, 'Medic icon is not displayed');
      expect(NewEditMonsterPage.shieldRadio.isDisplayed()).toBe(true, 'Shield radio is not displayed');
      expect(NewEditMonsterPage.shieldIcon.isDisplayed()).toBe(true, 'Shield icon is not displayed');
      expect(NewEditMonsterPage.thiefRadio.isDisplayed()).toBe(true, 'Thief radio is not displayed');
      expect(NewEditMonsterPage.thiefIcon.isDisplayed()).toBe(true, 'Thief icon is not displayed');
      expect(NewEditMonsterPage.mageRadio.isDisplayed()).toBe(true, 'Mage radio is not displayed');
      expect(NewEditMonsterPage.mageIcon.isDisplayed()).toBe(true, 'Mage icon is not displayed');
      expect(
        NewEditMonsterPage.descriptionLabelText.isDisplayed()).toBe(
        true,
        'Description label text is not displayed'
      );
      expect(NewEditMonsterPage.descriptionField.isDisplayed()).toBe(true, 'Description field is not displayed');
      expect(
        NewEditMonsterPage.nameRequiredErrorText.isDisplayed()).toBe(
        false,
        'Name required error text is not displayed'
      );
      expect(
        NewEditMonsterPage.decsriptionRequiredErrorText.isDisplayed()).toBe(
        false,
        'Decsription required error text is not displayed'
      );

      expect(NewEditMonsterPage.roleLabelGroup.getText()).toContain('Soldier', 'Soldier label is not correct');
      expect(NewEditMonsterPage.roleLabelGroup.getText()).toContain('Medic', 'Medic label is not correct');
      expect(NewEditMonsterPage.roleLabelGroup.getText()).toContain('Shield', 'Shield label is not correct');
      expect(NewEditMonsterPage.roleLabelGroup.getText()).toContain('Thief', 'Thief label is not correct');
      expect(NewEditMonsterPage.roleLabelGroup.getText()).toContain('Mage', 'Mage label is not correct');
      // assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Mage', 'Mage label is not correct');
    });
  });

