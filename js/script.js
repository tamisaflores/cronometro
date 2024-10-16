const milisec = document.querySelector(".miliseconds")
const sec = document.querySelector(".seconds")
const min = document.querySelector(".minutes")
let miliNum = 0;
let secNum = 0;
let minNum = 0;
let INTERVAL;

function miliseconds() {
	miliNum++;
	if (miliNum < 10) {
		milisec.innerHTML = "0" + miliNum;
	}
	else {
		milisec.innerHTML = miliNum;
	}

	if (miliNum == 99) {
		miliNum = 0;
		seconds();
	}
}

function start() {
	clearInterval(INTERVAL);
	INTERVAL = setInterval(() => {
		miliseconds()
	}, 10)
}

function seconds() {
	secNum++
	if (secNum < 10) {
		sec.innerHTML = "0" + secNum;
	}
	else {
		sec.innerHTML = secNum;
	}

	if (secNum == 59) {
		secNum = 0;
		minutes();
	}
}

function minutes() {
	minNum++;
	if (minNum < 10) {
		min.innerHTML = "0" + minNum;
	}
	else {
		min.innerHTML = minNum;
	}
	if (minNum == 60) {
		minNum = 0;
		hours();
	}
}
function pause() {
	clearInterval(INTERVAL)


}
function reset() { 
	clearInterval(INTERVAL)
	milisec.innerHTML = "00"
    sec.innerHTML = "00"
	min.innerHTML = "00" 
}

