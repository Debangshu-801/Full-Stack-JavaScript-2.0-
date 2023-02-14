//Task1
const navli=document.createElement("li");
const nava=document.createElement("a");
nava.setAttribute("herf","./demo");
navli.appendChild(nava);
nava.innerHTML='Hire Me';
const navitem=document.querySelector("header > nav > ul");
console.log(navitem);
navitem.appendChild(navli);
//Taks2

const src=document.querySelector(".search-field > input");
let h=src.setAttribute("placeholder","Search My Project");
//Task3
const hero=document.querySelectorAll(".hero-left-section > p > span")[1];
hero.innerHTML="a Emplyoee";
const hero1=document.querySelectorAll(".hero-left-section > p > span")[2];
hero1.innerHTML="iNeuron Intelligence Pvt. Ltd.";
console.log(hero);

//Task4

const img=document.querySelector(".hero-right-section > img");
// img.setAttribute("src","./")
console.log(img);

// Task5
const btn=document.createElement("button");
btn.innerText="Support Me";
const btnpos=document.getElementsByClassName("hero-right-section-btns")[0];
console.log(btnpos);
btnpos.appendChild(btn);