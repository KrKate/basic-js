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
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (Object.getOwnPropertyNames(date).length) {
    throw Error ('Invalid date!')
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!')
  }

  const month = date.getMonth();
  const seasons = ['winter', 'spring', 'summer', 'fall'];
  if (month === 0 || month === 1 || month === 11) {return seasons[0]}
  else if (month === 2 || month === 3 || month === 4) {return seasons[1]}
  else if (month === 5 || month === 6 || month === 7) {return seasons[2]}
  else if (month === 8 || month === 9 || month === 10) {return seasons[3]}
}

module.exports = {
  getSeason
};
