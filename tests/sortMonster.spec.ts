import LoginPage from '../pages/login.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Sort Monster', () => {
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


    it('should sort monsters', () => {
      ButtonsAreaPage.createRandomMonsterTeamButton.click();

      ButtonsAreaPage.sortMonsterButton.click();

      const monsters = [];
      let monsterSorted = [];

      for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
        monsters.push(MonsterListPage.monsterName(i).getText());
      }

      monsterSorted = monsters.sort();
      // ('');

      for (let j = 0; j < monsters.length; j++) {
        expect(monsters[j] === monsterSorted[j]).toBe(true, `Row ${j + 1} is not in the correct position`);
        // console.log(`${monsters[j]} : ${monsterSorted[j]}`);
      }
    });
});
