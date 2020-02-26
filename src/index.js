
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
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
