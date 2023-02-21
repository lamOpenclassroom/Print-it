const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"point":"<div class='dot'></div>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"point":"<div class='dot'></div>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"point":"<div class='dot'></div>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"point":"<div class='dot'></div>"
	}
]
//console.log(slides[0].image);
//console.log(slides[0].tagLine);
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let image = document.querySelector(".banner-img");
let paragraph = document.querySelector("p");
let dots = document.querySelector(".dots");
let tabSlide = slides.length;
let banner = document.getElementById("banner");
let count = 0;
//console.log(paragraph);
//console.log(paragraph.innerHTML);


//utilise les for pour afficher les dots, faire une boucle sur le nombre d'entrée qui feront apparaitre les dots

//dots Inclure les Div dot dans la div Dots
for (let i = 0; i < tabSlide;i++){
	//console.log(slides[i].point);
	dots.insertAdjacentHTML("beforeend",`${slides[i].point}`); 
}
let divDot = document.querySelectorAll('.dot');
let lastDot = divDot[3];
let firstDot = divDot[0];
console.log(lastDot)
console.log(firstDot)
console.log(tabSlide)
//clic droit
arrowRight.addEventListener("click", (e)=>{
	console.log(index)
	console.log(numIndex)
	numIndex++;
	index++;
	displaySlider(numIndex);
	deletDotR();
	lastClick();
	return numIndex,index;
});

//clic gauche
arrowLeft.addEventListener("click", (e)=>{
	numIndex--;	
	index--;
	displaySlider(numIndex);
	deletDotL();
	firstClick();
	//console.log(count);
});

const displaySlider =(numIndex)=>{ 
	//console.log(numIndex);
	banner.insertAdjacentHTML("beforeend",`<img class="banner-img" src="./assets/images/slideshow/${slides[numIndex].image}" alt="${slides[numIndex].image}">`);
	paragraph.innerHTML = (slides[numIndex].tagLine);
	divDot[numIndex].classList.add("dot_selected");
	return numIndex; 
}
let numIndex = displaySlider(0);

function deletDotL(){
	for(slides[numIndex].point of slides){
		divDot[numIndex+1].classList.remove("dot_selected");
	}
}

function deletDotR(){
	for(slides[numIndex].point of slides){
		divDot[index].classList.remove("dot_selected");
	}return index;
}
let index = -1;

function lastClick(){
	if (numIndex >= tabSlide -1){
		numIndex = -1;
	}return numIndex;	
}

function firstClick(){
	if (numIndex <= 0){
		numIndex = +1;
	}
}





	







