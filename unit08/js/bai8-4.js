do {
	var N = prompt('Nhập vào số N: ');
	N = parseInt(N);
	var M = prompt('Nhập vào số M: ');
	M = parseInt(M);
	var K = prompt('Nhập vào số K: ');
	K = parseInt(K);
} while ((isNaN(M) && isNaN(N) && isNaN(K)) || (M <= 0 && N <= 0 && K <= 0));
var tong = 0.0;
for (var i = N; i <= M; i++) {
	if(i % K == 0){
		tong = tong + i;

	}
}
alert('Tổng của các số chia hết cho '+ K + ' trong khoảng từ '+ N + ' đến ' +M+ ' là: '+tong);