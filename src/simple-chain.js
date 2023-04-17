const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`${value}`);
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = []
      throw new Error ("You can't remove incorrect link!");
    }  else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // const resultChaining = [...this.chain];
    // this.chain = [];
    // return `( ${resultChaining.join(' )~~( ')} )`;
    const resultChaining = this.chain.join(' )~~( ')
    this.chain = [];
    return `( ${resultChaining} )`
  }
};

module.exports = {
  chainMaker
};
