//tabs
const tabsBtns = document.querySelectorAll('.tabs__btn')
const tabsBoxes = document.querySelectorAll('.tabs__content')

tabsBtns.forEach(btn => {
	btn.addEventListener('click', function () {
		Array.from(tabsBtns).map(el => el.classList.remove('active'))
		Array.from(tabsBoxes).map(el => el.classList.remove('active'))
		btn.classList.add('active')
		document.getElementById(btn.dataset.tabsContent).classList.add('active')
	})
})