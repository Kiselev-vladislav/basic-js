const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s2 = s2.split('')
  let result = 0
  for(let i = 0; i < s1.length; i ++){
      if(s2.indexOf(s1[i]) != -1){
          let a =  s2.indexOf(s1[i])
          result++
          s2[a] = ''
      }
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
