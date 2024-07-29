// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s) {
  let counter = Infinity;
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < counter) {
      counter = words[i].length;
      console.log(counter);
    }
  }
  return counter;
}
