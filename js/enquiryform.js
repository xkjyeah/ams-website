// JavaScript Document
function isNumberKey(evt) {
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                // Added to allow decimal, period, or delete
                if (charCode == 110 || charCode == 190 || charCode == 46) 
                        return true;

                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        return false;
                    }

                        return true;
                } 
//
//        
//        
//             $.fn.pval = function(){
//                    var $this = $(this),
//                        val = $this.eq(0).val();
//                    if(val == $this.attr('placeholder'))
//                        return '';
//                    else
//                        return val;
//                }
                
                 function validateEmail(mail){  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
                          return true;
                        }
                            return false; 
                        }
            var pass=false;
            var count=0;
            
                
            $(document).ready(function(){
                 // Initialize placeholder
                //$.Placeholder.init();
              


              function validateCaptcha(captchadata){
                    $.ajax({
                        url : "captcha/getcaptcha.php",
                       // dataType:"jsonp",
//						crossDomain: true,
//                        jsonp:"mycallback",
                        //beforeSend: function() {
//                                // setting a timeout
//                                 $('#foo').spin('modal');
//                            },
                        success:function(data){
							var data1 = $.parseJSON(data);
							//alert (data1);
                               if(captchadata!==data1.toString()){
                                   alert("Please enter a valid Captcha Code");
                                   //$('#foo').spin('modal').stop();
                                   return pass;
                                        }else{
                                         pass=true;
                                         //$('#foo').spin('modal'); 
                                         
                                         ++count;
                                         if(count==1){
                                             //$('#foo').spin('modal'); 
                                            setTimeout(function(){  $("#submitBtn").trigger('click');  }, 3000);
                                        }
                                }
                        }, error: function(jqXHR, textStatus, ex) {
                                    //alert(textStatus + "," + ex + "," + jqXHR.responseText);
                        }
                    });
                    return true;
                }

                $("#submitBtn").click(function(){
                     
                        if($("#name").val()=="" || $("#name").val()=="Name:"){
                           alert("Please enter your Name");
                             return pass;
                        }else if($("#mobile").val()=="" || $("#mobile").val()=="Contact No:"){
                             alert("Please enter your Contact No");
                              return pass;
                        }else if($("#email").val()=="" || $("#email").val()=="Email:"){
                              alert("Please enter your Email Address");
                              return pass;
                        }else if(!validateEmail($("#email").val())){
                              alert("Please enter a valid Email Address!") 
                               return pass;
                        }else if($("#captcha").val()=="" || $("#captcha").val()=="Security Code:"){
                            alert("Please enter the Security code") 
                             return pass;
                        }else{
                            validateCaptcha($("#captcha").val());
                            return pass;
                        }
                    });
                
                
                $("#mobile").on({
                    keydown: function(e) {
                      if (e.which === 32)
                        return false;
                    },
                    change: function() {
                      this.value = this.value.replace(/\s/g, "");
                    }
                  });
				  

                
                 //function showErrorToast(msg) {
//                    $(this).notifyMe(
//				'bottom',
//				'error',
//				'Error :',
//				msg,
//				200,
//				1500
//			);
//                }
      });
            