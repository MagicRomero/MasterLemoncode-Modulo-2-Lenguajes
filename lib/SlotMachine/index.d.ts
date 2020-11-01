export default class SlotMachine {
    #private;
    slots: number;
    onSuccessCallback: CallableFunction;
    onFailCallback: CallableFunction;
    constructor(slots?: number, onSuccess?: CallableFunction, onFail?: CallableFunction);
    get coins(): number;
    set coins(num: number);
    play(): any;
    private _addCoin;
    private _resetCoins;
    private _generateSlotResult;
    private _isSuccessfullGame;
    private _calcProbabilityBasedOnSlots;
}
