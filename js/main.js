
	// Timer object

	function Timer(currentMinutes, currentSeconds, minutesElement, secondsElement, timerName) {
		
		// Values received from current time on page
		var minutes = parseInt(currentMinutes);
		var seconds = parseInt(currentSeconds);
		var timerType = timerName;
		var status = "off";
		var completed = false;

		// Variable will get the number of minutes timer started
		var startMinutes = minutes;


	

		// var pageSeconds = document.getElementById("seconds");
		// var pageMinutes = document.getElementById("minutes");


		var pageSeconds = document.getElementById(secondsElement);
		var pageMinutes = document.getElementById(minutesElement);
		// var status = setStatus;

		this.addTime = function() {
			




			minutes +=1;

			startMinutes = minutes;


			belowTen();





		};

		this.minusTime = function() {
			minutes +=-1;
	

			startMinutes = minutes;


			belowTen();


			
			
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

		this.getStartMinutes = function() {
			return startMinutes;
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
					// startBreakTimer();
					// runningTimer = "break";

					timerCounter +=1;
					// alert(startMinutes);
					nextTimer();
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

				if (status == "off"){


					clearInterval(timer);


				}
					// } else if((status == "off") && (minutes == 0) && (seconds == 0)) {
					// 	breakTimer.startTimer();
					// }
				}, 1000);
			}

		};

		var stopTimer = function() {

			console.log(minutes);
			console.log(seconds);
				
				// if ((timerType = "pomodoro")  && (minutes == 0) && (seconds == 0))
				// {
				// 	breakTimer.startTimer();
				// }

				status = "off";
				console.log(breakTimer.getStatus());
				// console.log(pomodoro.getStatus());


				// Gives the start button an effect that it turned off 

				changeButtonStatus("start-button", "start-text", "#00e415");



				// Light up stop button

				changeButtonStatus("stop-button", "stop-text", "#350c1f");

				

				// nextTimer();



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





	// var status = "off";
	var runningTimer = "";

	// var numberOfTimers[];


	// Use this counter to track which timer is running
	// Even Number is pomodoro
	// Odd Number is break timer
	var timerCounter = 0;




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
	var pomodoro = new Timer(currentMinutes, currentSeconds, "minutes", "seconds", "pomodoro");


	// Get current values for Break Timer
	var breakMinutesId = document.getElementById("break-minutes");
	var breakSecondsId = document.getElementById("break-seconds");
	var breakTimerStatus = "off";

	var breakMinutes = breakMinutesId.innerHTML;
	var breakSeconds = breakSecondsId.innerHTML;


	// Create Break Timer Object

	var breakTimer = new Timer(breakMinutes, breakSeconds,"break-minutes", "break-seconds","break");



	// var timersArray = [];

	// timersArray.push(pomodoro);
	// timersArray.push(breakTimer);

	// // timersArray[0].startTimer();
	// timersArray[1].startTimer();


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

// function startBreakTimer() {


// 	breakTimer.startTimer();


// }










window.onload = function() {



};



function changeButtonStatus(button, text, color) {

	var disableButton = document.getElementById(button);
	var disableText = document.getElementById(text);

	disableButton.style.borderColor = color;
	disableText.style.color = color;


}


function nextTimer() {





	var pomMeter = document.getElementById("pom-meter");
	var pomMeterStr = pomMeter.innerHTML;

	console.log(pomMeterStr);
	var pomMeterLength = pomMeterStr.length
	console.log(pomMeterLength);



		if (timerCounter % 2 == 0 ) {


			// Try to refactor this code since it is WET
			// Get the minutes from when the timer first started and reset the timer to that time
			breakTimer.setMinutes(breakTimer.getStartMinutes());
			breakMinutesId.innerHTML = "0" + breakTimer.getStartMinutes();

			// console.log("minutes" + pomodoro.getMinutes());

			pomodoro.startTimer();

			startButton.addEventListener("click", pomodoro.startTimer);
			stopButton.addEventListener("click", function() {
				pomodoro.executeMethod(1);
			});
			resetButton.addEventListener("click", function() {
				pomodoro.executeMethod(2);
			});



			} else {




		
			if (pomMeterLength > 1) {
			pomMeterStr = pomMeterStr.slice(1);
			console.log('length' + pomMeterStr);
			pomMeter.innerHTML = pomMeterStr;
			} else {
				pomMeter.style.visibility = "hidden";
			}


				

			/* WORK HERE TOMORROW TO FIX INFINITE LOOP OF TIMERS RUNNING*/



			// Get the minutes from when the timer first started and reset the timer to that time
			pomodoro.setMinutes(pomodoro.getStartMinutes());
			minutesId.innerHTML = "0" + pomodoro.getStartMinutes();


			breakTimer.startTimer();

			startButton.addEventListener("click", breakTimer.startTimer);
			stopButton.addEventListener("click", function() {
				breakTimer.executeMethod(1);
			});
			resetButton.addEventListener("click", function() {
				breakTimer.executeMethod(2);
			});
			}



		}



	// if (timerCounter % 2 == 0 ) {


	// // Try to refactor this code since it is WET
	// // Get the minutes from when the timer first started and reset the timer to that time
	// breakTimer.setMinutes(breakTimer.getStartMinutes());
	// breakMinutesId.innerHTML = "0" + breakTimer.getStartMinutes();

	// // console.log("minutes" + pomodoro.getMinutes());

	// pomodoro.startTimer();

	// startButton.addEventListener("click", pomodoro.startTimer);
	// stopButton.addEventListener("click", function() {
	// 	pomodoro.executeMethod(1);
	// });
	// resetButton.addEventListener("click", function() {
	// 	pomodoro.executeMethod(2);
	// });



	// } else {



	// pomMeterStr = pomMeterStr.slice(1)
	// console.log('length' + pomMeterStr);
	// pomMeter.innerHTML = pomMeterStr;


	// // Get the minutes from when the timer first started and reset the timer to that time
	// pomodoro.setMinutes(pomodoro.getStartMinutes());
	// minutesId.innerHTML = "0" + pomodoro.getStartMinutes();


	// breakTimer.startTimer();

	// startButton.addEventListener("click", breakTimer.startTimer);
	// stopButton.addEventListener("click", function() {
	// 	breakTimer.executeMethod(1);
	// });
	// resetButton.addEventListener("click", function() {
	// 	breakTimer.executeMethod(2);
	// });
	// }






(function(){




})();



