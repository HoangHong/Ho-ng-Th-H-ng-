var count=0;

for (var i = 1; i <= 100; i++) {
	if ( i % 3 == 0) {
		console.log( i + ' là số chia hết cho 3 ');
		count = count + 1;
		// console.log('Số lượng các số nguyên  chia hết cho 3  là: '+count);
	} else if(i % 7 == 0  ){
		console.log( i + ' là số chia hết cho  7');
		count = count + 1;
		// console.log('Số lượng các số nguyên  chia hết cho 7 là: '+count);
	}
}
alert('Có tổng '+count+' số nguyên nằm trong đoạn từ 1 đến 100  chia hết cho 3 or chia hết cho 7');
