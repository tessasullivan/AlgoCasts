// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    chars[char] = chars[char] || 1;
  }
  for (let char in chars) {
    if (chars[char] > max ) 
    {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}



module.exports = maxChar;

//Solution 1
// let chars = {};
// let max = 0;
// let maxChar = str[0];
// let strLower = str.toLowerCase();
// for (let i = 0; i < str.length; i++){
//   if (Object.keys(chars).includes(strLower[i])) chars[strLower[i]]+=1;
//   else chars[strLower[i]] = 1;
// }
// for (let key in Object.keys(chars)) {
//   if (chars[key] > max ) 
//   {
//     max = chars[key];
//     maxChar = key;
//   }
// }