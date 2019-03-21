
do {
    var n = prompt('Nhập vào chiều cao của tam giác: ');
    n = parseInt(n);
} while (isNaN(n)|| n <= 0);



for (var i = 1; i <= n; i++) {
	for (var j = 1; j <= i ; j++) {
		document.write('*');
	}
	document.write('<br>');
}







