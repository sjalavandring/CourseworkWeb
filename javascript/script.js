let menu = document.getElementById('menu-box');
let outerBurger = document.getElementById('outerBurger');
let innerBurger = document.getElementById('innerBurger');
let shadowBg = document.getElementById('shadowBg');
let menuExit = document.getElementById('menuExit');
let lang = document.getElementsByClassName('lang');


for (let i = 1; i < lang.length; i++) {
	lang[i].style.marginTop = (i * 10) + ((i-1) * 32) + 'px'
}


document.addEventListener("click", function(event){
	if (menu.classList.contains('inactive') && outerBurger.contains(event.target)) {
		menu.classList.toggle('inactive');
		shadowBg.classList.toggle('shadowBack');
	} else
	if (!menu.classList.contains('inactive') && (!menu.contains(event.target) || menuExit.contains(event.target) || innerBurger.contains(event.target))) {
		menu.classList.toggle('inactive');
		shadowBg.classList.toggle('shadowBack');
	}
})


document.getElementsByClassName('nav-lang')[0].addEventListener('click', function () {
	if (event.target.className == 'lang__item') {
		for (let i = 1; i < lang.length; i++) {
			lang[i].classList.toggle('inactive')
		}
	}
}) //Доделать изменение иконок

// document.querySelector('#getbutton').addEventListener('click', () => {getting()}) 
//Вывод данных с сервера на страницу

