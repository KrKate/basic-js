const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let regular = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/g;
  return regular.test(n);
} 
module.exports = {
  isMAC48Address
};
// console.log(isMAC48Address('00-1B-63-84-45-E6'))
// console.log(isMAC48Address('00-1B-63-84-dwwwW-E6'))  
//Оба якоря вместе ^...$ часто используются для проверки, совпадает ли строка с шаблоном полностью.
// Несколько символов или символьных классов в квадратных скобках […] означают «искать любой символ из заданных
//Если мы хотим найти буквы и в верхнем и в нижнем регистре, то мы можем добавить ещё диапазон a-f: [0-9A-Fa-f]. Или поставить у регулярного выражения флаг i.
//Шаблон \d{5} обозначает ровно 5 цифр, он эквивалентен \d\d\d\d\d
//пять наборов с дефисом после: [0-9A-F]{2}-
//в конце один набор без дефиса [0-9A-F]{2}
