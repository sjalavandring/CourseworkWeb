let slider = document.getElementById('slider');
let bookbutton = document.getElementById('bookbutton');
let sliderback = document.getElementById('sliderBack');
let sliderClose = document.getElementById('sliderClose');
let submit = document.getElementById('submitButton');

let points = document.getElementsByClassName('formSlider-points__item');
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener('click', function() {
		currentSlide(i+1);
	})
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}

function currentSlide(n) {
	if ( !slider.classList.contains('inactive') && n >= slideIndex && !validate() ) return 0
    showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("bookForm-slider");
	let points = document.getElementsByClassName("formSlider-points__item");
	if (n > slides.length) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < points.length; i++) {
        points[i].classList.remove('points__active');
    }
	slides[slideIndex - 1].style.display = "block";
	points[n-1].classList.add('points__active');
}


slider.addEventListener('click', function () {
	if (event.target.classList.contains("bookForm__button")) {
		if (!validate()) return 0 //Проверка правильности ввеленных данных в форме
		nextSlide()
	}
})

sliderback.addEventListener('click', function() {
	currentSlide(1);
});

document.addEventListener("click", function(event){
	if (slider.classList.contains('inactive') && bookbutton.contains(event.target)) {
		currentSlide(1);
		slider.classList.toggle('inactive');
		shadowBg.classList.toggle('shadowBack');
		removeInvalid() 
	} else 
	if (!slider.classList.contains('inactive') && (!slider.contains(event.target) || sliderClose.contains(event.target))) {
		slider.classList.toggle('inactive');
		shadowBg.classList.toggle('shadowBack');
	} else 
	if (!slider.classList.contains('inactive') && submit.contains(event.target)) {
		if(!validate()) return 0
		slider.classList.toggle('inactive');
		shadowBg.classList.toggle('shadowBack');
	}
})

let radioPoints = document.getElementsByClassName('radio');    //Возможность убирать отметку с radio
for (let point = 0; point < radioPoints.length; point++) {
	radioPoints[point].addEventListener('mousedown', function() {
		this.isChecked=this.checked;
	})
	radioPoints[point].addEventListener('click', function() {
		this.checked=!this.isChecked;
	})
}

