"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterCardPage = void 0;
var MonsterCardPage = /** @class */ (function () {
    function MonsterCardPage() {
    }
    Object.defineProperty(MonsterCardPage.prototype, "selectMonstertext", {
        get: function () {
            return $('app-monsters > div > div.col-md-7.rightPanel > app-monster-start > h3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "monsterCard", {
        get: function () {
            return $('.monsterDetail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "monsterCardName", {
        get: function () {
            return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-8 > h1');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "monsterDescription", {
        get: function () {
            return $('app-monster-detail > div.monsterDetail > div:nth-child(2) > div');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "monsterIcon", {
        get: function () {
            return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "monsterfavoriteIcon", {
        get: function () {
            return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.hearted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "manageMonsterMenu", {
        get: function () {
            return $('app-monster-detail > div.row > div > div > button');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "editMonster", {
        get: function () {
            return $('app-monster-detail > div.row > div > div > ul > li:nth-child(1) > a');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "deleteMonster", {
        get: function () {
            return $('app-monster-detail > div.row > div > div > ul > li:nth-child(2) > a');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "deleteMonsterModal", {
        get: function () {
            return $('#mat-dialog-0');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "deleteMonsterModalText", {
        get: function () {
            return $('#mat-dialog-0 > app-pop-up > p');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "deleteMonsterModalYes", {
        get: function () {
            return $('#mat-dialog-0 > app-pop-up > div > div:nth-child(1) > button');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonsterCardPage.prototype, "deleteMonsterModalNo", {
        get: function () {
            return $('#mat-dialog-0 > app-pop-up > div > div:nth-child(2) > button');
        },
        enumerable: false,
        configurable: true
    });
    return MonsterCardPage;
}());
exports.MonsterCardPage = MonsterCardPage;
exports.default = new MonsterCardPage();
