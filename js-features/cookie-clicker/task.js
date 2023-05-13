const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let value = 0;

cookie.onclick = function () {
	value++;
	clickerCounter.textContent = value;
	if (value % 2 == 0) {
		cookie.width = 250;
	} else {
		cookie.width = 180;
	}
}