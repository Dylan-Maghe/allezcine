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
    if (age < 18) {
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


//allowEntry();

// JEREMY

let genderAffichage = (type, categ) => {
    $(`#${type}-${categ}`).click(function () {
        $(`.gender-${categ}`).removeClass('active');
        $(this).addClass('active');

        $(`.featured-${categ}`).hide();

        if (type == 'all') {
            $(`.featured-${categ}`).show();
            clic++
        } else {
            $(`.${type}-${categ}`).show();
        }
    });
};

// Séries
genderAffichage('all', 'series');
genderAffichage('comedies', 'series');
genderAffichage('police', 'series');
genderAffichage('autres', 'series');
// Films
genderAffichage('all', 'films');
genderAffichage('action', 'films');
genderAffichage('comedie', 'films');
genderAffichage('autres', 'films');


let moreAffichage = (classe) => {
    let tableau = $(`.${classe}`).length;

    for (let i = 12; i < tableau; i++) {
        $(`.${classe}`).eq(i).hide();
    }

    $(`#more-${classe}`).click(function () {
        for (let i = 12; i < tableau; i++) {
            $(`.${classe}`).eq(i).toggle();
        }

        if (clic % 2 == 0) {
            $(this).text('Moins de films');
        } else {
            $(this).text('Plus de films');
        }
        clic++;
    })
}

moreAffichage('featured-films');
moreAffichage('featured-series');

var scrolltotop = { setting: { startline: 100, scrollto: 0, scrollduration: 1e3, fadeduration: [500, 100] }, controlHTML: '<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow86.png" />', controlattrs: { offsetx: 5, offsety: 5 }, anchorkeyword: "#top", state: { isvisible: !1, shouldvisible: !1 }, scrollup: function () { this.cssfixedsupport || this.$control.css({ opacity: 0 }); var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto); t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({ scrollTop: t }, this.setting.scrollduration) }, keepfixed: function () { var t = jQuery(window), o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx, s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety; this.$control.css({ left: o + "px", top: s + "px" }) }, togglecontrol: function () { var t = jQuery(window).scrollTop(); this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]), this.state.isvisible = !1) }, init: function () { jQuery(document).ready(function (t) { var o = scrolltotop, s = document.all; o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({ position: o.cssfixedsupport ? "fixed" : "absolute", bottom: o.controlattrs.offsety, right: o.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "Scroll to Top" }).click(function () { return o.scrollup(), !1 }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({ width: o.$control.width() }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () { return o.scrollup(), !1 }), t(window).bind("scroll resize", function (t) { o.togglecontrol() }) }) } }; scrolltotop.init();