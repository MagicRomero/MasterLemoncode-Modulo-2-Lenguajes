import { Head, Tail, Init } from "../src";

describe("Head function", () => {
  it("Head operation numbers", () => {
    expect(Head([100, 2, 6])).toEqual(100);
  });

  it("Head operation with strings", () => {
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

describe("Tail function", () => {
  it("Tail operation with numbers", () => {
    expect(Tail([1, 2, 10])).toEqual([2, 10]);
  });

  it("Tail operation with strings", () => {
    expect(Tail(["hide me", "just in the middle", "show me"])).toEqual([
      "just in the middle",
      "show me",
    ]);
  });

  it("Tail operation with objects", () => {
    expect(Tail([{ price: 50 }, { price: 30 }, { price: 999 }])).toEqual([
      { price: 30 },
      { price: 999 },
    ]);
  });

  it("Tail operation with empty array", () => {
    expect(Tail([])).toHaveLength(0);
  });
});

describe("Init function", () => {
  it("Init operation with numbers", () => {
    expect(Init([1, 2, 10])).toEqual([1, 2]);
  });

  it("Init operation with strings", () => {
    expect(Init(["hide me", "just in the middle", "show me"])).toEqual([
      "hide me",
      "just in the middle",
    ]);
  });

  it("Init operation with objects", () => {
    expect(Init([{ price: 50 }, { price: 30 }, { price: 999 }])).toEqual([
      { price: 50 },
      { price: 30 },
    ]);
  });

  it("Init operation with empty array", () => {
    expect(Init([])).toHaveLength(0);
  });
});
