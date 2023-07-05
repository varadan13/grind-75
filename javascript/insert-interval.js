const left = (newInterval, old) => newInterval[1] < old[0];

const right = (newInterval, old) => old[1] < newInterval[0];

const overlap = (newInterval, old) =>
  !left(newInterval, old) && !right(newInterval, old);

const merge = (newInterval, old) => [
  Math.min(newInterval[0], old[0]),
  Math.max(newInterval[1], old[1]),
];

const main = (newInterval, arr) => {
  let i = newInterval;
  const temp = [];
  arr.forEach((old) => {
    if (!i) {
      temp.push(old);
    } else if (left(i, old)) {
      temp.push(i);
      temp.push(old);
      i = null;
    } else if (right(i, old)) {
      temp.push(old);
    } else {
      i = merge(i, old);
    }
  });
  return temp;
};

console.log(
  main(
    [4, 8],
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ]
  )
);
