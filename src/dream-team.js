const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};


function createDreamTeam(members) {
  if(Array.isArray(members) == false){
    return false
  }
  let result = ''
  for(let elem of members){
    if(typeof(elem) == 'string'){
      result += getLetter(elem)
    }
  }
  result = result.length > 0 ? result.split('').sort().join('') : false
  return result
  
}



function getLetter(elem){
  for(let i = 0; i<elem.length; i++){
    if(elem[i] != ' '){
      return elem[i].toUpperCase()
    }
  }
}


