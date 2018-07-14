function myvalidation(){     
    var fn=document.getElementById('fn'); 
    var ln=document.getElementById('ln'); 
    var email=document.getElementById('email'); 
    var pwd=document.getElementById('pd'); 
alert(“Form Successfully Submitted”);   
    if(fn.value=="" || ln.value=="" || email.value=="" || pwd.value==""){ 
        alert("Please fill all the fields"); 
    } 
     
    if(fn.value!=""){ 
          fname(fn);   
      } 
      if(ln.value!=""){ 
          lname(ln); 
      } 
      if(email.value!=""){ 
          myemail(email);   
    }   
    if(pwd.value!=""){ 
        mypwd(pwd); 
       
 
    }    
} 
 
 
/*Validation for First Name*/  
    function fname(fn){ 
    if(fn.value.match(/\d/)){ 
         var alertMsg="**Enter Correct First Name**"; 
         alert(alertMsg); 
        fn.focus(); 
        return false; 
        } 
    } 
/*Validation for Last Name */ 
       function lname(ln){ 
    if(ln.value==0 || ln.value.match(/\d/)){ 
         var alertMsg="**Enter Correct Last Name**"; 
         alert(alertMsg); 
        ln.focus(); 
        return false; 
    } 
}         
 /*Validation for Email*/ 
    function myemail(email){ 
       var exp=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]{2,4}$/; 
         if(email.value.match(exp)){ 
             return true; 
         }else{ 
             var alertMsg="Incorrect Email"; 
       
 
           alert(alertMsg); 
             email.focus(); 
             return false; 
         } 
     } 
     /*Validation for Password*/ 
    function mypwd(pwd){ 
        var pwdexp=/^[A-Z]+[a-z]+[]0-9]+[@#$%^&~]+{6,13}$/; 
        if(p>4 && pwd.value.match(pwdexp)){ 
             return true; 
         } 
         else{ 
             alert("Incorrect password"); 
             return false;         
            pwd.focus(); 
        } 
    } 