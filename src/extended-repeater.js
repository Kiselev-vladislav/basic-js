const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.addition = String(options.addition)
  console.log(options.addition)
  let result = String(str)
  let addstr = function (str, addition, addSeparator = '|', repeat = 1){
      let i = 0
      while(i < repeat-1){
          str += addSeparator + addition
          i++
      }
      return str
  };
  if(options.addition != 'undefined'){
      result = String(str) + options.addition
      result = addstr(result, options.addition, options.additionSeparator, options.additionRepeatTimes)
  }
  if(options.separator != undefined){
      result = addstr(result, result, options.separator, options.repeatTimes)
  }
  else{
      result = addstr(result, result, '+', options.repeatTimes)
  }
  console.log(result)
  return result
}

module.exports = {
  repeater
};
