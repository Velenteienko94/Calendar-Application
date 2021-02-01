"use strict";

import "./global.scss";

console.log("hello world");
const h1 = document.querySelector("h1");
h1.style.color = "red";
const h2 = document.createElement("h2");
h2.innerText = "Hello Mate, glad to see you here";
document.body.appendChild(h2);
h2.classList.add("centerPosition");
h2.classList.add("Blue-Color");
console.log(h2);
