$(function () {
  const inputs = [
    prompt("Nhập ngày:"),
    prompt("Nhập tháng:"),
    prompt("Nhập năm:")
  ];

  if (inputs.includes(null)) {
    console.log("Bạn đã hủy thao tác.");
    return;
  }

  const [day, month, year] = inputs.map(function (input) {
    return input.trim() === "" ? NaN : Number(input);
  });

  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year) ||
    year < 1 ||
    month < 1 ||
    month > 12
  ) {
    console.error("Ngày, tháng hoặc năm không hợp lệ.");
    return;
  }

  const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  if (day < 1 || day > daysInMonth[month - 1]) {
    console.error("Ngày không tồn tại trong tháng đã nhập.");
    return;
  }

  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;

  if (nextDay > daysInMonth[month - 1]) {
    nextDay = 1;
    nextMonth++;

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  }

  console.log(
    "Ngày kế tiếp là: " +
      String(nextDay).padStart(2, "0") +
      "/" +
      String(nextMonth).padStart(2, "0") +
      "/" +
      nextYear
  );
});