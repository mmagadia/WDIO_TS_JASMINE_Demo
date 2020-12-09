export class NavPage {

  constructor () {}

  get brand(): any {
    return $('.navbar-brand');
  }

  get monsterNavItem(): any {
    return $('nav > div > div.collapse.navbar-collapse > ul > li > a');
  }

  // Only available when logged in
  get burgerMenu(): any {
    return $('.dropdown-toggle');
  }

  get supportLink(): any {
    return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > a');
  }

  get logoutLink(): any {
    return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(2) > a');
  }
}

export default new NavPage();
