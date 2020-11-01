import { Head } from "../src";

describe("Tool functions", () => {
  it("Head operation numbers", () => {
    expect(Head([100, 2, 6])).toEqual(100);
  });

  it("Head operation", () => {
    expect(Head(["show me", "hide me", "extra"])).toMatch("show me");
  });

  it("Head operation with objects", () => {
    expect(Head([{ name: "Totito" }, { name: "Anacardo" }])).toMatchObject({
      name: "Totito",
    });
  });

  it("Head operation with empty array", () => {
    expect(Head([])).toBeUndefined();
  });
});
