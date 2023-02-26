const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const paragraph = document.querySelector("p");
const dotsElement = document.querySelector(".dots");
const numberOfSlide = slides.length;
const banner = document.getElementById("banner");
let count = 0;

//initialise les images à l'index 0
banner.insertAdjacentHTML("beforeend", `<img class="banner-img" src="./assets/images/slideshow/${slides[0].image}"  alt="Image de Print-it">`);
let image = document.querySelector(".banner-img");

function dotElement() {
	for (let i = 0; i < numberOfSlide; i++) {
		dotsElement.insertAdjacentHTML("beforeend", `<div class="dot"></div>`);
	}
}
dotElement();

//constante qui récupère un tableau de dot.
const dot = document.querySelectorAll(".dot");
console.log(dot)

//initialise l'index 0 à dot_selected
dot[0].classList.add("dot_selected");

//Slide des images
function displayImage(image) { 
	if (count == 0) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
	}
	else if (count == 1) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
		//console.log("count = 1 donc image =");
	} else if (count == 2) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
		//console.log("count = 2 donc image =");
	} else if (count == 3) {
		image = image.setAttribute("src", "./assets/images/slideshow/"+slides[count].image);
		//console.log("count = 3 donc image =");	
	}
}

//Slide du Texte
const displaySlider = (numIndex = 0) => {
	paragraph.innerHTML = (slides[numIndex].tagLine);
	return numIndex;
}
let numIndex = displaySlider();

//dot_selected
function dotSelect(item) {
	item.classList.remove("dot_selected")
	dot[numIndex].classList.add("dot_selected");
}

//Boucle infini vers la droite
function returnFirst(){
	if (numIndex >= numberOfSlide -1) {
		console.log("vous allez revenir à l'index 0");
		numIndex = -1;
		count = -1;
	}
}
arrowRight.addEventListener("click", returnFirst);

//Boucle infini vers la gauche
function returnLast(){
	if (numIndex <= 0) {
		console.log("vous allez revenir à l'index 3");
		numIndex = numberOfSlide;
		count = numberOfSlide;
	}
}
arrowLeft.addEventListener("click", returnLast); //Boucle si je clic à gauche et mon index et < ou = 0 => l'index renvoit 3

//clic droit
arrowRight.addEventListener("click", (e) => {  
	numIndex++;
	count++;
	displaySlider(numIndex);
	displayImage(image);
	dot.forEach(dotSelect); //Pour chaque item de mon tableau dot renvoyer la fonction dotSelect
	console.log(numIndex, count)
});

//clic gauche
arrowLeft.addEventListener("click", (e) => {  
	numIndex--;
	count--;
	displaySlider(numIndex);
	displayImage(image);
	dot.forEach(dotSelect);
	//returnLast() Erreur à ne plus refaire
	console.log(numIndex, count)
});



