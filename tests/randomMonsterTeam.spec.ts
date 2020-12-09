import LoginPage from '../pages/login.page';
import * as MonsterData from '../data/monster.json';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite: Create Random Monsters', () => {
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
      ButtonsAreaPage.createRandomMonsterTeamButton.click();

      expect(
        MonsterListPage.monsterCountText.getText()).toBe(
        'Number of monsters: 5',
        'Number of monster is not correct'
      );
      expect(MonsterListPage.monsterItemContainerList.length === 5).toBe(true, 'Monster list length is not correct');

      for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
        const monsterName = MonsterListPage.monsterName(i).getText();
        for (let j = 0; j < MonsterData.length; j++) {
          if (monsterName === MonsterData[j].name) {
            console.log(`${monsterName}: ${MonsterData[j].name}`);
            expect(
              MonsterListPage.monsterDescription(i).getText()).toBe(
              MonsterData[j].desc,
              `Decription for row ${monsterName} is not correct`
            );
            expect(
              MonsterListPage.monsterIcon(i).getAttribute('class')).toBe(
              MonsterData[j].icon,
              `icon for row ${monsterName} is not correct`
            );
            break;
          } else if (j === MonsterData.length - 1) {
            expect(false).toBe(true, `Monster with name ${monsterName} was not found.`);
          }
        }
      }
    });
});
