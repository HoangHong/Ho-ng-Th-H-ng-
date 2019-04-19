function nextImage(){
	var active = document.getElementsByClassName("active")[0];
	active.className="item";
	if (active.nextElementSibling.className.indexOf("item")>=0)
		active.nextElementSibling.className="item active";
	else active.parentNode.firstElementChild.className= "item active";
}
function backImage(){
	var active = document.getElementsByClassName("active")[0];
	active.className="item";
	console.log(active.previousElementSibling);
	if (active.previousElementSibling==null)
		active.parentNode.children[count-3].className= "item active";
	else active.previousElementSibling.className="item active";
}
function dotClick(item){
	var active = document.getElementsByClassName("active")[0];
	active.className="item";
	item.parentNode.className="item active";
}
function load(){
	var dots = document.getElementsByClassName("dot");
	dots[0].style.left="180px";
	var left=400;
	for (var i = 1; i < dots.length; i++) {
		dots[i].style.left=180+i*40+"px";
	}
	var back = document.getElementById("back");
	var next = document.getElementById("next");
	next.addEventListener("click",function(){
		nextImage();
	});
	back.addEventListener("click",function(){
		backImage();
	});
	for (var i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click",function(){
			dotClick(this);
		});
	}
	// setInterval(function(){
	// 	nextImage();
	// },1000);

}