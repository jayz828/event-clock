
	// Timer object

	function Timer(currentMinutes, currentSeconds, setStatus) {
		var minutes = parseInt(currentMinutes);
		var seconds = parseInt(currentSeconds);
		var status = setStatus;

		this.addTime = function() {
			
			minutes +=1;
			secondsId.innerHTML = minutes;
		};

		this.minusTime = function() {

		};

		

		this.getMinutes = function() {
			return minutes;
		};

		this.getSeconds = function() {
			return seconds;
		};

		this.setMinutes = function(newMinutes) {
			minutes = newMinutes;
		};

		this.setSeconds = function(newSeconds) {
			seconds = newSeconds;
		};



	}


	// Object.__defineGetter__.call(Timer.prototype, "getMinutes", function() {
	// return minutes;
	// });

	// Object.__defineSetter__.call(Timer.prototype, "setMinutes", function(minutes) {
	// this.minutes = this.minutes + minutes;
	// });

	// Timer.prototype.getMinutes = function() {

	// return this.minutes;
	// }

	// Timer.prototype.getSeconds = function() {

	// return this.seconds;
	// }

	// Timer.prototype.setMinutes = function() {

	
	// }









	var pomodoroPlus = document.getElementById("pomodoro-plus");
	var pomodoroMinus = document.getElementById("pomodoro-minus");

	var secondsId = document.getElementById("minutes");

	var timerStatus = "off";
	var currentMinutes = document.getElementById("minutes").innerHTML;
	var currentSeconds = document.getElementById("seconds").innerHTML;

	var pomodoro = new Timer(currentMinutes, currentSeconds, timerStatus);

	pomodoroPlus.addEventListener("click", pomodoro.addTime);
	pomodoroMinus.addEventListener("click", pomodoro.minusTime);

	// alert(pomodoro.getMinutes());



	// var timer = {
	// 	minute: 25,
	// 	seconds: 59,
	// 	milliseconds: 1000,
	// 	timerStatus: "off"

	// };










// function Timer(setMinutes, setSeconds, setStatus) {
// 	this.minutes = setMinutes;
// 	this.seconds = parseInt(setSeconds);
// 	var status = setStatus;


// 	this.startTimer = function() {

// 	}

// 	this.stopTimer = function() {

// 	}

// 	this.resetTimer = function() {

// 	}

// 	this.addTime = function() {


// 		alert(this.minutes);
// 		// minutes = parseInt(minutes);
// 		// minutes = minutes+1;	
// 		// minutes = minutes+1;
// 		// document.getElementById("minutes").innerHTML = minutes;



// 	}

// 	this.minusTime = function() {

// 	}

// 	this.getMinutes = function() {
// 		return minutes;	
// 	}
// 	this.getSeconds = function() {
// 		return seconds;
// 	}

// 	this.setSeconds = function() {

// 	}
// }




window.onload = function() {





	// Event listeners

	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");
	var resetButton = document.getElementById("reset-button");

	startButton.addEventListener("click", start);
	stopButton.addEventListener("click", stop);
	resetButton.addEventListener("click", reset);





	




};



function changeButtonStatus(button, text, color) {

	var disableButton = document.getElementById(button);
	var disableText = document.getElementById(text);

	disableButton.style.borderColor = color;
	disableText.style.color = color;


}



function start() {

	pomodoro.status = "on";




	// console.log(pomodoro.getMinutes());


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

		if (pomodoro.getSeconds() == 00) {
			pomodoro.setSeconds(60);
			pomodoro.setMinutes(pomodoro.getMinutes() - 1);

			console.log(pomodoro.getMinutes());
			console.log(pomodoro.getSeconds());	

		if (pomodoro.getMinutes() < 10 ) {
				pageMinutes.innerHTML = "0" + pomodoro.getMinutes();
			} else {
				pageMinutes.innerHTML = pomodoro.getMinutes();
			}

		} 

	
		pomodoro.setSeconds(pomodoro.getSeconds() - 1);

		// If seonds values is less than to adds an extra 0 to display properly


		if (pomodoro.getSeconds() < 10) {

			pageSeconds.innerHTML = "0" + pomodoro.getSeconds();
			
		} else {
			pageSeconds.innerHTML = pomodoro.getSeconds();
		
		}




		if ((pomodoro.getMinutes() == 0) && (pomodoro.getSeconds == 0)) {
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





// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
