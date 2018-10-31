window.addEventListener('load', function() {
	init();
});

var DENOMI = 10;

function init() {
	document.getElementById('firstReel').innerHTML = '7';
	document.getElementById('secondReel').innerHTML = '7';
	document.getElementById('thirdReel').innerHTML = '7';
}

var first, second, third;
var MAX_VALUE = 8;
var credit = 50;

function start() {
	first = setInterval(rool1, 1);
	second = setInterval(rool2, 1);
	third = setInterval(rool3, 1);
	subtraction();
	lottery();
}

function lottery() {
	var i = Math.floor(Math.random() * DENOMI);
	if (i == 1) {
		document.getElementById('gogo').innerHTML = 'gogo';
	} else {
		document.getElementById('gogo').innerHTML = '';
	}
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
		= Math.floor(Math.random() * MAX_VALUE);
}

function rool2() {
	document.getElementById('secondReel').innerHTML
		= Math.floor(Math.random() * MAX_VALUE);
}

function rool3() {
	document.getElementById('thirdReel').innerHTML
		= Math.floor(Math.random() * MAX_VALUE);
}

function subtraction() {
	credit = credit - 3;
	if (credit < 2) {
		credit = 50;
	}
	document.getElementById('credit').innerHTML
		= credit;
}
