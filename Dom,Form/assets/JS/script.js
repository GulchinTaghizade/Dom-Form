let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let email = document.getElementById("email");
let age = document.getElementById("age");
let btn=document.getElementById("submit-btn");
let userdatas=document.getElementById("user-datas");


function validateFirstName() {
    let firstnameerror=document.getElementById("nameerror");
    if (fname.value.length < 3) {
        firstnameerror.innerHTML = "Length of first name must be more than 3"
        return false;
    }
    else {
        document.getElementById("nameerror").innerHTML = ""
        return true;
    }

}
function validateLastName() {
    let lastnameerror=document.getElementById("nameerror");
    if (lname.value.length < 3 ) {
        lastnameerror.innerHTML = "Length of last name must be more than 3"
        return false;
    }
    else {
        document.getElementById("nameerror").innerHTML = ""
        return true;
    }

}


function validateEmail() {
    let emailerror=document.getElementById("emailerror");
    if (email.value=="" || email.value==null || !email.value.includes("@")) {
        emailerror.innerHTML = "<span style='color: red;'>" +
            "Please insert correct email</span>"
        return false;
    } 
    else {
        document.getElementById("emailerror").innerHTML = "";
        return true;

    }

}

function validateAge(){
    let ageerror=document.getElementById("ageerror");
    if (age.value < 0 ) {
        ageerror.innerText = "Please insert correct age"
        return false;
    }
    else{
        document.getElementById("agerror").innerHTML ="";
        return true;
    }
    
}

function validateForm(){
    if (validateFirstName() && validateLastName() && validateEmail() && validateAge()) {
        document.getElementById("my-form").remove();
        userdatas.innerText += `First name : ${fname.value}\nLast Name : ${lname.value}\nEmail : ${email.value}\nAge : ${age.value}`;
        console.log(userdatas.innerText);
        return true;
    }
    else {
        document.getElementById("mainerror").innerText="Please full all blanks correctly!!!"
        return false;
    }
}

