const header = document.querySelector('.header')
const openMenuBtn = document.querySelector('.header__menu-btn')
const menuEl = document.querySelector('.menu')
const closeMenuBtn = menuEl.querySelector('.menu__close-btn')
openMenuBtn.addEventListener('click', () => {
	menuEl.classList.add('active')
	document.body.style.overflow = 'hidden'
})
closeMenuBtn.addEventListener('click', () => {
	menuEl.classList.remove('active')
	document.body.style.overflow = null
})

const logo = document.querySelector('.logo')
logo.addEventListener('click', () => {
	scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

function updateMenuMarker() {
	const menuMarker = document.querySelector('.menu-marker')
	const activeItem = document.querySelector('.menu-item.active')
	menuMarker.style.width = activeItem.clientWidth + 'px'
	menuMarker.style.right = document.documentElement.clientWidth - activeItem.getBoundingClientRect().right + 'px'
	menuMarker.style.top = activeItem.getBoundingClientRect().bottom + 'px'
}

function sliderInit(selector) {
	const slider = document.querySelector(selector)
	const sliderSlides = slider.querySelectorAll('.slider__slide'),
		sliderLine = slider.querySelector('.slider__line'),
		sliderDots = slider.querySelectorAll('.slider__dot'),
		dotsWrapper = slider.querySelector('.slider__wrapper');

	// Автоматическое перелистывание слайдов
	const sliderDelay = 4000
	let timeout = setInterval(nextSlide, sliderDelay);
	let sliderCount = 0

	function nextSlide(index = null) {
		if (index !== null) {
			sliderCount = index
		} else {
			sliderCount >= sliderSlides.length - 1 ? sliderCount = 0 : sliderCount++
		}

		sliderLine.querySelector('.active').classList.remove('active')
		sliderLine.children[sliderCount].classList.add('active')

		dotsWrapper.querySelector('.active').classList.remove('active')
		dotsWrapper.children[sliderCount].classList.add('active')
	}

	sliderDots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			nextSlide(index)
			clearInterval(timeout)
			timeout = setInterval(nextSlide, sliderDelay);
		})
	})
}

function menuObserverInit() {
	const menuListEl = document.querySelector('.menu')
	const menuItems = menuListEl.querySelectorAll('.menu-item')
	const observedSections = document.querySelectorAll('.observed-section')

	const menuObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting && !menuListEl.classList.contains('lock')) {

				menuItems.forEach(item => {
					const id = item.dataset.target
					if (id === entry.target.id) {
						const curActive = menuListEl.querySelector('.menu-item.active')
						curActive.classList.remove('active')
						item.classList.add('active')
						updateMenuMarker()
					}
				})
			}
		})
	}, {
		threshold: 0.001,
		rootMargin: '-42% 0px'
	})
	observedSections.forEach(item => menuObserver.observe(item))
}

document.addEventListener('click', (evt) => {
	const target = evt.target
	const parent = target.parentElement
	const hasClass = (className) => target.classList.contains(className)

	if (hasClass('menu-item')) {
		if (hasClass('active')) return

		parent.querySelector('.active').classList.remove('active')
		target.classList.add('active')
		updateMenuMarker()

		const menuEl = target.closest('.menu')
		menuEl.classList.remove('active')
		document.body.style.overflow = null
		menuEl.classList.add('lock')
		setTimeout(() => {
			menuEl.classList.remove('lock')
		}, 1000)

		const targetSection = document.querySelector('#' + target.dataset.target)
		window.scrollTo({
			behavior: 'smooth',
			top: targetSection.offsetTop - header.clientHeight
		})
	}
})
window.addEventListener('load', () => {
	updateMenuMarker()
})
window.addEventListener('resize', () => {
	updateMenuMarker()
})

sliderInit('.radio-vibe-project .slider')
sliderInit('.crypto-pay-project .slider')
sliderInit('.dream-tour-project .slider')

menuObserverInit()

document.querySelector('.copyright-year').textContent = new Date().getFullYear()