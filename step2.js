const addToZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));
// space complexity 0(1)

const hasUniqueChars = (word) => {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
// space complexity 0(1)

isPangram = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let strArr = str.toLowerCase().split("");
  let letters = [];
  strArr.forEach((letter) => {
    if (alphabet.indexOf(letter) > -1 && letters.indexOf(letter) === -1) {
      letters.push(letter);
    }
  });
  return letters.length === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
// space complexity 0(1)

findLongestWord = (arr) => {
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord.length;
};

console.log(findLongestWord(["hi", "hello"]));
// space complexity 0(1)
