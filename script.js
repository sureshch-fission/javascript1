"use strict";

//navbar logo
document.querySelector(".nav-image").src = "./images/logo.jpg";

//creating dev elements
let recipes = document.querySelector(".recipes"),
  recipe1 = document.createElement("div"),
  recipe2 = document.createElement("div"),
  recipe3 = document.createElement("div"),
  recipe4 = document.createElement("div"),
  recipe5 = document.createElement("div");

//adding classes to dev elements
recipe1.classList.add("recipedetails");
recipe2.classList.add("recipedetails");
recipe3.classList.add("view");
recipe3.classList.add("recipedetails");
recipe4.classList.add("recipedetails");
recipe4.classList.add("view");
recipe5.classList.add("view");
recipe5.classList.add("recipedetails");

//appending elements
recipes.appendChild(recipe1);
recipes.appendChild(recipe2);
recipes.appendChild(recipe3);
recipes.appendChild(recipe4);
recipes.appendChild(recipe5);

//Adding Recipe images

let img = document.createElement("img"),
  img2 = document.createElement("img"),
  img3 = document.createElement("img"),
  img4 = document.createElement("img"),
  img5 = document.createElement("img");

function image1() {
  img.classList.add("img2");
  img.src = "./images/avacado.jpg";
}
function image2() {
  img2.classList.add("img2");
  img2.src = "./images/chicken-salad.jpg";
}

function image3() {
  img3.classList.add("img2");
  img3.src = "./images/icecream.jpg";
}

function image4() {
  img4.classList.add("img2");
  img4.src = "./images/chicken-salad.jpg";
}

function image5() {
  img5.classList.add("img2");
  img5.src = "./images/laddu.jpg";
}

image1(recipe1.appendChild(img));
image2(recipe2.appendChild(img2));
image3(recipe3.appendChild(img3));
image4(recipe4.appendChild(img4));
image5(recipe5.appendChild(img5));

//Adding Headeings

let heading = document.createElement("h1"),
  heading2 = document.createElement("h1"),
  heading3 = document.createElement("h1"),
  heading4 = document.createElement("h1"),
  heading5 = document.createElement("h1");
function header(Heading) {
  heading.innerHTML = `${Heading}`;
}
function header2(Heading) {
  heading2.innerHTML = `${Heading}`;
}

function header3(Heading) {
  heading3.innerHTML = `${Heading}`;
}

function header4(Heading) {
  heading4.innerHTML = `${Heading}`;
}

function header5(Heading) {
  heading5.innerHTML = `${Heading}`;
}
const recip1 = recipe1.appendChild(heading),
  recip2 = recipe2.appendChild(heading2),
  recip3 = recipe3.appendChild(heading3),
  recip4 = recipe4.appendChild(heading4),
  recip5 = recipe5.appendChild(heading5);

header("Avacado Salad", recip1);
header2("Chicken Salad", recip2);
header3("COLD STONE", recip3);
header4("Chicken Salad", recip4);
header5("Special Laddu", recip5);

//Adding buttons
let btn = document.createElement("a"),
  btn2 = document.createElement("a"),
  recipe2btn = document.createElement("a"),
  recipe2btn2 = document.createElement("a"),
  recipe3btn = document.createElement("a"),
  recipe3btn2 = document.createElement("a"),
  recipe4btn = document.createElement("a"),
  recipe4btn2 = document.createElement("a"),
  recipe5btn = document.createElement("a"),
  recipe5btn2 = document.createElement("a");

function button1() {
  btn.textContent = "Vegan";
  btn.classList.add("btn-2");
}

function button2() {
  btn2.textContent = "Palleo";
  btn2.classList.add("btn-2");
}

function recipe2button1() {
  recipe2btn.textContent = "Vegan";
  recipe2btn.classList.add("btn-2");
}
function recipe2button2() {
  recipe2btn2.textContent = "CHICKEN";
  recipe2btn2.classList.add("btn-2");
}

function recipe3button1() {
  recipe3btn.textContent = "Sweet";
  recipe3btn.classList.add("btn-2");
}
function recipe3button2() {
  recipe3btn2.textContent = "Cool";
  recipe3btn2.classList.add("btn-2");
}

function recipe4button1() {
  recipe4btn.textContent = "Non Veg";
  recipe4btn.classList.add("btn-2");
}
function recipe4button2() {
  recipe4btn2.textContent = "CHICKEN";
  recipe4btn2.classList.add("btn-2");
}

