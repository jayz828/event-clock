
	// Timer object

	function Timer(currentMinutes, currentSeconds, setStatus, minutesElement, secondsElement) {
		
		// Values received from current time on page
		var minutes = parseInt(currentMinutes);
		var seconds = parseInt(currentSeconds);

		// var pageSeconds = document.getElementById("seconds");
		// var pageMinutes = document.getElementById("minutes");


		var pageSeconds = document.getElementById(secondsElement);
		var pageMinutes = document.getElementById(minutesElement);
		var status = setStatus;

		this.addTime = function() {
			
			// minutes +=1;
			// minutesId.innerHTML = minutes;

			console.log(minutes);

			// console.log(breakTimer.status);

			minutes +=1;
			// pageMinutes.innerHTML = minutes;



			belowTen();
			// if (minutes < 10 ) {
			// 	pageMinutes.innerHTML = "0" + minutes;

			// } else {
			// 	pageMinutes.innerHTML = minutes;
			// }




		};

		this.minusTime = function() {
			minutes +=-1;
	
			// if (minutes < 10 ) {
			// 	minutesId.innerHTML = "0" + minutes;

			// } else {
			// 	minutesId.innerHTML = minutes;
			// }

			// belowTen(minutes, pageMinutes);

			belowTen();

			// if (minutes !=0) {
			// 		minutes +=-1;
			
			// 		if (minutes < 10 ) {
			// 			pageMinutes.innerHTML = "0" + minutes;

			// 		} else {
			// 			pageMinutes.innerHTML = minutes;
			// 		}
			// }	
			
			
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

		var testMethod = function() {
			alert('test method');
		};

		this.getStatus = function() {
			return status;
		};
		this.setStatus = function(newStatus) {
			status = newStatus;
		};


		var increment = function() {







				// Seconds count down timer

				if (seconds == 00) {
					seconds = 60;
					minutes = minutes - 1;

					console.log(minutes);
					console.log(seconds);	

				if (minutes < 10 ) {
						pageMinutes.innerHTML = "0" + minutes;
					} else {
						pageMinutes.innerHTML = minutes;
					}

				} 

			
				seconds = seconds - 1;

				// If seonds values is less than to adds an extra 0 to display properly


				if (seconds < 10) {

					pageSeconds.innerHTML = "0" + seconds;
					
				} else {
					pageSeconds.innerHTML = seconds;
				
				}




				if ((minutes == 0) && (seconds == 0)) {
					stopTimer();
					startBreakTimer();
				}


				// pageMinutes.innerHTML = pomodoro.minutes;







		};

		this.startTimer = function() {

			if ((minutes == 0) && (seconds == 0)) {

				stopTimer();



				
			} else {
				status = "on";


				// Gives the start button an effect that it turned off 

				changeButtonStatus("start-button", "start-text", "#1a280b");



				// Light up stop button

				changeButtonStatus("stop-button", "stop-text", "#da0109");

		
			
				// timer increment
				var timer = setInterval(function() {
					increment();

				if (status == "off") {

					clearInterval(timer);

				}
					// } else if((status == "off") && (minutes == 0) && (seconds == 0)) {
					// 	breakTimer.startTimer();
					// }
				}, 1000);
			}

		};

		var stopTimer = function() {

				
				// if ((minutes == 0) && (seconds == 0))
				// {
				// 	breakTimer.startTimer();
				// } else {


				status = "off";


				// Gives the start button an effect that it turned off 

				changeButtonStatus("start-button", "start-text", "#00e415");



				// Light up stop button

				changeButtonStatus("stop-button", "stop-text", "#350c1f");




				// }



				





				



		};

			// This method is supposed to execute an internal method
			// Tried passing the parameter but am getting an error.  
			// For now will try passing in a number that will execute the matched method.
		this.executeMethod = function(funcNo) {

				if (funcNo == 1) {
					stopTimer();
				} else {
					resetTimer();
				}
				
		};

		var resetTimer = function() {
				minutes = 25;
				seconds = 0;

				minutesId.innerHTML = minutes;
				secondsId.innerHTML = seconds + "0";

		};

		var belowTen = function() {

				

				if (minutes < 10 ) {
					pageMinutes.innerHTML = "0" + minutes;

				} else {
					pageMinutes.innerHTML = minutes;
				}

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











	// Pomodoro Timer Controls
	var pomodoroPlus = document.getElementById("pomodoro-plus");
	var pomodoroMinus = document.getElementById("pomodoro-minus");

	// Break Timer Controls
	var breakPlus = document.getElementById("break-plus");
	var breakMinus = document.getElementById("break-minus");





	// var currentMinutes = document.getElementById("minutes").innerHTML;
	// var currentSeconds = document.getElementById("seconds").innerHTML;


	// Get current values for Main Timer
	var minutesId = document.getElementById("minutes");
	var secondsId = document.getElementById("seconds");
	var timerStatus = "off";
	var currentMinutes = minutesId.innerHTML;
	var currentSeconds = secondsId.innerHTML;



	// Create Main Timer Object
	var pomodoro = new Timer(currentMinutes, currentSeconds, timerStatus, "minutes", "seconds");


	// Get current values for Break Timer
	var breakMinutesId = document.getElementById("break-minutes");
	var breakSecondsId = document.getElementById("break-seconds");
	var breakTimerStatus = "off";

	var breakMinutes = breakMinutesId.innerHTML;
	var breakSeconds = breakSecondsId.innerHTML;


	// Create Break Timer Object

	var breakTimer = new Timer(breakMinutes, breakSeconds, breakTimerStatus,"break-minutes", "break-seconds");




	// Main Timer controls Event Listeners
	pomodoroPlus.addEventListener("click", pomodoro.addTime);
	pomodoroMinus.addEventListener("click", pomodoro.minusTime);

	// Break Timer Controls

	breakPlus.addEventListener("click", breakTimer.addTime);
	breakMinus.addEventListener("click", breakTimer.minusTime);


	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");
	var resetButton = document.getElementById("reset-button");

	startButton.addEventListener("click", pomodoro.startTimer);
	stopButton.addEventListener("click", function() {
		pomodoro.executeMethod(1);
	});
	resetButton.addEventListener("click", function() {
		pomodoro.executeMethod(2);
	});


	// alert(pomodoro.getMinutes());



	// var timer = {
	// 	minute: 25,
	// 	seconds: 59,
	// 	milliseconds: 1000,
	// 	timerStatus: "off"

	// };


// alert(pomodoro.constructor.name);

function startBreakTimer() {


	breakTimer.startTimer();
	console.log("pomodoro timer" + pomodoro.getStatus());

	breakTimer.setStatus("on");

	console.log("break timer" + breakTimer.getStatus());



}






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

	// var startButton = document.getElementById("start-button");
	// var stopButton = document.getElementById("stop-button");
	// var resetButton = document.getElementById("reset-button");

	// startButton.addEventListener("click", pomodoro.startTimer);
	// stopButton.addEventListener("click", stop);
	// resetButton.addEventListener("click", reset);

};



function changeButtonStatus(button, text, color) {

	var disableButton = document.getElementById(button);
	var disableText = document.getElementById(text);

	disableButton.style.borderColor = color;
	disableText.style.color = color;


}



// function start() {

// 	pomodoro.status = "on";






// 	// Gives the start button an effect that it turned off 

// 	changeButtonStatus("start-button", "start-text", "#1a280b");



// 	// Light up stop button

// 	changeButtonStatus("stop-button", "stop-text", "#da0109");

	

// 	// timer increment
// 	var timer = setInterval(function() {
// 		increment();

// 	if (pomodoro.status == "off") {

// 		clearInterval(timer);


// 		}
// 	}, 1000);





	
// }

// function increment() {




// 		var pageSeconds = document.getElementById("seconds");
// 		var pageMinutes = document.getElementById("minutes");

// 		// Seconds count down timer

// 		if (pomodoro.getSeconds() == 00) {
// 			pomodoro.setSeconds(60);
// 			pomodoro.setMinutes(pomodoro.getMinutes() - 1);

// 			console.log(pomodoro.getMinutes());
// 			console.log(pomodoro.getSeconds());	

// 		if (pomodoro.getMinutes() < 10 ) {
// 				pageMinutes.innerHTML = "0" + pomodoro.getMinutes();
// 			} else {
// 				pageMinutes.innerHTML = pomodoro.getMinutes();
// 			}

// 		} 

	
// 		pomodoro.setSeconds(pomodoro.getSeconds() - 1);

// 		// If seonds values is less than to adds an extra 0 to display properly


// 		if (pomodoro.getSeconds() < 10) {

// 			pageSeconds.innerHTML = "0" + pomodoro.getSeconds();
			
// 		} else {
// 			pageSeconds.innerHTML = pomodoro.getSeconds();
		
// 		}




// 		if ((pomodoro.getMinutes() == 0) && (pomodoro.getSeconds == 0)) {
// 			stop();
// 		}


// 		// pageMinutes.innerHTML = pomodoro.minutes;





// }

// function stop() {

// 	pomodoro.status = "off";

// 	// Gives the start button an effect that it turned off 

// 	changeButtonStatus("start-button", "start-text", "#00e415");



// 	// Light up stop button

// 	changeButtonStatus("stop-button", "stop-text", "#350c1f");


// }


// function reset() {
// 	pomodoro.minutes = 25;
// 	pomodoro.seconds = 1;
// 	// pomodoro.status = "off";
// }





// function reset() {

// }

// function stop() {
// 	timerStatus = "off";
// }
