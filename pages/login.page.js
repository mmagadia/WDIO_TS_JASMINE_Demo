"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var page_page_1 = require("../pages/page.page");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LoginPage.prototype, "usernameLabel", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(1) > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "usernameField", {
        get: function () {
            return $('#username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "passwordLabel", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(2) > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "passwordField", {
        get: function () {
            return $('#password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "loginButton", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(3) > div > button');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "emailErrorText", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(1) > div > div > p');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "passwordErrorText", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(2) > div > div > p');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "invalidErrorText", {
        get: function () {
            return $('app-login > div > div > form > div:nth-child(3) > div > p');
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param {String} username
     * @param {String} password
     */
    LoginPage.prototype.login = function (username, password) {
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        this.loginButton.click();
    };
    return LoginPage;
}(page_page_1.default));
exports.LoginPage = LoginPage;
exports.default = new LoginPage();
