"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavPage = void 0;
var NavPage = /** @class */ (function () {
    function NavPage() {
    }
    Object.defineProperty(NavPage.prototype, "brand", {
        get: function () {
            return $('.navbar-brand');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavPage.prototype, "monsterNavItem", {
        get: function () {
            return $('nav > div > div.collapse.navbar-collapse > ul > li > a');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavPage.prototype, "burgerMenu", {
        // Only available when logged in
        get: function () {
            return $('.dropdown-toggle');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavPage.prototype, "supportLink", {
        get: function () {
            return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > a');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavPage.prototype, "logoutLink", {
        get: function () {
            return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(2) > a');
        },
        enumerable: false,
        configurable: true
    });
    return NavPage;
}());
exports.NavPage = NavPage;
exports.default = new NavPage();
