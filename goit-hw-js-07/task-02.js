"use strict";

const products = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.forEach((ingradient) => {
  const createli = document.createElement("li");
  createli.textContent = ingradient;
  fragment.appendChild(createli);
});

products.appendChild(fragment);