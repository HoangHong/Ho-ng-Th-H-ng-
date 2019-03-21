do {
    var n = prompt('Nhập vào chiều cao của tam giác: ');
    n = parseInt(n);
} while (isNaN(n)|| n <= 0);



for (var i = n; i > 0; i--) {
	for (var j = i; j > 0 ; j--) {
		document.write('*');
	}
	document.write('<br>');
}


