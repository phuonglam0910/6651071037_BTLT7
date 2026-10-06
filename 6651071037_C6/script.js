$(function () {
  const inputs = [
    prompt("Nhập hệ số a:"),
    prompt("Nhập hệ số b:"),
    prompt("Nhập hệ số c:")
  ];

  if (inputs.includes(null)) {
    alert("Bạn đã hủy thao tác.");
    return;
  }

  const values = inputs.map(function (input) {
    return input.trim() === "" ? NaN : Number(input);
  });

  if (!values.every(Number.isFinite)) {
    alert("Dữ liệu không hợp lệ. Vui lòng nhập các hệ số là số.");
    return;
  }

  const [a, b, c] = values;

  if (a === 0) {
    if (b === 0) {
      alert(c === 0 ? "Phương trình có vô số nghiệm." : "Phương trình vô nghiệm.");
    } else {
      alert("Phương trình có một nghiệm: x = " + -c / b);
    }
    return;
  }

  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    alert("Phương trình vô nghiệm trong tập số thực.");
  } else if (delta === 0) {
    alert("Phương trình có nghiệm kép: x = " + -b / (2 * a));
  } else {
    const squareRootDelta = Math.sqrt(delta);
    const x1 = (-b + squareRootDelta) / (2 * a);
    const x2 = (-b - squareRootDelta) / (2 * a);
    alert("Phương trình có hai nghiệm phân biệt:\nx1 = " + x1 + "\nx2 = " + x2);
  }
});