"use strict";
const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");
myInput.addEventListener("input", newInput);

function newInput(e) {
  const newSpan = e.currentTarget.value;
  mySpan.textContent = newSpan;

  if (e.currentTarget.value === "") {
    mySpan.textContent = "незнакомец";
  }
}
