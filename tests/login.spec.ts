// const Jasmine = require ('jasmine');
// import Jasmine = require ('jasmine');
import LoginPage from '../pages/login.page';


describe ('Test Suite: Login', () => {
  beforeAll(() => {
    // Add code here
  });

  beforeEach(() => {
    // Add code here
  });

  afterAll(() => {
    // Add code here
  });

  afterEach(() => {});

  it('should display error when fields are blank', () => {
    LoginPage.open();

    LoginPage.usernameField.click();
    LoginPage.passwordField.click();

    expect(LoginPage.emailErrorText.isDisplayed()).toBe(true, 'Email required error text is not displayed');
    expect(LoginPage.emailErrorText.getText()).toBe('Username is required', 'Email required error text is not correct');

    LoginPage.usernameField.click();

    expect(LoginPage.passwordErrorText.isDisplayed()).toBe(true, 'Password error text is not dipslayed');
    expect(LoginPage.passwordErrorText.getText()).toBe('Password is required', 'Password error text is not correct');
  });

  it('should display error when email is invalid', () => {
    const emails = ['bob', 'bob@', 'bob@bob.'];

    // for (let i = 0; i < emails.length; i++) {
    for (const email of emails) {
      LoginPage.open();
      LoginPage.usernameField.click();
      LoginPage.usernameField.setValue(emails);
      LoginPage.passwordField.click();

      expect(LoginPage.emailErrorText.isDisplayed()).toBe(true, 'Email invalid error text is not displayed');
      expect(
        LoginPage.emailErrorText.getText()).toBe(
        'Username needs to be a valid email',
        'Email format error text is not correct'
      );
    }  
  });

  it('should display error when username or password is invalid', () => {
    const logins = [
      {
        email: 'bob@bob.com',
        password: 'fakepass'
      },
      {
        email: 'fake@bob.com',
        password: 'Test123'
      }
    ];

    // for (let i = 0; i < logins.length; i++) {
    for (const login of logins) {
      LoginPage.open();
      LoginPage.usernameField.setValue(login.email);
      LoginPage.passwordField.click();
      LoginPage.passwordField.setValue(login.password);
      LoginPage.loginButton.click();

      expect(LoginPage.invalidErrorText.isDisplayed()).toBe(true, 'Invalid login text is not displayed');
      expect(
        LoginPage.invalidErrorText.getText()).toBe(
        'Invalid username or password',
        'Invalid login text is not correct'
      );
    }
  });

  it('should login', () => {
    const username = 'bob@bob.com';
    const password = 'Test123';

    LoginPage.open();

    LoginPage.usernameField.setValue(username);
    LoginPage.passwordField.setValue(password);

    expect(LoginPage.loginButton.isClickable()).toBe(true, 'Login button is not enabled');

    LoginPage.loginButton.click();

    expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/mine`, 'Url is not correct');
  });

  it('should not route to mine page when not logged in', () => {
    LoginPage.openURL('/mine');

    expect(browser.getUrl()).toEqual(`${browser.config['baseUrl']}/`, 'App route to mine');
  });

});
