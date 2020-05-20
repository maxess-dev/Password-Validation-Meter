
const infoForce = ["insecure 😱","bad 😞","not bad 😐","solid 💪","very solid 🔥"]; 
const inputPassword = document.getElementById("password"); // Select inputs ( password and mail )
const inputEmail = document.getElementById("email");
const icon = document.getElementById("icon"); // Select FontAwesome Icon
const textForce = document.getElementById("text-force"); // Select Text
const divForce = document.getElementsByClassName("force");


inputPassword.addEventListener("keyup", (e) => {

    let passwordValue = e.target.value;
    let passwordInArray = passwordValue.split("");

    if(passwordInArray.length === 0){
        textForce.textContent = "";
        for (let i = 0; i < divForce.length; i++) {
            divForce[i].style.backgroundColor = "white";
        }
    } else if(passwordInArray.length <= 4){
        for (let i = 0; i < divForce.length; i++) {
            if(i === 0){
                divForce[0].style.backgroundColor = "#D63E1E";
            } else {
                divForce[i].style.backgroundColor = "white";
            }
        }
        textForce.textContent = infoForce[0];
    } else if (passwordInArray.length <= 6){
        for (let i = 0; i < divForce.length; i++) {
            if(i === 1){
                divForce[0].style.backgroundColor = "#D63E1E";
                divForce[1].style.backgroundColor = "#C7621F";
            } else {
                divForce[i].style.backgroundColor = "white";
            }
        }
        textForce.textContent = infoForce[1];
    } else if (passwordInArray.length <= 8){
        for (let i = 0; i < divForce.length; i++) {
            if(i === 2){
                divForce[0].style.backgroundColor = "#D63E1E";
                divForce[1].style.backgroundColor = "#C7621F";
                divForce[2].style.backgroundColor = "#CB8E1D";
            } else {
                divForce[i].style.backgroundColor = "white";
            }
        }
        textForce.textContent = infoForce[2];
    } else if (passwordInArray.length <= 12){
        for (let i = 0; i < divForce.length; i++) {
            if(i === 3){
                divForce[0].style.backgroundColor = "#D63E1E";
                divForce[1].style.backgroundColor = "#C7621F";
                divForce[2].style.backgroundColor = "#CB8E1D";
                divForce[3].style.backgroundColor = "#A7A71F";
            } else {
                divForce[i].style.backgroundColor = "white";
            }
        }
        textForce.textContent = infoForce[3];
    } else if (passwordInArray.length >= 14){
        for (let i = 0; i < divForce.length; i++) {
            if(i === 4){
                divForce[0].style.backgroundColor = "#D63E1E";
                divForce[1].style.backgroundColor = "#C7621F";
                divForce[2].style.backgroundColor = "#CB8E1D";
                divForce[3].style.backgroundColor = "#A7A71F";
                divForce[4].style.backgroundColor = "#3BB820";
            } else {
                divForce[i].style.backgroundColor = "white";
            }
        }
        textForce.textContent = infoForce[4];
    }
})


inputPassword.addEventListener("blur", (e) => {
    let passwordValue = e.target.value;
    let passwordInArray = passwordValue.split("");
    if(passwordInArray.length < 4){
        inputPassword.style.borderBottom = "4px solid red";
    } else {
        inputPassword.style.borderBottom = "4px solid green";
    }
})


inputPassword.addEventListener("focus", (e) => {
    inputPassword.style.borderBottom = "0px solid";
})


inputEmail.addEventListener("blur", (e) => {
    let emailValue = e.target.value;
    let regex = /\S+@\S+\.\S+/;
    if(emailValue.match(regex)){
        inputEmail.style.borderBottom = "4px solid green";
    } else {
        inputEmail.style.borderBottom = "4px solid red";
    }
})


inputEmail.addEventListener("focus",(e) => {
    inputEmail.style.borderBottom = "0px solid";
})


icon.addEventListener("click", () => {
    if(inputPassword.type === "password"){
        inputPassword.type = "text";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    } else {
        inputPassword.type = "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    }   
    
})
