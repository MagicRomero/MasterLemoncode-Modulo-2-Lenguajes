import { Operations } from "../../src";

const { Concat } = Operations;

describe("Concat operations", () => {
  it("Concat with 2 arrays", () => {
    const source = ["first", "second"];

    expect(Concat(source, ["third", "four"])).toEqual([
      "first",
      "second",
      "third",
      "four",
    ]);
    expect(source).toEqual(source);
  });
  it("Concat with multiple arrays", () => {
    const source = [1, 2];

    expect(Concat(source, [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(source).toEqual(source);
  });

  it("Concat with multiple arrays second case", () => {
    const source = [1, 2];

    expect(Concat(source, [3, 4], [5, 6], [7, 8], [9, 10])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
    expect(source).toEqual(source);
  });

  it("Concat with multiple arrays third case", () => {
    const source = [1, 2];

    expect(
      Concat(source, [3, 4], [5, 6], [7, 8], [9, 10], ["hello", "world"])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hello", "world"]);
    expect(source).toEqual(source);
  });

  it("Concat empty arrays", () => {
    expect(Concat([], [])).toHaveLength(0);
  });

  it("Concat multiple empty arrays", () => {
    expect(Concat([], [], [], [], [], [], [])).toHaveLength(0);
  });
});
