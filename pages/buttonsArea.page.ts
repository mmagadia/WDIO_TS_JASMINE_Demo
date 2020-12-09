
export class ButtonsAreaPage {

  constructor() {}


  get newMonsterButton(): any {
    return $('button=New Monster');
  }
  get randomMonsterButton(): any {
    return $('button=Random Monster');
  }
  get removeMonsterButton(): any {
    return $('button=Remove All Monsters');
  }
  get unfavoriteMonsterButton(): any {
    return $('button=Unfavorite All');
  }
  get createRandomMonsterTeamButton(): any {
    return $('button=Create Random Monster Team');
  }
  get sortMonsterButton(): any {
    return $('button=Sort Monsters');
  }
}

export default new ButtonsAreaPage();
