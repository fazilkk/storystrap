let email = document.getElementById("email");
let error = document.getElementById("error");
let pwderror = document.getElementById("pwderror"); // you have to create this new element
let rpwderror = document.getElementById("rpwderror"); // you have to create this new element



let pwd = document.getElementById("pwd");
let rpwd = document.getelementById("repeatpwd") // change this id according to the id you given 
let emilError = true;
let pwdError = true;
let rpwdError = true;
const passRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})?$/
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        emailError = false;
    } else {

        error.innerHTML = "Invalid";
        error.style.color = "red";
        emailError = true;
    }
    if (passRegExp.test(pwd.value)) {
        pwderror.innerHTML = "valid";
        pwderror.style.color = "green";
        pwdError = false;
    } else {

        pwderror.innerHTML = "Invalid";
        pwderror.style.color = "red";
        pwdError = true;
    }
    // code for checking password matching
    if (pwd.value === rpwd.value) {
        rpwderror.innerHTML = "password matches";
        rpwderror.style.color = "green";
        rpwdError = false;
    } else {

        rpwderror.innerHTML = "password mismatch";
        rpwderror.style.color = "red";
        rpwdError = true;
    }

    // cheching the error variable contions. If all error are false return true else return flase
    if (!emailError && !pwdError && !rpwdError) {
        return true;
    } else {
        return false;
    }

}

// function validate() {
//     if (email.value == "" || pwd.value == "") {
//         alert("Fields cannot be Empty");
//         return false;
//     } else {
//         return true;
//     }

//     //*alert("validation is proper");
// }
// }