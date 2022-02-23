const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0
  let length = String(n).length
  for(let i = 0 ; i < length; i++){
      let arr = String(n).split('')
      arr[i] = ''
      let num = Number((arr).join(''))
      if(num > result){
          result = num
      }
  }
  return result
}

module.exports = {
  deleteDigit
};
