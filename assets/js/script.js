let age;
let login = document.querySelector("#login"); //variable contenant l'id "login" de l'index.html
let register = document.querySelector("register");
let accept = document.querySelector("#accept");
let refuse = document.querySelector("#refuse");

let allowEntry = () => { // fonction qui autorise l'accès au site si l'utilisateur a +18ans
    age = prompt("Entrez votre âge SVP");
    if (age < 18 || age == null) {
        document.location.replace("https://www.imdb.com/"); // redirige l'utilisateur vers ce site si il a moins de 18ans
    }
}


let acceptCookies = () => { //fonction qui ferme le pop up cookies si l'utilisateur clique sur accepter
    document.querySelector(".bg-modal-cookies").style.display = "none";
}

let refuseCookies = () => { //fonction qui ferme le pop up cookies si l'utilisateur clique sur refuser
    document.querySelector(".bg-modal-cookies").style.display = "none";
}

let openLoginFormulary = () => { //fonction qui ouvre le formulaire Login
    document.querySelector(".bg-modal-login").style.display = "flex";
}


let openRegisterFormulary = () => { //fonction qui ouvre le formulaire register
    document.querySelector(".bg-modal-login").style.display = "none";
    document.querySelector(".bg-modal-register").style.display = "flex";
}

let closeRegisterFormulary = () => { //fonction qui ferme le formulaire register
    document.querySelector(".bg-modal-register").style.display = "none";
}

let closeLoginFormulary = () => { // fonction qui ferme le formulaire login
    document.querySelector(".bg-modal-login").style.display = "none";
}

allowEntry();
//home/user/Desktop/becode_projects/allezcine/index.html