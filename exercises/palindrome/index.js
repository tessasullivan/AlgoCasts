// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  first_half = str.substring(0, str.length/2 + 1);
  second_half_rev = str.split('').reverse().join('').substring(0, str.length/2 + 1);

  if (first_half === second_half_rev) return true
  else return false
}

module.exports = palindrome;
