import LoginPage from '../pages/login.page';
import MonsterCardPage from '../pages/monsterCard.page';
import MonsterListPage from '../pages/monsterList.page';
import NewEditMonsterPage from '../pages/newEditMonster.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Edit Monster', () => {
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


    it('should edit a monster', () => {
      const name = 'The Burning Man';
      const description = 'This guy is on fire';

      MonsterListPage.monsterItemContainer(1).click();

      MonsterCardPage.manageMonsterMenu.click();
      MonsterCardPage.editMonster.click();

      expect(browser.getUrl()).toBe(`${browser.config['baseUrl']}/mine/0/edit`, 'Url is not correct');

      NewEditMonsterPage.nameField.setValue(name);
      NewEditMonsterPage.favoriteCheckbox.click();
      NewEditMonsterPage.mageRadio.click();
      NewEditMonsterPage.descriptionField.setValue(description);
      NewEditMonsterPage.saveButton.click();

      expect(MonsterListPage.monsterName(1).getText()).toBe(name, 'monster name is not correct');
      expect(MonsterListPage.monsterDescription(1).getText()).toBe(description, 'Description is not correct');
      expect(
        MonsterListPage.monsterIcon(1).getAttribute('class')).toBe(
        'glyphicon ra ra-laser-blast pull-right role',
        'icon is not correct'
      );
      expect(MonsterListPage.favoriteIcon(1).isDisplayed()).toBe(false, 'monster row 1 is still favorite');

      expect(MonsterCardPage.monsterCardName.getText()).toBe(name, 'monster name is not correct');
      expect(MonsterCardPage.monsterDescription.getText()).toBe(description, 'Description is not correct');
      expect(
        MonsterCardPage.monsterIcon.getAttribute('class')).toBe(
        'glyphicon ra ra-laser-blast pull-right role',
        'icon is not correct'
      );
    });
});
