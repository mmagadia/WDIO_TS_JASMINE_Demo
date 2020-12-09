"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.open = function () {
        return browser.url('');
    };
    Page.prototype.openURL = function (url) {
        return browser.url(url);
    };
    return Page;
}());
exports.default = Page;
