



	// var timer = {
	// 	minute: 25,
	// 	seconds: 59,
	// 	milliseconds: 1000,
	// 	timerStatus: "off"

	// };


function timer(minutes, seconds, milliseconds, status) {
	this.minutes = minutes;
	this.seconds = seconds;
	this.milliseconds = milliseconds;
	this.status = status;
}


var timerStatus = "off";
var setMinutes = document.getElementById("minutes").innerHTML;
var setSeconds = document.getElementById("seconds").innerHTML;
var setMilliseconds = document.getElementById("milliseconds").innerHTML;


var pomodoro = new timer(setMinutes, setSeconds, setMilliseconds, timerStatus);



window.onload = function() {

	// Event listeners

	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");
	var resetButton = document.getElementById("reset-button");

	startButton.addEventListener("click", start);
	stopButton.addEventListener("click", stop);





};

function changeButtonStatus(button, text, color) {

	var disableButton = document.getElementById(button);
	var disableText = document.getElementById(text);

	disableButton.style.borderColor = color;
	disableText.style.color = color;


}



function start() {


	pomodoro.status = "on";
	console.log(pomodoro.status);


	// Gives the start button an effect that it turned off 

	changeButtonStatus("start-button", "start-text", "#1a280b");



	// Light up stop button

	changeButtonStatus("stop-button", "stop-text", "#da0109");
	// var stopButton = document.getElementById("stop-button");
	// var stopText = document.getElementById("stop-text");
	// stopButton.style.borderColor = "#da0109";
	// stopText.style.color = "#da0109";

	

	// timer increment
	var timer = setInterval(function() {
		increment();
	}, 1000);


	
}

function increment() {



		var pageSeconds = document.getElementById("seconds");
		var pageMinutes = document.getElementById("minutes");

		// var numberLength = pomodoro.seconds.toString();
		// var numberLength = numberLength.length

		

		// var currentSeconds = pomodoro.seconds;

		// console.log(currentSeconds);


		// console.log(currentSeconds.innerHTML);

		if (pomodoro.seconds == 00) {
			pomodoro.seconds  = 60;
			pomodoro.minutes = pomodoro.minutes - 1;
		} 


		// console.log(pomodoro.seconds);
	

		pomodoro.seconds = pomodoro.seconds - 1;

		if (pomodoro.seconds < 10) {

			pageSeconds.innerHTML = "0" + pomodoro.seconds;
			
		} else {
			pageSeconds.innerHTML = pomodoro.seconds;
		
		}


		pageMinutes.innerHTML = pomodoro.minutes;





}

function stop() {

}



// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
