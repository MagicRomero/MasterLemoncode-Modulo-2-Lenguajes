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
