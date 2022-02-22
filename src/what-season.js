const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

function getSeason(data){
  if(data == undefined){
      return 'Unable to determine the time of year!'
  }
  if(data.getTime == undefined){
      return "Invalid date!"
  }
  if(toString.call(data) != '[object Date]'){
      return "Invalid date!"
  }
  let numMonth = data.getMonth()
  if(numMonth >= 2 && numMonth <= 4) return 'spring';
  if(numMonth >= 5 && numMonth <= 7) return 'summer';
  if(numMonth >= 8 && numMonth <= 10) return 'autumn';
  else return 'winter'
}