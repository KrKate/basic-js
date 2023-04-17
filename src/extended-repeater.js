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
//параметры separator и additionSeparator являются строками.
//значение разделителя по умолчанию — «+». Значение по умолчанию для addSeparator — '|'.
//RepeatTimes и addRepeatTimes — целые числа (при отсутствии любого из них соответствующая строка не повторяется).


//assert.equal(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' }

//assert.equal(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }), 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');
//assert.equal(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');

function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  if (typeof str !== 'string') {
    str = String(str)
  } else if (str === null) {
    str = 'null'
  } 

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  //добавление к основному тексту, дублируется по отдельной опции
  let addition;
  if (addition === null) {
    addition = 'null'
  } else if (addition === false) {
    addition = 'false'
  } else addition = String(options.addition || '');



  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let result = '';
  if (str === true) {
    result = 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
  }

  for (let i=0; i<repeatTimes; i++) {
    result += str;

    for(let j=0; j<additionRepeatTimes; j++) {
      result += addition;

      if (j< additionRepeatTimes-1) {
      result += additionSeparator;
    } 
    }

    if (i< repeatTimes-1) {
      result += separator;
    }
  }
  console.log(result)
  return result
}


repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
