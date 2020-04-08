"use strict";

const myInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

myInput.addEventListener("input", bar);

function bar() {
  spanText.style.fontSize = myInput.value + "px";
}
