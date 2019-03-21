// function test() {
// 	alert('Hello World');
// }

// var val;
// val = confirm("How are u?");
// if(val == true){
// 	alert('Good');
// }
// else{
// 	alert('Not good');
// }

// var val;
// val = prompt("Nhập tên của bạn: ");
// if (val != null) {
// 	// alert('Xin chào  '+val);
// 	document.write("<b style='color:red'>" + val + "</b>");
// } else {
// 	alert('Xin mời nhập lại họ tên');
// }
// 



// do{
// 	var a =prompt("Nhập a: ");
// 	a = parseFloat(a);

// }
// while (isNaN(a));
// do{
// 	var b =prompt("Nhập b: ");
// 	b = parseFloat(b);

// }
// while (isNaN(b));

// if (a ==0 & b == 0) {
// 	alert("Phương trình vô số nghiệm");
// } else if(a == 0 && b!=0) {
// 	alert('Phương trình vô nghiệm');

// }
// else{
// 	alert('Phương trình có nghiệm: '+(-b/a));
// }
// 


// // 1/2+2/3+3/4+...+100/101
// do {
// 	var n = prompt('Nhập n: ');
// 	n = parseInt(n);
// } while (isNaN(n) || n <= 0);
// var tong = 0.0;
// for (var i = 0; i < n; i++) {
// 	tong = tong + (i + 1)/(i + 2);
// }
// alert(tong);


// var mang = [];// mảng rỗng không biết trước phấn tử 
// mang.push(3);// đẩy dữ liệu vào 
// mang.push(4);
// console.log(mang);
// mang = new Array(10);
// // mang[0],...,mang[9];
// mang[i]
// 
function enterNumberic(thongBao) {
	var m;
	do {
 	var m = prompt('Nhập '+ thongBao+': ');
 	m = parseInt(m);
 } while (isNaN(m) || m <= 0);
 return m;
}
 var n;
 n = enterNumberic("n");
 var mang = new Array(n);
 for (var i = 0; i < n; i++) {
	
		mang[i] =enterNumberic('Nhập phần tử thứ ' + (i+1));
		
	
}
var tong = 0.0;
for (var i = 0; i < n; i++) {
	tong = tong + mang[i];
}
 alert(tong);