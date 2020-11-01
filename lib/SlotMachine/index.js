"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _coins;
Object.defineProperty(exports, "__esModule", { value: true });
class SlotMachine {
    constructor(slots = 3, onSuccess = (results, coins) => ({
        results,
        message: `Congrats! you won ${coins} coins`,
        coins,
    }), onFail = (results) => ({
        results,
        message: "Good luck the next time!",
        coins: 0,
    })) {
        _coins.set(this, 0);
        this.slots = slots;
        this.onSuccessCallback = onSuccess;
        this.onFailCallback = onFail;
    }
    get coins() {
        return __classPrivateFieldGet(this, _coins);
    }
    set coins(num) {
        if (Math.abs(num) > this.coins + 1) {
            throw new Error("You cannot set more than one coin at time in this machine");
        }
        __classPrivateFieldSet(this, _coins, num);
    }
    play() {
        this._addCoin();
        let results = [];
        for (let index = 0; index < this.slots; index++) {
            results.push(this._generateSlotResult());
        }
        if (this._isSuccessfullGame(results)) {
            const price = this.coins;
            this._resetCoins();
            return this.onSuccessCallback(results, price);
        }
        else {
            return this.onFailCallback(results);
        }
    }
    _addCoin() {
        this.coins += 1;
    }
    _resetCoins() {
        this.coins = 0;
    }
    _generateSlotResult() {
        return Math.random() >= this._calcProbabilityBasedOnSlots();
    }
    _isSuccessfullGame(results) {
        return (results.filter((result) => Boolean(result)).length === results.length);
    }
    _calcProbabilityBasedOnSlots() {
        switch (this.slots) {
            case 3:
                return 0.5;
            case 4:
                return 0.44;
            case 5:
                return 0.4;
            default:
                return 0.35;
        }
    }
}
exports.default = SlotMachine;
_coins = new WeakMap();
