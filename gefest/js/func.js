export default function func() {
	//modal window
	const allPopup = document.querySelectorAll('.popup')
	allPopup.forEach(popup => {
		popup.addEventListener('click', function (evt) {
			if (!evt.target.closest('.popup__content') || evt.target.classList.contains('popup__close')) {
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

	//slider
	
}