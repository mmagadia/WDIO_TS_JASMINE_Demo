"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterListPage = void 0;
var MonsterListPage = /** @class */ (function () {
    function MonsterListPage() {
    }
    Object.defineProperty(MonsterListPage.prototype, "monsterCountText", {
        get: function () {
            return $('app-monsters > div > div.col-md-5 > app-monster-list > p');
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param {number} row
     * Start at 1
     */
    MonsterListPage.prototype.monsterItemContainer = function (row) {
        return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a');
    };
    Object.defineProperty(MonsterListPage.prototype, "monsterItemContainerList", {
        get: function () {
            return $$('app-monster-list > div:nth-child(4) > div > app-monster-item > a');
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param {number} row
     * starts at 1
     */
    MonsterListPage.prototype.monsterName = function (row) {
        return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > h4');
    };
    MonsterListPage.prototype.monsterDescription = function (row) {
        return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > p');
    };
    MonsterListPage.prototype.monsterIcon = function (row) {
        return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > span.role');
    };
    MonsterListPage.prototype.favoriteIcon = function (row) {
        return $('app-monsters > div > div.col-md-5 > app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' +
            row +
            ') > a > span.hearted');
    };
    return MonsterListPage;
}());
exports.MonsterListPage = MonsterListPage;
exports.default = new MonsterListPage();
