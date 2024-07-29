// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  // your code
  const letters = s.split("");
  const finalArr = [];

  for (const [index, letter] of letters.entries()) {
    finalArr.push(letter.toUpperCase() + letter.repeat(index).toLowerCase());
  }

  return finalArr.join("-");
}
