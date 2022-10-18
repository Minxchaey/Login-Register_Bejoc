function validate() {

    var name = document.forms["myform"]["firstname"].value;
    var nameer = document.getElementById('ferrors');
    //firstname validation
    if(name==""){
      nameer.style.display = 'block';
      nameer.innerHTML = 'Please enter your firstname';
    return false;
    }else {
        if(name.length < 2) {  
          nameer.style.display = 'block';
          nameer.innerHTML = "**Firstname length must be atleast 2 characters"; 
        return false;  
        } else if(name.length > 25) {  
          nameer.style.display = 'block';
          nameer.innerHTML = "**Firstname length must be atmost 25 characters"; 
        return false;  
        } else{
          nameer.style.display = 'none';
        }
    } 

    //lastname validation
     var lname = document.forms["myform"]["lastname"].value;
     var ler = document.getElementById('lerrors');
     if(lname==""){
      ler.style.display = 'block';
      ler.innerHTML = "Please enter your lastname";
     return false;
     }else{
        if(lname.length < 2) {  
          ler.style.display = 'block';
          ler.innerHTML = "**Lastname length must be atleast 2 characters";
         return false;  
       } else if(lname.length > 25) {  
          ler.style.display = 'block';
          ler.innerHTML = "**Lastname length must be atmost 25 characters";
         return false;  
       }else{
        ler.style.display = 'none';
       }
    } 
//address validation
    var address = document.forms["myform"]["address"].value;
    var aer = document.getElementById('Aerrors');
     if(address==""){
      aer.style.display = 'block';
      aer.innerHTML = "Please enter your address!";
     return false;
     }else{
        if(address.length < 2) {  
          aer.style.display = 'block';
          aer.innerHTML = "**Address length must be atleast 2 characters"; 
         return false;  
       } else if(address.length > 30) { 
          aer.style.display = 'block';
          aer.innerHTML = "**Address length must be atmost 30 characters";  
          return false;  
       }else{
        aer.style.display = 'none';
       }
    } 

//email validation
    var email = document.forms["myform"]["email"].value;
    var eer = document.getElementById('Eerrors');
    if (email == "") {
      eer.style.display = 'block';
      eer.innerHTML = "Please enter the email";
      return false;
  } else if (email.length > 1) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      if (!re.test(email)) {
          eer.style.display = 'block';
          eer.innerHTML = "Invalid email";
      }else{
          eer.style.display = 'none';
      }
  }else{
      eer.style.display = 'none';
  }
    


    //password validation
    var pass = document.forms["myform"]["password"].value;
    var per = document.getElementById('Perrors');
    if(pass==""){
      per.style.display = 'block';
      per.innerHTML ="Please enter your password!";
    return false;
    }else{
        //minimum password length validation  
        if(pass.length < 8) {  
          per.style.display = 'block';
          per.innerHTML ="**Password length must be atleast 8 characters";
            return false;  
         }  
         
         //maximum length of password validation  
         else if(pass.length > 15) {  
          per.style.display = 'block';
          per.innerHTML ="**Password length must not exceed 15 characters";
            return false;  
         } else{
          per.style.display = 'none';
         }
    } 
    //confirm password validation
    var conpass = document.forms["myform"]["confirmpassword"].value;
    var cper = document.getElementById('CPerrors');
    if(conpass==""){
      cper.style.display = 'block';
      cper.innerHTML ="Please re-enter password!";
   
    return false;
    }else{
        if (conpass!=pass){
          cper.style.display = 'block';
          cper.innerHTML ="Password incorrect!";
          return false;
        }else{
            alert("Successfully Registered!")
        }
    }
   }