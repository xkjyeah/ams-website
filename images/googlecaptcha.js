
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
                
                
function validateEmail(mail){  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
                          return true;
                        }  
                            return false; 
}


var pass=false;
var count=0;
var gothru = true;
var recaptcha1 = null;
var domain = window.location.host;
var captchaSitekey = "6LdPSSgTAAAAAFXYeDjDsUl2d_IY1Ccrr82ccEe0";
if(domain=="activawebdesigner.com.sg"){
     captchaSitekey = "6LcRASATAAAAAPhOS_dGsoICuloNLnl0Uk2QJ1T_";
 }
jQuery(document).ready(function() {
   
  
     //Here the website Sitekey needs to be inserted
      
     function validateCaptchaCode(){
                                      var serializedData = jQuery("#form1").serialize();
                                        alert(serializedData );
                                        jQuery.ajax({
                                        url: "captcha/validation.php",
                                        type: "post",
                                        data: serializedData,
                                        beforeSend: function() {
                                            // setting a timeout
                                         },
                                        success:function(data){
                                           if(data=="true"){
                                                pass=true;
                                                ++count;
                                                if(count==1){
                                                      gothru=false;
                                                      setTimeout(function(){  $("#submitBtn").trigger('click'); }, 2000);
                                                }
                                           }else{
                                               if(!jQuery("#g-recaptcha-id").length > 0 && gothru){
                                                    alert("Please check the captcha");
                                                    return pass;
                                                }
                                            }
                                        }, error: function(jqXHR, textStatus, ex) {
                                               // alert(textStatus + "," + ex + "," + jqXHR.responseText);
                                        }
                                    });

                                 return pass;
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
                        }else{
                            validateCaptchaCode();
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
});

   
               
    
var captchaCallback = function() {
     //Render the recaptcha1 on the element with ID "recaptcha1"
        recaptcha1 = grecaptcha.render('captchadiv', {
          'sitekey' : captchaSitekey, //Replace this with your Site key
          'theme' : 'light'
        });

    }