// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1
  // return str.split('').reverse().join('');

  // Solution 2
  // output = ''
  // for (let i=str.length-1; i>= 0; i--) {
  //   output+=str[i];
  // }
  // return output;

  //Solution 3
  // let reversed = '';
  // for (let char of str){
  //   reversed= char+ reversed;
  // }
  // return reversed;

  // Solution 4 (from lecture)
    return str.split('').reduce((rev, char) => char + rev, '');
    
}
module.exports = reverse;
