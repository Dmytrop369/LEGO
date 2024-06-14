let settingsList = document.querySelector(".settings__list")
let iframe = document.querySelector("iframe")
let modal = document.querySelector(".modal")

settingsList.addEventListener("click", (event) => {
	let clickedBtn = event.target.closest("button")

	if (clickedBtn) {
		let videoLink = clickedBtn.parentElement.dataset.link
		iframe.src = videoLink
		modal.classList.add("active")
	}
})

modal.addEventListener("click", (event) => {
	modal.classList.remove("active")
	iframe.src = iframe.src;
})