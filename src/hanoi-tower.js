const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};

function calculateHanoi(num, time) {
  let one = 1
  let turn = 1
  while (one != num){
      turn = turn * 2 + 1
      one++
  }
  let second = Math.floor(turn / (time/60/60) )
  let obj = {
      'turns': turn,
      'seconds': second
  }
 return obj
}