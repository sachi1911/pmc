
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML=" ";
    }
}

function seterror(id, error){
    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function al(){
    var x=alert("Your response has been recorded");
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if(name.length<3){
        
        seterror("name","*Length of first name is too short!");
        returnval = false;
    }
    var laname = document.forms['myForm']["flname"].value;
    if(laname.length<3){
        seterror("lname","*Length of last name is too short!");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if(email.length>40){
        seterror("email","*Email is too long!");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length!=10){
        seterror("phone","*Phone number should be 10 digits!");
        returnval = false;
    }
    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 4){
        seterror("pass","*Password should be atleast 4 characters!");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
        seterror("cpass","Password did not match!");
        returnval = false;
    }
    
    if(returnval == true){
        al();
        
}
return returnval;
}


