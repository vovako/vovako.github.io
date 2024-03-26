import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

//sliders
new Swiper('.dreams-slider', {
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 500,
	}
});

new Swiper('.meet-slider', {

	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 400,
	},
});

const sliderDay2 = new Swiper('.day2-slider', {
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 16,
	slidesPerView: 'auto',
});
if (window.innerWidth >= 991.98) {
	sliderDay2.changeLanguageDirection('rtl')
}

const sliderDay3 = new Swiper('.day3-slider', {
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 600,
	}
});
if (window.innerWidth >= 991.98) {
	sliderDay3.changeLanguageDirection('rtl')
} else {
	const next = document.querySelector('.day3-slider .slider__next-btn')
	const prev = document.querySelector('.day3-slider .slider__prev-btn')
	next.classList.remove('circle-arrow_dark')
	prev.classList.remove('circle-arrow_dark')
}

new Swiper('.day4-slider', {

	// Navigation arrows
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 400,
	},
});

new Swiper('.day5-slider', {

	// Navigation arrows
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 400,
	},
});

new Swiper('.day6-slider', {

	// Navigation arrows
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 30,
	slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: false,
		depth: 400,
	},
});

const sliderDay7 = new Swiper('.day7-slider', {
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 16,
	slidesPerView: 'auto',
});
if (window.innerWidth >= 991.98) {
	sliderDay7.changeLanguageDirection('rtl')
}

new Swiper('.team-slider', {
	navigation: {
		nextEl: '.slider__next-btn',
		prevEl: '.slider__prev-btn',
	},
	spaceBetween: 48,
	slidesPerView: 'auto',
});

//menu
const menuBtn = document.querySelector('.menu-icon')
const menu = document.querySelector('.md-menu')
const menuClose = document.querySelector('.md-menu__close')
menuBtn.addEventListener('click', function () {
	menu.classList.add('active')
	document.body.style.overflow = 'hidden'
})
menuClose.addEventListener('click', function () {
	menu.classList.remove('active')
	document.body.style.overflow = null
})

document.addEventListener('click', (evt) => {
	const target = evt.target
	const hasClass = (className) => target.classList.contains(className)

	if (hasClass('header__menu-item') || hasClass('header__btn')) {
		const sectionTarget = document.querySelector('#' + target.dataset.target)
		menu.classList.remove('active')
		document.body.style.overflow = null
		sectionTarget.scrollIntoView({
			behavior: 'smooth'
		})
	}
})