 $(".content").validate({
            rules: {
                userName: {
                    required:true,
                    minlength: 8,
                                   },
                pass: {
                    required:true,
                    minlength:6,
                },
                confPass: {
                    required: true,
                    minlength:6,
                    equalTo:"#pass",
                },
                name:{
                    required:true,
                    minlength:2,
                },
                lastName:{
                    required:true,
                    minlength:2,
                },
                email:{
                    required:true,
                    email:true,
                },

            },
            messages: {
                userName: {
                    required: "Vui lòng nhập user name",
                    minlength: "user name quá ngắn, phải nhập lớn hơn 7 kí tự"
                },
                pass: {
                    required: "Vui lòng nhập pass",
                    minlength: "pass phải hớn hơn 5 kí tự"
                },
               confpass: {
                    required: "Vui lòng nhập lại pass",
                    minlength: "pass phải hớn hơn 5 kí tự",
                    equalTo:"pass phải giống pass ban đầu"
                },
                 name:{
                    required:"Vui lòng nhập name",
                    minlength:"tên phải nhiều hơn 2 kí tự",
                },
                 lastName:{
                    required:"Vui lòng nhập last name",
                    minlength:"tên phải có nhiều hơn 2 kí tự",
                },
                email:"Làm ơn nhập email",
            }
        });

 
var currentshow = 0;
showItems(currentshow);

 
 function showItems(n) {
          var x = $(".content__body");
          x[n].style.display = "block";
          
          if (n == 0) {
            document.getElementById("prev").style.display = "none";
          } 
          else {
            document.getElementById("prev").style.display = "inline";
          }
          if (n == (x.length - 1)) {
            document.getElementById("next").innerHTML = "Finish";
          }
          else {
            document.getElementById("next").innerHTML = "Next";
          }
          fixStepIndicator(n);
  }
    function next(n) {
 
  var x = document.getElementsByClassName("content__body");
  
  if (n == 1) 
    return false;
 
  x[currentshow].style.display = "none";

  currentshow = currentshow + n;

  if (currentshow >= x.length) {

    alert("Hoàn thành!");
    document.getElementsByClassName("content").submit();
    return false;
    }
  showItems(currentshow);
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByTagName("h3");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}