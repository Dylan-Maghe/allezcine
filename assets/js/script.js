let age;
let login = document.querySelector("#login"); //variable contenant l'id "login" de l'index.html
let register = document.querySelector("register");
let accept = document.querySelector("#accept");
let refuse = document.querySelector("#refuse");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let userFirstName = document.querySelector("#user-firstname");
let userLastName = document.querySelector("#user-lastname");
let userEmail = document.querySelector("#user-email");
let userSubject = document.querySelector("#user-subject");
let userMessage = document.querySelector("#user-message");

let allowEntry = () => { // fonction qui autorise l'accès au site si l'utilisateur a +18ans
    age = prompt("Entrez votre âge SVP");
    console.log(age);
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

let openUserContact = () => { //fonction qui récupère les informations entrée par l'utilisateur dans la section contact us et qui ouvre un pop up avec ces données
    if (firstName.value == "" || lastName.value == "" || email.value == "" || subject.value == "" || message.value == "") {
        alert("Certains champs sont vides")
    }
    else {
        userFirstName.innerText = "First name: " + firstName.value;
        userLastName.innerText = "Last name: " + lastName.value;
        userEmail.innerText = "Email: " + email.value;
        userSubject.innerText = "Subject: " + subject.value;
        userMessage.innerText = "Message: " + message.value;
        document.querySelector(".bg-modal-contact").style.display = "flex";
    }
}

let closeUserContact = () => { // fonction ferme le pop up contact us
    document.querySelector(".bg-modal-contact").style.display = "none";
}

let contactFormulary = () => { // fonction qui affiche et masque le formulaire de contact à remplir
    if (document.querySelector(".send-message").disabled == true) {
    document.querySelector(".send-message").disabled = false;
    document.querySelector("#contact-button").innerText = "CLOSE";
    }
    else {
    document.querySelector(".send-message").disabled = true;
    document.querySelector("#contact-button").innerText = "OPEN";  
    }
    $(".contact-formulary").toggleClass("contact-formulary-active");
    $(".send-message").toggleClass("send-message-active");
}


allowEntry();
//home/user/Desktop/becode_projects/allezcine/index.html