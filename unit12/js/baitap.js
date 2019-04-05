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