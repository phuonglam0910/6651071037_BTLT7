$(function () {
  const oddNumbers = [];

  for (let number = 1; number < 100; number += 2) {
    if (number !== 5 && number !== 7 && number !== 93) {
      oddNumbers.push(number);
    }
  }

  $("#result").text(oddNumbers.join(", "));
});