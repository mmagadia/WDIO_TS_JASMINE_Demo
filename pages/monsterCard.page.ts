export class MonsterCardPage {

    constructor() {}

    get selectMonstertext(): any {
      return $('app-monsters > div > div.col-md-7.rightPanel > app-monster-start > h3');
    }
    get monsterCard(): any {
      return $('.monsterDetail');
    }

    get monsterCardName(): any {
      return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-8 > h1');
    }

    get monsterDescription(): any {
      return $('app-monster-detail > div.monsterDetail > div:nth-child(2) > div');
    }

    get monsterIcon(): any {
      return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.role');
    }

    get monsterfavoriteIcon(): any {
      return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.hearted');
    }

    get manageMonsterMenu(): any {
      return $('app-monster-detail > div.row > div > div > button');
    }

    get editMonster(): any {
      return $('app-monster-detail > div.row > div > div > ul > li:nth-child(1) > a');
    }

   get deleteMonster(): any {
      return $('app-monster-detail > div.row > div > div > ul > li:nth-child(2) > a');
    }

    get deleteMonsterModal(): any {
      return $('#mat-dialog-0');
    }

    get deleteMonsterModalText(): any {
      return $('#mat-dialog-0 > app-pop-up > p');
    }

    get deleteMonsterModalYes(): any {
      return $('#mat-dialog-0 > app-pop-up > div > div:nth-child(1) > button');
    }

    get deleteMonsterModalNo(): any {
      return $('#mat-dialog-0 > app-pop-up > div > div:nth-child(2) > button');
    }
  }

  export default new MonsterCardPage();
