
do {
   var n = prompt('Nhập vào số nguyên n: ');
   n = parseInt(n);

} while (isNaN(n) || n <= 0);
var tong = 0.0;
for (var i = 1; i <= n; i++) {
	tong = tong +i; 
	 
}
alert('Tổng  là: '+ tong );