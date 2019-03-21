
do {
    var n = prompt('Nhập vào chiều dài: ');
    n = parseInt(n);
    var m = prompt('Nhập vào chiều rộng: ');
    m = parseInt(m);
} while ((isNaN(n)&&isNaN(m))|| (n <= 0 && m <= 0));



for (var i = 1; i <= n; i++) {
	for (var j = 1; j <= m ; j++) {
		document.write('*');

	}
	document.write('<br>');
	
}
