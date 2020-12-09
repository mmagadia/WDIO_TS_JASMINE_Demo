import LoginPage from '../pages/login.page';
import MonsterCardPage from '../pages/monsterCard.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Delete Monster', () => {
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


    it('should delete a monster', () => {
      MonsterListPage.monsterItemContainer(1).click();

      MonsterCardPage.manageMonsterMenu.click();

      MonsterCardPage.deleteMonster.click();

      browser.pause(3000);

      expect(MonsterCardPage.deleteMonsterModal.isDisplayed()).toBe(true, 'Delete modal is not displayed');
      expect(
        MonsterCardPage.deleteMonsterModalText.getText()).toBe(
        'Are you sure you want to delete this monster?',
        'text is not correct'
      );

      MonsterCardPage.deleteMonsterModalYes.click();

      browser.pause(3000);

      expect(MonsterListPage.monsterItemContainer(1).isDisplayed()).toBe(true, 'item 1 does not exist');
      expect(MonsterListPage.monsterName(1).getText() !== 'Vampire').toBe(true, 'Vampire still exist');
    });

    it('should not delete a monster', () => {
      MonsterListPage.monsterItemContainer(1).click();

      MonsterCardPage.manageMonsterMenu.click();

      MonsterCardPage.deleteMonster.click();

      MonsterCardPage.deleteMonsterModalNo.click();

      expect(MonsterListPage.monsterItemContainer(2).isDisplayed()).toBe(true, 'item 2 does not exist');
      expect(MonsterListPage.monsterName(1).getText() === 'Vampire').toBe(true, 'Vampire does not exist');
    });
});
