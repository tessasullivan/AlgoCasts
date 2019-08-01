// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);

  // Solution 1
  // Make n a string, split into char array, save off sign if there, reverse the string, add the sign, convert to integer
  // let sign = '';
  // let charArray = n.toString().split('');
  // if (charArray[0] === '-') {
  //   sign = charArray.shift();
  // }
  // return parseInt(sign + charArray.reverse().join(''));

}

module.exports = reverseInt;
