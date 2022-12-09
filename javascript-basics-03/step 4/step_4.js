const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");

document.querySelector("button").onclick = function(e){
   if(password.value == confirmation.value){
        alert("Password Confirmed!");
    } else {
        confirmation.style.border = "1px solid red"
        password.style.border = "1px solid red";
    }
};