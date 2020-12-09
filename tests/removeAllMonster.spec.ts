import LoginPage from '../pages/login.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Remove All Monster', () => {
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


    it('should remove all monster', () => {
      ButtonsAreaPage.removeMonsterButton.click();

      expect(browser.getAlertText()).toBe('Are you sure you want to remove all monsters?', 'Alert text is not correct');

      browser.acceptAlert();

      expect(MonsterListPage.monsterCountText.getText()).toBe('Number of monsters: 0', 'Count text is not correct');

      expect(MonsterListPage.monsterItemContainerList.length === 0).toBe(true, 'Monster list still exist');

    });

    it('should not remove all monster', () => {
      ButtonsAreaPage.removeMonsterButton.click();

      browser.dismissAlert();

      expect(MonsterListPage.monsterCountText.getText()).toBe('Number of monsters: 2', 'Count text is not correct');

      expect(MonsterListPage.monsterItemContainerList.length === 2).toBe(true, 'Monster list still exist');
    });
});
