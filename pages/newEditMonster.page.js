"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewEditMonsterPage = void 0;
var NewEditMonsterPage = /** @class */ (function () {
    function NewEditMonsterPage() {
    }
    Object.defineProperty(NewEditMonsterPage.prototype, "saveButton", {
        get: function () {
            return $('button=Save');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "cancelButton", {
        get: function () {
            return $('button=Cancel');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "nameLabelText", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "nameField", {
        get: function () {
            return $('#name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "favoriteCheckbox", {
        get: function () {
            return $('#favorite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "favoriteLabel", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(3) > div > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "mosterRoleLabelText", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "soldierRadio", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "soldierIcon", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-sword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "medicRadio", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "medicIcon", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-health');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "shieldRadio", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "shieldIcon", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-cracked-shield');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "thiefRadio", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "thiefIcon", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-kunai');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "mageRadio", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "mageIcon", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-laser-blast');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "descriptionLabelText", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "descriptionField", {
        get: function () {
            return $('#description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "nameRequiredErrorText", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > p');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "decsriptionRequiredErrorText", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > p');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewEditMonsterPage.prototype, "roleLabelGroup", {
        get: function () {
            return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div');
        },
        enumerable: false,
        configurable: true
    });
    return NewEditMonsterPage;
}());
exports.NewEditMonsterPage = NewEditMonsterPage;
exports.default = new NewEditMonsterPage();
