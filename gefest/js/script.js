
//modal window
const allPopup = document.querySelectorAll('.popup')
allPopup.forEach(popup => {
	popup.addEventListener('click', function (evt) {
		if (!evt.target.closest('.popup__dialog') || evt.target.classList.contains('popup__close')) {
			document.body.style.overflow = 'visible'
			popup.classList.remove('popup_active')
		}
	})

	const popupShowBtns = document.querySelectorAll(`[data-popup-id="${popup.id}"]`)
	for (const btn of popupShowBtns) {
		btn.addEventListener('click', function () {
			document.body.style.overflow = 'hidden'
			popup.classList.add('popup_active')
		})
	}
})

//dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
	const ddSelect = dropdown.querySelector('.dropdown__select')
	const ddList = dropdown.querySelector('.dropdown__list')
	const ddBtns = ddList.querySelectorAll('.dropdown__btn')

	ddSelect.addEventListener('click', function () {
		ddSelect.classList.toggle('dropdown__select_active')
		ddList.classList.toggle('dropdown__list_active')
	})
	ddBtns.forEach(btn => {
		btn.addEventListener('click', function () {
			ddSelect.classList.remove('dropdown__select_active')
			ddList.classList.remove('dropdown__list_active')
			ddSelect.innerHTML = ''
			ddSelect.append(btn.cloneNode(true))
		})
	})
})




//price-tabs
const tabBtns = document.querySelectorAll('.prices-tabs__btn')
const tabPanes = document.querySelectorAll('.prices-tabs__pane')

tabBtns.forEach((btn, i) => {
	btn.addEventListener('mouseover', function(){
		for (const btn of tabBtns){
			btn.classList.remove('prices-tabs__btn_active')
		}
		for (const pane of tabPanes){
			pane.classList.remove('prices-tabs__pane_show')
		}

		btn.classList.add('prices-tabs__btn_active')
		tabPanes[i].classList.add('prices-tabs__pane_show')
	})
})

//dropdown-prices
const ddList = document.querySelector('.dropdown-prices__list')
const ddBtns = ddList.querySelectorAll('.dropdown-prices__btn')
ddBtns.forEach((btn, i) => {
	btn.addEventListener('click', function(){
		for (const btn of tabBtns) {
			btn.classList.remove('prices-tabs__btn_active')
		}
		for (const pane of tabPanes) {
			pane.classList.remove('prices-tabs__pane_show')
		}
		tabPanes[i].classList.add('prices-tabs__pane_show')
	})
})


//slider
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
new Swiper('.standards__slider', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

