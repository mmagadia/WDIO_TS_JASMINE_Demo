"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Jasmine = require ('jasmine');
// import Jasmine = require ('jasmine');
var login_page_1 = require("../pages/login.page");
describe('Test Suite: Login', function () {
    beforeAll(function () {
        // Add code here
    });
    beforeEach(function () {
        // Add code here
    });
    afterAll(function () {
        // Add code here
    });
    afterEach(function () { });
    it('should display error when fields are blank', function () {
        login_page_1.default.open();
        login_page_1.default.usernameField.click();
        login_page_1.default.passwordField.click();
        expect(login_page_1.default.emailErrorText.isDisplayed()).toBe(true, 'Email required error text is not displayed');
        expect(login_page_1.default.emailErrorText.getText()).toBe('Username is required', 'Email required error text is not correct');
        login_page_1.default.usernameField.click();
        expect(login_page_1.default.passwordErrorText.isDisplayed()).toBe(true, 'Password error text is not dipslayed');
        expect(login_page_1.default.passwordErrorText.getText()).toBe('Password is required', 'Password error text is not correct');
    });
    it('should display error when email is invalid', function () {
        var emails = ['bob', 'bob@', 'bob@bob.'];
        // for (let i = 0; i < emails.length; i++) {
        for (var _i = 0, emails_1 = emails; _i < emails_1.length; _i++) {
            var email = emails_1[_i];
            login_page_1.default.open();
            login_page_1.default.usernameField.click();
            login_page_1.default.usernameField.setValue(emails);
            login_page_1.default.passwordField.click();
            expect(login_page_1.default.emailErrorText.isDisplayed()).toBe(true, 'Email invalid error text is not displayed');
            expect(login_page_1.default.emailErrorText.getText()).toBe('Username needs to be a valid email', 'Email format error text is not correct');
        }
    });
    it('should display error when username or password is invalid', function () {
        var logins = [
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
        for (var _i = 0, logins_1 = logins; _i < logins_1.length; _i++) {
            var login = logins_1[_i];
            login_page_1.default.open();
            login_page_1.default.usernameField.setValue(login.email);
            login_page_1.default.passwordField.click();
            login_page_1.default.passwordField.setValue(login.password);
            login_page_1.default.loginButton.click();
            expect(login_page_1.default.invalidErrorText.isDisplayed()).toBe(true, 'Invalid login text is not displayed');
            expect(login_page_1.default.invalidErrorText.getText()).toBe('Invalid username or password', 'Invalid login text is not correct');
        }
    });
    it('should login', function () {
        var username = 'bob@bob.com';
        var password = 'Test123';
        login_page_1.default.open();
        login_page_1.default.usernameField.setValue(username);
        login_page_1.default.passwordField.setValue(password);
        expect(login_page_1.default.loginButton.isClickable()).toBe(true, 'Login button is not enabled');
        login_page_1.default.loginButton.click();
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/mine", 'Url is not correct');
    });
    it('should not route to mine page when not logged in', function () {
        login_page_1.default.openURL('/mine');
        expect(browser.getUrl()).toEqual(browser.config['baseUrl'] + "/", 'App route to mine');
    });
});
