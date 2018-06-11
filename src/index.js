// - Write a function which receives an array of strings.
// It should return the longest string from the array
function longestString(arr) {
  return arr.reduce(function(acc, item) {
    if (item.length > acc) {
      return item;
    }
    return acc;
  }, 0);
}

module.exports.longestString = longestString;
