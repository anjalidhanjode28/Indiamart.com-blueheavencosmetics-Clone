var signupDB = JSON.parse(localStorage.getItem("signup")) || [];

document.querySelector("#signup").addEventListener("submit",signup);

function signup(event){
    event.preventDefault();

    var signObj = {
        name : document.querySelector("#name").value,
        contact : document.querySelector("#contact").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#pass").value,
    }

    signupDB.push(signObj);
    console.log(signupDB);
    localStorage.setItem("signup", JSON.stringify(signupDB));
}