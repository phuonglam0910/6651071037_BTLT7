$(function () {
  const input = prompt("Nhập một số nguyên dương:");

  if (input === null) {
    alert("Bạn đã hủy thao tác.");
  } else {
    const number = Number(input.trim());

    if (input.trim() === "" || !Number.isInteger(number) || number <= 0) {
      alert("Dữ liệu không hợp lệ. Vui lòng nhập một số nguyên dương.");
    } else {
      let isPrime = number >= 2;

      for (let divisor = 2; isPrime && divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
          isPrime = false;
        }
      }

      alert(
        isPrime
          ? number + " là số nguyên tố."
          : number + " không phải là số nguyên tố."
      );
    }
  }
});