$(function () {
  const input = prompt("Nhập một chuỗi:");

  if (input === null) {
    alert("Bạn đã hủy thao tác.");
    return;
  }

  const capitalized = input.replace(/\S+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  alert(capitalized);
});