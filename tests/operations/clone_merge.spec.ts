import { Operations } from "../../src";

const { Clone, Merge } = Operations;

describe("Clone merge operations", () => {
  it("Basic clone operation", () => {
    const source = { name: "Daniel", skills: ["js", "node"] };

    const result = Clone(source);

    expect(source === result).toBeFalsy();
    expect(result).toMatchObject(source);
  });

  it("Basic merge operation", () => {
    const source = {
      name: "Julius",
      skills: ["climbing", "sexting"],
      online: false,
    };
    const toMerge = { name: "Julius son", online: true };

    const result = Merge(source, toMerge);

    expect(source === result).toBeFalsy();
    expect(toMerge === result).toBeFalsy();

    expect(source).not.toMatchObject(result);
    expect(toMerge).not.toMatchObject(result);

    expect(result).toMatchObject({
      name: "Julius son",
      skills: ["climbing", "sexting"],
      online: true,
    });
  });
});
