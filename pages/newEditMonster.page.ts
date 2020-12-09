export class NewEditMonsterPage {

    constructor() {}

    get saveButton(): any {
      return $('button=Save');
    }

    get cancelButton(): any {
      return $('button=Cancel');
    }

    get nameLabelText(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > label');
    }

    get nameField(): any {
      return $('#name');
    }

    get favoriteCheckbox(): any {
      return $('#favorite');
    }

    get favoriteLabel(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(3) > div > div > div > label');
    }

    get mosterRoleLabelText(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > label');
    }

    get soldierRadio(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)');
    }

    get soldierIcon(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-sword');
    }

    get medicRadio(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)');
    }

    get medicIcon(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-health');
    }

    get shieldRadio(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)');
    }

    get shieldIcon(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-cracked-shield');
    }

    get thiefRadio(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)');
    }

    get thiefIcon(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-kunai');
    }

    get mageRadio(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)');
    }

    get mageIcon(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-laser-blast');
    }

    get descriptionLabelText(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > label');
    }

    get descriptionField(): any {
      return $('#description');
    }

    get nameRequiredErrorText(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > p');
    }

    get decsriptionRequiredErrorText(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > p');
    }

    get roleLabelGroup(): any {
      return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div');
    }
  }

  export default new NewEditMonsterPage();
