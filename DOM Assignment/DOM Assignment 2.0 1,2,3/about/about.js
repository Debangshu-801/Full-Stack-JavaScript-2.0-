
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
//Task 01
const project=document.querySelector("header > nav > ul");
project.querySelectorAll("li")[2].innerText="Projects";

const color=document.querySelectorAll(".accordian > h3");
console.log([...color].map(cc =>cc.style.backgroundColor='lightblue'));
//Task 02

const div=document.createElement('div');
div.setAttribute("class","accordian");
const h1=document.createElement('h3');
h1.innerText="Skills";
const p=document.createElement('p');
p.innerText='I posses very good command over the Full Stack Development technologies like MERN which can seen in my work over Git Hub.';
const pos=document.querySelector(".accordian-wrapper");
pos.appendChild(div);
div.append(h1,p);
// console.log(div.appendChild(h1));
const colorfive=document.querySelectorAll(".accordian > h3")[4];
colorfive.setAttribute("style","backgroundColor: red");


colorfive.addEventListener("click", () => {
  let para = colorfive.nextElementSibling;
  if (para.style.display === "block") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
});
