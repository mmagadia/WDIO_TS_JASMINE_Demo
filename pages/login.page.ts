import Page from '../pages/page.page';

export class LoginPage extends Page {

    constructor() {
      super();
    }

    get usernameLabel(): any {
        return $('app-login > div > div > form > div:nth-child(1) > div > div > label');
      }

    get usernameField(): any {
      return $('#username');
    }

    get passwordLabel(): any {
      return $('app-login > div > div > form > div:nth-child(2) > div > div > label');
    }

    get passwordField(): any {
      return $('#password');
    }

    get loginButton(): any {
      return $('app-login > div > div > form > div:nth-child(3) > div > button');
    }

    get emailErrorText(): any {
      return $('app-login > div > div > form > div:nth-child(1) > div > div > p');
    }

    get passwordErrorText(): any {
      return $('app-login > div > div > form > div:nth-child(2) > div > div > p');
    }

    get invalidErrorText(): any {
      return $('app-login > div > div > form > div:nth-child(3) > div > p');
    }

    /**
     *
     * @param {String} username
     * @param {String} password
     */
    public login(username: string, password: string): void {
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
      this.loginButton.click();
    }

    // open () {
    //   return super.open();
    // }

    // openURL (url: string) {
    //   const url2 = '/login' + url; // /login/mine
    //   return super.openURL(url2);
    // }
  }

export default new LoginPage();
