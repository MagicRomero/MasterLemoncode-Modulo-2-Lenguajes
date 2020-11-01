export default class SlotMachine {
  #coins: number = 0;
  slots: number;

  onSuccessCallback: CallableFunction;
  onFailCallback: CallableFunction;

  constructor(
    slots: number = 3,
    onSuccess: CallableFunction = (): string =>
      `Congrats! you won ${this.#coins} coins`,
    onFail: CallableFunction = (results: boolean[]): object => ({
      results,
      message: `Good luck the next time!`,
    })
  ) {
    this.slots = slots;
    this.onSuccessCallback = onSuccess;
    this.onFailCallback = onFail;
  }

  get coins() {
    return this.#coins;
  }

  set coins(num: number) {
    if (Math.abs(num) > 1) {
      throw new Error(
        "You cannot set more than one coin at time in this machine"
      );
    }

    this.#coins = num;
  }

  play() {
    this._addCoin();

    let results = [];

    for (let index = 0; index < this.slots; index++) {
      results.push(this._generateSlotResult());
    }

    if (this._isSuccessFullGame(results)) {
      this._resetCoins();

      return this.onSuccessCallback(results);
    } else {
      return this.onFailCallback(results);
    }
  }

  private _addCoin() {
    this.coins++;
  }

  private _resetCoins() {
    this.coins = 0;
  }

  private _generateSlotResult(): boolean {
    return Math.random() >= this._calcProbabilityBasedOnSlots();
  }

  private _isSuccessFullGame(results: boolean[]): boolean {
    return (
      results.filter((result) => Boolean(result)).length === results.length
    );
  }

  private _calcProbabilityBasedOnSlots() {
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
