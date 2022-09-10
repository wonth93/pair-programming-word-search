const wordSearch = (letters, word, callback) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (letters.length === 0) {
        return false;
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        } 
    }
    const verticallyJoin = callback(letters).map(ls => ls.join(''));
    for (l of verticallyJoin) {
        if (l.includes(word)) {
          return true;
        } 
    }
    return false; 
}
const transpose = function (matrix) {
    let array = [];
    for(let i = 0; i < matrix[0].length; i++) {
      array.push(matrix.map(array => array[i])) 
    }
    return array;
  };

module.exports = {wordSearch, transpose};