
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return result;
  }
  matrix.forEach((item, i) => {
    if (i % 2 == 0) {
      item.forEach((j) => {
        result.push(j);
      });
    } else {
      item.reverse().forEach((j) => {
        result.push(j);
      });
    }
  });
  return result;
}
