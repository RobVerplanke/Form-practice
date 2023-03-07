function matchPassword() {  
    let pw1 = document.getElementById("pass1").value;  
    let pw2 = document.getElementById("pass2").value;
    let msg = document.getElementById("message");
    if(pw1 != pw2)  
    {   
      msg.innerHTML = "*Passwords do not match";
    } else{
        msg.innerHTML = "";
    }
  } 