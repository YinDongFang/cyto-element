const truncateString = require('./truncateString')
const randomColor = require('./randomColor')
const isEvenNumber = require('./isEvenNumber')
const isEven = require('./isEven')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }