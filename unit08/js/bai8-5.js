do {
    var n = prompt('Nhập vào số nguyên dương n: ');
    n = parseInt(n);
} while (isNaN(n) || n < 0);
var s = 0.0;
for (var i = 1; i <= n; i++) {
	s = s + 1/(i);
}
alert('Tổng s = ' + s );