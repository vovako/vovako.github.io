if (localStorage.getItem('theme') == 'dark') {
	switchTheme()
}

const switchThemeBtn = document.querySelector('.swich-theme')
switchThemeBtn.addEventListener('click', function () {
	switchTheme()
	if (localStorage.getItem('theme') == 'dark') {
		localStorage.setItem('theme', '')
	} else {
		localStorage.setItem('theme', 'dark')
	}
})



function switchTheme() {
	const switchable = document.querySelectorAll('[data-switchable]')
	switchable.forEach(el => {
		el.classList.toggle('darkTheme')
	})
}




