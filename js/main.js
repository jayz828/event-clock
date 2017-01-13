

// Values for timer

var setMinutes = document.getElementById('minutes').innerHTML;
var setSeconds = document.getElementById('seconds').innerHTML;


// Event listeners

var startButton = document.getElementById('start-button');
var resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', start);

var timeTest = 60;



var timerStatus = "off";





function start() {
	timerStatus = "on";
	var timer = setInterval(function() {
		increment();
	}, 1000);


	
}

function increment() {
		
		var testSeconds = document.getElementById('minutes');

		timeTest = timeTest -1;
		document.getElementById('seconds').innerHTML = 	timeTest;
		// setSeconds = timeTest;
		// clearInterval(timer);

		// alert(setSeconds);

		// testSeconds.value = "59";
		// alert(setSeconds);
		// console.log(setSeconds);

}

// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
