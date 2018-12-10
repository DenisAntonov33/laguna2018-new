var modalWindow = document.querySelector(".modal-window");
var btn = document.querySelector(".btn-open");
var overlay = document.querySelector(".modal-overlay");
var btnClose = document.querySelector(".modal-window__close");
var minus = document.querySelector(".btn-minus");
var plus = document.querySelector(".btn-plus");
var guestAmount = document.querySelector("#guest-amount");
var number = 2


btn.addEventListener("click", function () {
	overlay.classList.add("open");
	modalWindow.classList.add("open");
})

btnClose.addEventListener("click", function () {
	overlay.classList.remove("open");
	modalWindow.classList.remove("open");
})

plus.addEventListener("click", function (e) {
	e.preventDefault()
	if (number < 10) {
		number++
		if (number >= 10) plus.classList.add("disabled");
	}
	if (number > 1) minus.classList.remove("disabled");
	guestAmount.innerHTML = number;
})

minus.addEventListener("click", function (e) {
	e.preventDefault()
	if (number > 1) {
		number--
		if (number <= 1) minus.classList.add("disabled");
	}
	if (number < 10) plus.classList.remove("disabled");
	guestAmount.innerHTML = number;
})