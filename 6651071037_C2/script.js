$(function () {
  $("#checkYear").on("click", function () {
    const year = Number($("#year").val());

    if (!Number.isInteger(year) || year < 1) {
      $("#result").text("Vui lòng nhập một năm hợp lệ.");
      return;
    }

    const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    $("#result").text(
      isLeapYear
        ? year + " là năm nhuận."
        : year + " không phải là năm nhuận."
    );
  });
});