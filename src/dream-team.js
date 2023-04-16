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
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const teamNameArr = [];
  if(!Array.isArray(members)) {
    return false;
  }
  for (let i=0; i<members.length; i++) {
    if (typeof members[i] === 'string') {
      const member = members[i].trim().toUpperCase();
      //console.log(member)
      teamNameArr.push(member[0])
      //console.log(teamNameArr)
    }
  }
  const sorted = teamNameArr.sort();
  const joined = sorted.join('')
 // console.log(joined)
 return joined
}

const members =['Olivia', 1111, 'Lily', 'Oscar', true, null];
createDreamTeam(members)

module.exports = {
  createDreamTeam
};
