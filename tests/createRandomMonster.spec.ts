import LoginPage from '../pages/login.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Create Random Monster', () => {
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


    it('should create random monster', () => {
      for (let i = 0; i < 10; i++) {
        ButtonsAreaPage.randomMonsterButton.click();

        const item = MonsterListPage.monsterName(i + 2).getText().length > 0;
        const description = MonsterListPage.monsterDescription(i + 2).getText().length > 0;

        expect(MonsterListPage.monsterItemContainerList.length).toBe(i + 3, 'The number of monsters is not correct');

        expect(item).toBe(true, 'Name is not greater than 0');
        expect(description).toBe(true, 'decsription is not greater than 0');
        expect(MonsterListPage.monsterIcon(i + 2).isDisplayed()).toBe(true, 'icon is missing');
        expect(MonsterListPage.favoriteIcon(i + 2).isDisplayed()).toBe(false, 'random monster is favorite');
      }
    });
});
