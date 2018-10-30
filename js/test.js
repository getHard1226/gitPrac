window.addEventListener('load', function() {
	init();
});

function init() {
	document.getElementById('firstReel').innerHTML = '7';
	document.getElementById('secondReel').innerHTML = '7';
	document.getElementById('thirdReel').innerHTML = '7';
}

var first, second, third;

function start() {
	first = setInterval(rool1, 1);
	second = setInterval(rool2, 1);
	third = setInterval(rool3, 1);
}


function stop(arg) {
	if (arg == 1) {
		clearInterval(first);
	} else if (arg == 2) {
		clearInterval(second);
	} else {
		clearInterval(third);
	}
}

function rool1() {
	document.getElementById('firstReel').innerHTML
		= Math.floor(Math.random() * 8);
}

function rool2() {
	document.getElementById('secondReel').innerHTML
		= Math.floor(Math.random() * 8);
}

function rool3() {
	document.getElementById('thirdReel').innerHTML
		= Math.floor(Math.random() * 8);
}
