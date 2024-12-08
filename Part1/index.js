function palindrome(s) {
  const ignored = [".", "?", "!", ",", " ", "'"];

  //!remove punctuation
  let description = [];
  Array.from(s).map((char) => {
    if (ignored.includes(char)) {
      return;
    } else {
      description.push(char);
    }
  });
  console.log(description);

  //!test if palindrome
  let i = 0;
  let j = description.length - 1;

  while (i < j) {
    if (description[i].toLowerCase() === description[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

//!Testing
const s = "Madam, in Eden, I'm Adam";

console.log(palindrome(s));
