import LoginPage from '../pages/login.page';
import ButtonsAreaPage from '../pages/buttonsArea.page';
import MonsterListPage from '../pages/monsterList.page';
import MonsterCardPage from '../pages/monsterCard.page';
import NewEditMonsterPage from '../pages/newEditMonster.page';

const username = 'bob@bob.com';
const password = 'Test123';


describe('Test Suite: Unfavorite all monster', () => {
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


    it('should unfavorite all', () => {
      ButtonsAreaPage.createRandomMonsterTeamButton.click();

      for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
        MonsterListPage.monsterItemContainer(i).click();
        MonsterCardPage.manageMonsterMenu.click();
        MonsterCardPage.editMonster.click();
        NewEditMonsterPage.favoriteCheckbox.click();
        NewEditMonsterPage.saveButton.click();
      }

      for (let j = 1; j <= MonsterListPage.monsterItemContainerList.length; j++) {
        expect(
          MonsterListPage.favoriteIcon(j).getAttribute('class')).toBe(
          'glyphicon glyphicon-heart pull-right hearted',
          'Favorite icon is missing'
        );
      }

      ButtonsAreaPage.unfavoriteMonsterButton.click();

      for (let j = 1; j <= MonsterListPage.monsterItemContainerList.length; j++) {
        expect(MonsterListPage.favoriteIcon(j).isDisplayed()).toBe(false, 'Favorite icon still exist');
      }
    });
});
