function giaiThua(i) {
	if(i == 1){
		return 1;
	}else{
		return i * giaiThua(i-1);
	}
}
do {
	var n = prompt('Nhập vào số nguyên dương n');
	n = parseInt(n);
} while (isNaN(n)|| n <= 0);
var S = 0.0;
for (var i = 1; i <= n; i++) {
	S = S + (i/giaiThua(i));
}
alert('S = '+S);