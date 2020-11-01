import { Concat } from "../src";

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

  it("Concat with multiple arrays 2", () => {
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

  it("Concat with multiple arrays 3", () => {
    const source = [1, 2];

    expect(
      Concat(source, [3, 4], [5, 6], [7, 8], [9, 10], ["hello", "world"])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hello", "world"]);
    expect(source).toEqual(source);
  });
});
