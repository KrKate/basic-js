const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
if (typeof sampleActivity === 'string'&& sampleActivity > 0 && sampleActivity <=15) {
  sampleActivity = +sampleActivity;
  const time = Math.ceil((HALF_LIFE_PERIOD / (Math.log(2))) * Math.log(MODERN_ACTIVITY / (sampleActivity)));
  return time;
} else {
  return false;
}

}
// console.log(dateSample(0))
// console.log(dateSample('gmgggkgll'))
// console.log(dateSample(1))


module.exports = {
  dateSample
};
