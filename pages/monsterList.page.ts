export class MonsterListPage {

    constructor() {}

    get monsterCountText(): any {
      return $('app-monsters > div > div.col-md-5 > app-monster-list > p');
    }
    /**
     *
     * @param {number} row
     * Start at 1
     */
    monsterItemContainer(row: number): any {
      return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a');
    }

    get monsterItemContainerList(): any[] {
      return $$('app-monster-list > div:nth-child(4) > div > app-monster-item > a');
    }

    /**
     *
     * @param {number} row
     * starts at 1
     */
    monsterName(row: number): any {
      return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > h4');
    }

    monsterDescription(row: number): any {
      return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > p');
    }

    monsterIcon(row: number): any {
      return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > span.role');
    }
    favoriteIcon(row: number): any {
      return $(
        'app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' +
          row +
          ') > a > span.hearted'
      );
    }
  }

  export default new MonsterListPage();
