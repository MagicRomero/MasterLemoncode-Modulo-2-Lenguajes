import SlotMachine from "../../src/SlotMachine";

describe("Slot machine Consumer", () => {
  describe("Slot machine functionality", () => {
    it("Slot machine multiple plays with failed games", () => {
      const defaultFailedReturn = {
        results: [false, false, false],
        message: "Good luck the next time!",
        coins: 0,
      };

      const machine = new SlotMachine();

      const spy = jest
        .spyOn(machine as any, "_generateSlotResult")
        .mockImplementation(() => false);

      expect(machine.play()).toEqual(defaultFailedReturn);
      expect(machine.coins).toEqual(1);

      expect(machine.play()).toEqual(defaultFailedReturn);
      expect(machine.coins).toEqual(2);

      expect(machine.play()).toEqual(defaultFailedReturn);
      expect(machine.coins).toEqual(3);

      spy.mockRestore();
    });

    it("Slot machine set coins throw error when trying to add more than one coin", () => {
      const machine = new SlotMachine();
      const errorMessage =
        "You cannot set more than one coin at time in this machine";

      expect(() => (machine.coins = 2)).toThrowError(errorMessage);
      expect(() => (machine.coins = 3)).toThrowError(errorMessage);
      expect(() => (machine.coins = 5)).toThrowError(errorMessage);
      expect(() => (machine.coins = 30)).toThrowError(errorMessage);

      expect(() => (machine.coins = 1)).not.toThrow();
    });

    it("Slot machine multiple games with success", () => {
      const machine = new SlotMachine();

      let spy = jest
        .spyOn(machine as any, "_generateSlotResult")
        .mockImplementation(() => true);

      expect(machine.play()).toMatchObject({
        results: [true, true, true],
        message: `Congrats! you won 1 coins`,
        coins: 1,
      });

      expect(machine.coins).toEqual(0); //coins should be reset

      spy = jest
        .spyOn(machine as any, "_generateSlotResult")
        .mockImplementation(() => false);

      machine.play();
      machine.play();
      machine.play();
      machine.play();

      spy = jest
        .spyOn(machine as any, "_generateSlotResult")
        .mockImplementation(() => true);

      expect(machine.play()).toMatchObject({
        results: [true, true, true],
        message: `Congrats! you won 5 coins`,
        coins: 5,
      });

      expect(machine.coins).toEqual(0);

      spy.mockRestore();
    });

    it("Slot machine 4 slots", () => {
      const machine = new SlotMachine(4);

      const gamePlayed = machine.play();

      expect(gamePlayed).toHaveProperty("results");
      expect(Array.isArray(gamePlayed.results)).toBeTruthy();
      expect(gamePlayed.results).toHaveLength(4);
    });

    it("Slot machine 5 slots", () => {
      const machine = new SlotMachine(5);

      const gamePlayed = machine.play();

      expect(gamePlayed).toHaveProperty("results");
      expect(Array.isArray(gamePlayed.results)).toBeTruthy();
      expect(gamePlayed.results).toHaveLength(5);
    });
  });
});
