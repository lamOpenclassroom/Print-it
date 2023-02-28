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

//inclure la balise img dans mon HTML et initialiser les images à l'index 0.
banner.insertAdjacentHTML("beforeend", `<img class="banner-img" src="./assets/images/slideshow/${slides[0].image}"  alt="Image de Print-it">`);
//récupèrer la balise img.
const image = document.querySelector(".banner-img");

//Parcourir l'array pour afficher les dots proportionellement au nombre d'images.
function dotElement() {
	for (let i = 0; i < numberOfSlide; i++) {
		dotsElement.insertAdjacentHTML("beforeend", `<div class="dot"></div>`);
	}
}
dotElement();

//constante qui récupère un tableau de dot.
const dot = document.querySelectorAll(".dot");
console.log(dot);

//initialiser le format dot_selected à l'index 0. 
dot[0].classList.add("dot_selected");

//Fonction Slide du Texte et image.
const displaySlider = (numIndex = 0) => {
	paragraph.innerHTML = (slides[numIndex].tagLine);
	image.setAttribute("src", "./assets/images/slideshow/"+slides[numIndex].image);
	return numIndex;
}
let numIndex = displaySlider();

//Fonction dotSelected à assigner à la méthode forEach.
function dotSelect(item) {
	item.classList.remove("dot_selected")
	dot[numIndex].classList.add("dot_selected");
}

//Fonction Boucle infini vers la droite assignée à la fonction (anonyme) click.
function returnFirst(){
	if (numIndex >= numberOfSlide -1) {
		console.log("vous allez revenir à l'index 0");
		numIndex = -1;
	}
}
arrowRight.addEventListener("click", returnFirst);

//Fonction Boucle infini vers la gauche assignée à la fonction (anonyme) click.
function returnLast(){
	if (numIndex <= 0) {
		console.log("vous allez revenir au dernier index");
		numIndex = numberOfSlide;
	}
}
arrowLeft.addEventListener("click", returnLast); 

//clic droit
arrowRight.addEventListener("click", (e) => {  
	numIndex++;
	displaySlider(numIndex);
	dot.forEach(dotSelect); //Pour chaque item de mon tableau dot renvoyer la fonction dotSelect
	console.log(numIndex);
});

//clic gauche
arrowLeft.addEventListener("click", (e) => {  
	numIndex--;
	displaySlider(numIndex);
	dot.forEach(dotSelect);
	console.log(numIndex);
});



