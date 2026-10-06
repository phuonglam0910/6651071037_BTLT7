$(function () {
  const input = prompt("Nhập một số nguyên có hai chữ số (10–99):");

  if (input === null) {
    alert("Bạn đã hủy thao tác.");
    return;
  }

  const number = Number(input.trim());

  if (
    input.trim() === "" ||
    !Number.isInteger(number) ||
    number < 10 ||
    number > 99
  ) {
    alert("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên từ 10 đến 99.");
    return;
  }

  const ones = number % 10;
  const tensWords = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi"
  ];
  const onesWords = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín"
  ];

  let spokenNumber = tensWords[Math.floor(number / 10)];

  if (ones > 0) {
    let spokenOnes = onesWords[ones];

    if (ones === 1 && number >= 21) {
      spokenOnes = "mốt";
    } else if (ones === 4 && number >= 20) {
      spokenOnes = "tư";
    } else if (ones === 5 && number >= 20) {
      spokenOnes = "lăm";
    }

    spokenNumber += " " + spokenOnes;
  }

  alert(spokenNumber.charAt(0).toUpperCase() + spokenNumber.slice(1));
});