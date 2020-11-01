import SlotMachine from "../../src/SlotMachine";
import { mocked } from "ts-jest/utils";

jest.mock("../../src/SlotMachine");

describe("Slot machine Consumer", () => {
  const MockedSlotMachine = mocked(SlotMachine, true);

  beforeEach(() => {
    MockedSlotMachine.mockClear();
  });

  describe("Slot machine behavior", () => {
    it("Slot machine mock called the constructor", () => {
      const machine = new SlotMachine();

      expect(SlotMachine).toHaveBeenCalledTimes(1);
    });

    it("Slot machine play function with default parameters", () => {
      expect(SlotMachine).not.toHaveBeenCalled();

      const machine = new SlotMachine();

      expect(SlotMachine).toHaveBeenCalledTimes(1);

      machine.play();

      expect(MockedSlotMachine.mock.instances[0].play).toHaveBeenCalled();
    });
  });
});
