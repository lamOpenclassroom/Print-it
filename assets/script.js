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

//Parcourir l'array pour afficher les dots proportionellement au nombre d'images.
function dotElement() {
	for (let i = 0; i < numberOfSlide; i++) {
		dotsElement.insertAdjacentHTML("beforeend", `<div class="dot"></div>`);
	}
}
dotElement();

//Récupère un array de dot.
const dots = document.querySelectorAll(".dot");
console.log(dots);
//Fonction Slide du Texte et image.
const displaySlider = (numIndex = 0) => {
	const imgBanner = banner.firstElementChild;
	if (!imgBanner.classList.contains("banner-img")){
		banner.insertAdjacentHTML("afterbegin", `<img class="banner-img" src="./assets/images/slideshow/${slides[numIndex].image}"  alt="Image de Print-it">`);
		dots[0].classList.add("dot_selected");
	}else{
		imgBanner.setAttribute("src",`./assets/images/slideshow/${slides[numIndex].image}`);
	}
	paragraph.innerHTML = (slides[numIndex].tagLine);
	return numIndex;
}
let numIndex = displaySlider();

//Fonction dotSelected assigné à la méthode forEach.
function dotSelect(item) {
	item.classList.remove("dot_selected");
	dots[numIndex].classList.add("dot_selected");
}

//clic droit
arrowRight.addEventListener("click", (e) => {  
	numIndex++;
	if (numIndex >= numberOfSlide){
		numIndex = 0;
	}
	displaySlider(numIndex);
	dots.forEach(dotSelect); //Pour chaque item de mon tableau dot renvoyer la fonction dotSelect		
	console.log(numIndex);
});

//clic gauche
arrowLeft.addEventListener("click", (e) => {  
	numIndex--;
	if(numIndex < 0){
		numIndex = numberOfSlide -1;
	}
	displaySlider(numIndex);
	dots.forEach(dotSelect);	
	console.log(numIndex);
});



