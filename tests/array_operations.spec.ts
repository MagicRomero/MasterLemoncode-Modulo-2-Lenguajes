import { Head, Tail, Init, Last } from "../src";

describe("Head function", () => {
  it("Head operation numbers", () => {
    const target = [100, 2, 6];

    expect(Head(target)).toEqual(100);
    expect(target).toEqual(target); //Test inmutability
  });

  it("Head operation with strings", () => {
    const target = ["show me", "hide me", "extra"];

    expect(Head(target)).toMatch("show me");
    expect(target).toEqual(target);
  });

  it("Head operation with objects", () => {
    const target = [{ name: "Totito" }, { name: "Anacardo" }];

    expect(Head(target)).toMatchObject({
      name: "Totito",
    });
    expect(target).toEqual(target);
  });

  it("Head operation with empty array", () => {
    expect(Head([])).toBeUndefined();
  });
});

describe("Tail function", () => {
  it("Tail operation with numbers", () => {
    const target = [1, 2, 10];

    expect(Tail(target)).toEqual([2, 10]);
    expect(target).toEqual(target);
  });

  it("Tail operation with strings", () => {
    const target = ["hide me", "just in the middle", "show me"];

    expect(Tail(target)).toEqual(["just in the middle", "show me"]);
    expect(target).toEqual(target);
  });

  it("Tail operation with objects", () => {
    const target = [{ price: 50 }, { price: 30 }, { price: 999 }];

    expect(Tail(target)).toEqual([{ price: 30 }, { price: 999 }]);
    expect(target).toEqual(target);
  });

  it("Tail operation with empty array", () => {
    expect(Tail([])).toHaveLength(0);
  });
});

describe("Init function", () => {
  it("Init operation with numbers", () => {
    const target = [1, 2, 10];

    expect(Init(target)).toEqual([1, 2]);
    expect(target).toEqual(target);
  });

  it("Init operation with strings", () => {
    const target = ["hide me", "just in the middle", "show me"];

    expect(Init(target)).toEqual(["hide me", "just in the middle"]);
    expect(target).toEqual(target);
  });

  it("Init operation with objects", () => {
    const target = [{ price: 50 }, { price: 30 }, { price: 999 }];

    expect(Init(target)).toEqual([{ price: 50 }, { price: 30 }]);
    expect(target).toEqual(target);
  });

  it("Init operation with empty array", () => {
    expect(Init([])).toHaveLength(0);
  });
});

describe("Last function", () => {
  it("Last operation with numbers", () => {
    const target = [1, 2, 10];

    expect(Last(target)).toEqual(10);
    expect(target).toEqual(target);
  });

  it("Last operation with strings", () => {
    const target = ["hide me", "just in the middle", "show me"];

    expect(Last(target)).toMatch("show me");
    expect(target).toEqual(target);
  });

  it("Last operation with objects", () => {
    const target = [{ price: 50 }, { price: 30 }, { price: 999 }];

    expect(Last(target)).toMatchObject({ price: 999 });
    expect(target).toEqual(target);
  });

  it("Last operation with empty array", () => {
    expect(Last([])).toBeUndefined();
  });
});
