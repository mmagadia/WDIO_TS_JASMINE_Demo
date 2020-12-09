"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsAreaPage = void 0;
var ButtonsAreaPage = /** @class */ (function () {
    function ButtonsAreaPage() {
    }
    Object.defineProperty(ButtonsAreaPage.prototype, "newMonsterButton", {
        get: function () {
            return $('button=New Monster');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonsAreaPage.prototype, "randomMonsterButton", {
        get: function () {
            return $('button=Random Monster');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonsAreaPage.prototype, "removeMonsterButton", {
        get: function () {
            return $('button=Remove All Monsters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonsAreaPage.prototype, "unfavoriteMonsterButton", {
        get: function () {
            return $('button=Unfavorite All');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonsAreaPage.prototype, "createRandomMonsterTeamButton", {
        get: function () {
            return $('button=Create Random Monster Team');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonsAreaPage.prototype, "sortMonsterButton", {
        get: function () {
            return $('button=Sort Monsters');
        },
        enumerable: false,
        configurable: true
    });
    return ButtonsAreaPage;
}());
exports.ButtonsAreaPage = ButtonsAreaPage;
exports.default = new ButtonsAreaPage();
