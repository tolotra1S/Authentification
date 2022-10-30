var dark = document.querySelector(".dark");
var tsydark = document.querySelector(".tsydark");
var container= document.querySelector(".container");
var cont_container=document.querySelector(".cont-container");
var up = document.querySelector(".up");
var put = document.querySelector(".put");
var put1 = document.querySelector(".put1");
var put2 = document.querySelector(".put2");
var username=document.querySelector(".username");
var email=document.querySelector(".email");
var password=document.querySelector(".password");
var button = document.querySelector(".button");
var but = document.querySelector(".but");
var membre = document.querySelector(".membre");
dark.addEventListener('click', function(){
    container.classList.add("container-dark");
    cont_container.classList.add("cont-container-dark");
    up.classList.add("up-dark");
    put.classList.add("put-dark");
    put1.classList.add("put1-dark");
    put2.classList.add("put2-dark");
    username.classList.add("username-dark");
    email.classList.add("email-dark");
    password.classList.add("password-dark");
    button.classList.add("button-dark");
    but.classList.add("but-dark");
    membre.classList.add("membre-dark");
    dark.classList.add("dark-dark");
    console.log("mandeha tsara")
})
tsydark.addEventListener('click', function(){
    container.classList.remove("container-dark");
    cont_container.classList.remove("cont-container-dark");
    up.classList.remove("up-dark");
    put.classList.remove("put-dark");
    put1.classList.remove("put1-dark");
    put2.classList.remove("put2-dark");
    username.classList.remove("username-dark");
    email.classList.remove("email-dark");
    password.classList.remove("password-dark");
    button.classList.remove("button-dark");
    but.classList.remove("but-dark");
    membre.classList.remove("membre-dark");
    dark.classList.remove("dark-dark");
    console.log("mandeha tsara")
})
