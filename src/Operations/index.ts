export const Head = (target: any[]) => {
  const [head]: any = target;

  return head;
};

export const Tail = (target: any[]) => {
  const [first, ...rest] = target;

  return rest;
};

export const Init = (target: any[]) => target.slice(0, -1);

export const Last = (target: any[]) => [...target].pop();

export const Concat = (source: any[], ...arrays: any[]) =>
  [].concat(...source, ...arrays);

export const Clone = (source: object): object => ({ ...source });
export const Merge = (source: object, toMerge: object): object => ({
  ...source,
  ...toMerge,
});