function recipe5button1() {
  recipe5btn.textContent = "Sweet";
  recipe5btn.classList.add("btn-2");
}
function recipe5button2() {
  recipe5btn2.textContent = "Honey";
  recipe5btn2.classList.add("btn-2");
}

button1(recipe1.appendChild(btn));
button2(recipe1.appendChild(btn2));
recipe2button1(recipe2.appendChild(recipe2btn));
recipe2button2(recipe2.appendChild(recipe2btn2));
recipe3button1(recipe3.appendChild(recipe3btn));
recipe3button2(recipe3.appendChild(recipe3btn2));
recipe4button1(recipe4.appendChild(recipe4btn));
recipe4button2(recipe4.appendChild(recipe4btn2));
recipe5button1(recipe5.appendChild(recipe5btn));
recipe5button2(recipe5.appendChild(recipe5btn2));

//Creating  Recipe divs
let recipe1div = document.createElement("div"),
  recipe2div = document.createElement("div"),
  recipe3div = document.createElement("div"),
  recipe4div = document.createElement("div"),
  recipe5div = document.createElement("div");

//recipe details

function recipedetails1() {
  recipe1div.classList.add("recipedetails");

  recipe1div.innerHTML = `
<ul class = 'recipe-ul'>
<li><i class="fas fa-fire"></i> 400 calories</li>
<li>🍴 NutriScore ® 92</li>
<li><i class="fas fa-star"></i> 4.8 rating(441)</li>
</ul>`;
  return recipe1div;
}

function recipedetails2() {
  recipe2div.classList.add("recipedetails");
  recipe2.appendChild(recipe2div);

  recipe2div.innerHTML = `
<ul class = 'recipe-ul'>
<li><i class="fas fa-fire"></i> 400 calories</li>
<li>🍴 NutriScore ® 92</li>
<li><i class="fas fa-star"></i> 4.8 rating(441)</li>
</ul>`;

  return recipe2div;
}

function recipedetails3() {
  recipe3div.classList.add("recipedetails");
  recipe3.appendChild(recipe3div);

  recipe3div.innerHTML = `
    <ul class = 'recipe-ul'>
    <li><i class="fas fa-fire"></i> 400 calories</li>
    <li>🍴 NutriScore ® 92</li>
    <li><i class="fas fa-star"></i> 4.8 rating(441)</li>
    </ul>`;
  return recipe3div;
}

function recipedetails4() {
  recipe4div.classList.add("recipedetails");
  recipe4.appendChild(recipe4div);

  recipe4div.innerHTML = `
    <ul class = 'recipe-ul'>
    <li><i class="fas fa-fire"></i> 400 calories</li>
    <li>🍴 NutriScore ® 92</li>
    <li><i class="fas fa-star"></i> 4.8 rating(441)</li>
    </ul>`;

  return recipe4div;
}

function recipedetails5() {
  recipe5div.classList.add("recipedetails");
  recipe5.appendChild(recipe5div);

  recipe5div.innerHTML = `
    <ul class = 'recipe-ul'>
    <li><i class="fas fa-fire"></i> 400 calories</li>
    <li>🍴 NutriScore ® 92</li>
    <li><i class="fas fa-star"></i> 4.8 rating(441)</li>
    </ul>`;

  return recipe5div;
}

recipedetails1(recipe1.appendChild(recipe1div));
recipedetails2(recipe1.appendChild(recipe1div));
recipedetails3(recipe1.appendChild(recipe1div));
recipedetails4(recipe1.appendChild(recipe1div));
recipedetails5(recipe1.appendChild(recipe1div));

//function for left & arrow

function leftArrow() {
  recipe1.style.display = "none";
  recipe2.style.display = "none";
  recipe3.style.display = "none";
  recipe4.style.display = "block";
  recipe5.style.display = "block";
}

function rightArrow() {
  recipe1.style.display = "none";
  recipe2.style.display = "none";
  recipe3.style.display = "block";
  recipe4.style.display = "block";
  recipe5.style.display = "none";
}

//adding Eventlisterner to arrow keys
document.querySelector(".left-arrow").addEventListener("click", leftArrow);
document.querySelector(".right-arrow").addEventListener("click", rightArrow);
