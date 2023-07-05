const range = (n) => Array.from({ length: n }, (_, index) => index);

const threadMacros =
  (...funcs) =>
  (init) =>
    funcs.reduce((prev, curr) => curr(prev), init);

console.log(
  threadMacros(
    (e) => e.filter((e2) => e2 % 3 == 0 || e2 % 5 === 0),
    (e) => e.reduce((a, b) => a + b)
  )(range(100000))
);
