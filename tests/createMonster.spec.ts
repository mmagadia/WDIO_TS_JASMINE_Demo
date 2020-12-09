import LoginPage from '../pages/login.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import CreateMonsterPage from '../pages/newEditMonster.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Create Monster', () => {
    beforeAll(() => {
      // Add code here
    });

    beforeEach(() => {
      LoginPage.open();
      LoginPage.login(username, password);
    });

    afterAll(() => {
      // Add code here
    });

    afterEach(() => {});


    it('should create new monster', () => {
      const row = 3;
      const name = 'Nemesis';
      const description = 'The Pursuer or the Chaser';

      ButtonsAreaPage.newMonsterButton.click();
      CreateMonsterPage.nameField.setValue(name);
      CreateMonsterPage.favoriteCheckbox.click();
      CreateMonsterPage.thiefRadio.click();
      CreateMonsterPage.descriptionField.setValue(description);
      CreateMonsterPage.saveButton.click();

      expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/mine`, 'url is not correct');
      expect(MonsterListPage.monsterCountText.getText()).toBe(`Number of monsters: ${row}`, 'Monster count text is not correct'
    );
      expect(MonsterListPage.monsterItemContainer(row).isDisplayed()).toBe(true, 'Monster Item does not exist');
      expect(MonsterListPage.monsterName(row).getText()).toBe(name, 'Monster name is not correct');
      expect(MonsterListPage.monsterDescription(row).getText()).toBe(description, 'Monster Description is not correct');
      expect(
      MonsterListPage.monsterIcon(row).getAttribute('class')).toBe(
      'glyphicon ra ra-kunai pull-right role',
      'Monster icon is not correct'
    );
      expect(MonsterListPage.favoriteIcon(row).isDisplayed()).toBe(true, 'Favorite icon is missing.');
    });

    it('should display error message when mandatory fields are empty', () => {
      ButtonsAreaPage.newMonsterButton.click();
      CreateMonsterPage.nameField.click();
      CreateMonsterPage.descriptionField.click();

      expect(CreateMonsterPage.nameRequiredErrorText.isDisplayed()).toBe(true, 'name error text is not displayed');
      expect(
        CreateMonsterPage.nameRequiredErrorText.getText()).toBe(
        'Name is required',
        'name error text is not correct'
      );

      CreateMonsterPage.nameField.click();
      expect(
        CreateMonsterPage.decsriptionRequiredErrorText.isDisplayed()).toBe(
        true,
        'Description error text is not doisplayed'
      );
      expect(
        CreateMonsterPage.decsriptionRequiredErrorText.getText()).toBe(
        'Description is required',
        'Description error text is not correct'
      );

      expect(CreateMonsterPage.saveButton.isEnabled()).toBe(false, 'Save button is enabled');
    });
  });

