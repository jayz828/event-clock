

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
	
	setInterval(function() {
		increment();
	}, 1000);

	
}

function increment() {
		

		timeTest = timeTest -1;
		setSeconds = "59";
		// alert(setSeconds);
		console.log(timeTest);

}

// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
