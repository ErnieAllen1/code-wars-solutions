// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  const numArr = x.map(Number);
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}
