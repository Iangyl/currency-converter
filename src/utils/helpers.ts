export const isNaN = (value: string | number) =>
  Number(value) === Number(value);

export const difference = (set1: string[], set2: string[]) =>
  set1.filter((x) => !set2.includes(x));
