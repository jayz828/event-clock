



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
	resetButton.addEventListener("click", reset);

	var pomodoroPlus = document.getElementById("pomodoro-plus");
	var pomodoroMinus = document.getElementById("pomodoro-minus");

	pomodoroPlus.addEventListener("click", addTime);
	pomodoroMinus.addEventListener("click", minusTime);




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

	

	// timer increment
	var timer = setInterval(function() {
		increment();

	if (pomodoro.status == "off") {

		clearInterval(timer);


		}
	}, 1000);





	
}

function increment() {




		var pageSeconds = document.getElementById("seconds");
		var pageMinutes = document.getElementById("minutes");

		// Seconds count down timer

		if (pomodoro.seconds == 00) {
			pomodoro.seconds  = 60;
			pomodoro.minutes = pomodoro.minutes - 1;

			console.log(pomodoro.minutes);	

		if (pomodoro.minutes < 10 ) {
				pageMinutes.innerHTML = "0" + pomodoro.minutes;
			} else {
				pageMinutes.innerHTML = pomodoro.minutes;
			}

		} 

	
		pomodoro.seconds = pomodoro.seconds - 1;

		// If seonds values is less than to adds an extra 0 to display properly


		if (pomodoro.seconds < 10) {

			pageSeconds.innerHTML = "0" + pomodoro.seconds;
			
		} else {
			pageSeconds.innerHTML = pomodoro.seconds;
		
		}




		if ((pomodoro.minutes == 0) && (pomodoro.seconds == 0)) {
			stop();
		}


		// pageMinutes.innerHTML = pomodoro.minutes;





}

function stop() {

	pomodoro.status = "off";

	// Gives the start button an effect that it turned off 

	changeButtonStatus("start-button", "start-text", "#00e415");



	// Light up stop button

	changeButtonStatus("stop-button", "stop-text", "#350c1f");


}


function reset() {
	pomodoro.minutes = 25;
	pomodoro.seconds = 1;
	// pomodoro.status = "off";
}


function addTime() {
	alert('works');

}


// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
