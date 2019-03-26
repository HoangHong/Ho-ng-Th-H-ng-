var button= document.getElementsByTagName("button");
var content= document.getElementsByTagName("p");
for (var i = 0; i < content.length; i++) {

	button[i].addEventListener("click", function(){
		
		for (var j = 0; j < content.length; j++) {
			content[j].style.display="none";
		}

		this.nextElementSibling.style.display="block";
	});
}