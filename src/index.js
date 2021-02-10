
// You should implement your task here.
  module.exports = function towelSort(arr) {
  if (!arr) {
    arr = [];
    return arr;
  }
  return arr.reduce((acc, cur, i) => {
      cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
      return acc;
    }, []);
};
