const sumEvenFibonacci = (limit) => {
  let prev = 1;
  let curr = 2;
  let sum = 0;
  while (curr <= limit) {
    if (curr % 2 === 0) {
      sum += curr;
    }
    const temp = prev;
    prev = curr;
    curr += temp;
  }
  return sum;
};
