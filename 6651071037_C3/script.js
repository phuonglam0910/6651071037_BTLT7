const numbers = [15, 28, 9];
const largestNumber = Math.max(...numbers);

$(function () {
  $("#result").text("Số lớn nhất là: " + largestNumber);
});