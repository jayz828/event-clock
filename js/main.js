

/**
 *
 *  PLACE CODE IN NAMED IIFE MAIN TO CLEAN UP GLOBAL NAME SPACE
 **/


(function Main(){



/**
 *
 *		Timer object
 *
 *  @params {String} nameOfObject, minutesElement, secondsElement, timerName
 *  @params {Integer} currentMinutes, currentSeconds
 *  
 *  
 **/


	function Timer(nameOfObject,currentMinutes, currentSeconds, minutesElement, secondsElement, timerName) {
		
		// Values received from current time on page
		var objectName = nameOfObject;
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
			


			minutes -=1;
	

			if (minutes < 1) {


				minutes = 1;

			} else {

			startMinutes = minutes;
	
			}


			// If minutes is below 10 add a zero to beginning.
			belowTen();





			
			
		};

		this.getName = function() {
			return objectName;
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

				// If seconds values is less than to adds an extra 0 to display properly


				if (seconds < 10) {

					pageSeconds.innerHTML = "0" + seconds;
					
				} else {
					pageSeconds.innerHTML = seconds;
				
				}




				if ((minutes == 0) && (seconds == 0)) {
					stopTimer();
					// startBreakTimer();
					// runningTimer = "break";

					console.log(extendedTimerCounter);

					timerCounter +=1;
					// alert(startMinutes);


					nextTimer();

				}





		};

		this.startTimer = function() {

			console.log(minutes + " " + seconds);
			console.log(extendedTimerCounter);

			if ((minutes == 0) && (seconds == 0)) {




				stopTimer();


				// stopTimer();

				
				
			} else {
				status = "on";



				// startButton.removeEventListener("click", )

				// Gives the start button an effect that it turned off 

				changeButtonStatus("start-button", "start-text", "#1a280b", "start-mobile");


				removeEvents("start-button");

				removeEvents("start-mobile");



				// Light up stop button

				changeButtonStatus("stop-button", "stop-text", "#da0109", "stop-mobile",0, objectName);

		
			
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



				addEvents("start-button", "start-mobile");

				status = "off";


				// Gives the start button an effect that it turned off 

				changeButtonStatus("start-button", "start-text", "#00e415", "start-mobile",0,objectName);



				// Light up stop button

				changeButtonStatus("stop-button", "stop-text", "#350c1f", "stop-mobile",0,objectName);

				


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



				console.log(secondsId);
				removeEvents("start-mobile");
				
				var pomMeterId = document.getElementById("pom-meter");
				pomMeterId.style.visibility = "visible";
				pomMeterId.innerHTML = "////";

				minutes = 25;
				seconds = 0;

				minutesId.innerHTML = minutes;
				secondsId.innerHTML = seconds + "0";

				breakMinutesId.innerHTML = "05";
				breakSecondsId.innerHTML = "00";


				startButton.addEventListener("click", pomodoro.startTimer);
				startMobileButton.addEventListener("click", pomodoro.startTimer);


		};

		var belowTen = function() {

				

				if (minutes < 10 ) {
					pageMinutes.innerHTML = "0" + minutes;

				} else {
					pageMinutes.innerHTML = minutes;
				}

		};




	}




	//  Alarm Sound

	var alarm = new Audio('sounds/siren.mp3');
	



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
	var pomodoro = new Timer("pomodoro",currentMinutes, currentSeconds, "minutes", "seconds", "pomodoro");


	// Get current values for Break Timer
	var breakMinutesId = document.getElementById("break-minutes");
	var breakSecondsId = document.getElementById("break-seconds");
	var breakTimerStatus = "off";

	var breakMinutes = breakMinutesId.innerHTML;
	var breakSeconds = breakSecondsId.innerHTML;


	// Create Break Timer Object

	var breakTimer = new Timer("breakTimer",breakMinutes, breakSeconds,"break-minutes", "break-seconds","break");



	var extendedTimer = new Timer("extendedTimer",1, 0, "break-minutes", "break-seconds", "extended-break");




	// Main Timer controls Event Listeners
	pomodoroPlus.addEventListener("click", pomodoro.addTime);
	pomodoroMinus.addEventListener("click", pomodoro.minusTime);

	// Break Timer Controls

	breakPlus.addEventListener("click", breakTimer.addTime);
	breakMinus.addEventListener("click", breakTimer.minusTime);

     // Normal Buttons
	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");
	var resetButton = document.getElementById("reset-button");

	// Mobile Buttons
	var startMobileButton = document.getElementById("start-mobile");
	var stopMobileButton = document.getElementById("stop-mobile");
	var resetMobileButton = document.getElementById("reset-mobile");

	var pomodoroMobilePlus = document.getElementById("timer-mobile-plus");
	var pomodoroMobileMinus = document.getElementById("timer-mobile-minus");
	var breakMobilePlus = document.getElementById("break-mobile-plus");
	var breakMobileMinus = document.getElementById("break-mobile-minus");




		/**
		*  THE CODE BELOW CAN BE REFACTORED
		*
		**/


	// Event Listeners

	startButton.addEventListener("click", pomodoro.startTimer);
	stopButton.addEventListener("click", function stop() {
		pomodoro.executeMethod(1);
	});
	resetButton.addEventListener("click", function() {
		pomodoro.executeMethod(2);
	});

	startMobileButton.addEventListener("click", pomodoro.startTimer);
	stopMobileButton.addEventListener("click", function() {
		pomodoro.executeMethod(1);
	});
	resetMobileButton.addEventListener("click", function() {
		pomodoro.executeMethod(2);
	});


	pomodoroMobilePlus.addEventListener("click", pomodoro.addTime);
	pomodoroMobileMinus.addEventListener("click", pomodoro.minusTime);

	breakMobilePlus.addEventListener("click", breakTimer.addTime);

	breakMobileMinus.addEventListener("click", breakTimer.minusTime);















window.onload = function() {



};



function addEvents(button, button2) {
	var buttonId = document.getElementById(button);
	var button2Id = document.getElementById(button2);

	if (pomodoro.getStatus() == "on") {
		buttonId.addEventListener("click", pomodoro.startTimer);
		button2Id.addEventListener("click", pomodoro.startTimer);
	} else if (breakTimer.getStatus ="on") {
		buttonId.addEventListener("click", breakTimer.startTimer);
		button2Id.addEventListener("click", breakTimer.startTimer);
	}
}


function removeEvents(button) {

	var buttonId = document.getElementById(button);
	// var replaceElement = buttonId.cloneNode(true);
	// var test = document.getElementById("start-button");

	console.log('remove events ');


	// buttonId.parentNode.replaceChild(replaceElement, buttonId);

	// console.log(pomodoro.getStatus());

	buttonId.removeEventListener("click", pomodoro.startTimer);
	buttonId.removeEventListener("click", breakTimer.startTimer);



}


function changeButtonStatus(button, text, color, mobileButton, removeListeners, callingObject) {

	var disableButton = document.getElementById(button);
	var disableText = document.getElementById(text);
	var disableMobile = document.getElementById(mobileButton);

	// var replaceElement = disableButton.cloneNode(true); 

	disableButton.style.borderColor = color;
	disableText.style.color = color;
	disableMobile.style.color = color;

	// console.log(callingObject);

	// if (button == "start-button") {



	// 		if (removeListeners == 1) {

	// 				var replaceElement = disableButton.cloneNode(true); 


	// 				disableButton.parentNode.replaceChild(replaceElement, disableButton);
	// 		} else {


	// 				if (callingObject == "pomodoro") {


	// 				console.log("add pomo listeners");


	// 				disableButton.addEventListener("click", pomodoro.startTimer);
	// 			} else {
	// 				disableButton.addEventListener("click", breakTimer.startTimer);
	// 			}
	// 		}

	// } else {

	// }

		// Attempt to remove all event listeners attached to a element






}


function nextTimer() {


	alarm.play();

	console.log("timer Counter " + timerCounter);

	console.log('next timer');

	var pomMeter = document.getElementById("pom-meter");
	var pomMeterStr = pomMeter.innerHTML;

	var pomMeterLength = pomMeterStr.length


	console.log("timer counter "+ timerCounter);
		


			// Need to check visibility to set timer to 30 minutes

			if (pomMeterLength == 1) {


		 	// CALCULATE THE FINAL BREAK TIMER BY ADDING POMODORO AND BREAK TIMER

		 	var extendedTimerTotal = breakTimer.getStartMinutes() + pomodoro.getStartMinutes();

		 	// alert(extendedTimerTotal);

		 		if (pomMeter.style.visibility == "hidden") {
		 				breakTimer.setMinutes(breakTimer.getStartMinutes());
						breakMinutesId.innerHTML = "00";

		 		} else {
		 				breakTimer.setMinutes(extendedTimerTotal);
						breakMinutesId.innerHTML = breakTimer.getMinutes();

		 		}





		    } else {

			// Try to refactor this code since it is WET
			// Get the minutes from when the timer first started and reset the timer to that time



						breakTimer.setMinutes(breakTimer.getStartMinutes());
						// breakMinutesId.innerHTML = "00";


						if (breakTimer.getMinutes() < 10) {
						 breakMinutesId.innerHTML = "0" + breakTimer.getMinutes();

						} else {
						  breakMinutesId.innerHTML = breakTimer.getMinutes();

						}



						



						// breakTimer.setMinutes(breakTimer.getStartMinutes());
						// breakMinutesId.innerHTML = "0" + breakTimer.getStartMinutes();
				
					



			}


		


		if (timerCounter % 2 == 0 ) {







			pomodoro.startTimer();
			console.log("remove break");
			startButton.removeEventListener("click", breakTimer.startTimer);
			// startButton.addEventListener("click", pomodoro.startTimer);
			stopButton.addEventListener("click", function stop() {
				pomodoro.executeMethod(1);
			});
			resetButton.addEventListener("click", function() {
				pomodoro.executeMethod(2);
			});


			stopMobileButton.addEventListener("click", function() {
				pomodoro.executeMethod(1);
			});





			



			} else {




		
			if (pomMeterLength > 1) {

				pomMeterStr = pomMeterStr.slice(1);
				console.log('length' + pomMeterStr);
				pomMeter.innerHTML = pomMeterStr;


				// Get the minutes from when the timer first started and reset the timer to that time
				pomodoro.setMinutes(pomodoro.getStartMinutes());
				minutesId.innerHTML = "0" + pomodoro.getStartMinutes();

			} else {
				pomMeter.style.visibility = "hidden";
			}




			breakTimer.startTimer();
			console.log("remove pomo");
			startButton.removeEventListener("click", pomodoro.startTimer);
			// startButton.addEventListener("click", breakTimer.startTimer);


			// CHECK THIS CODE BELOW LATER, I don't think it needs an anonomous func

			stopButton.removeEventListener("click", stop);

			stopButton.addEventListener("click", function() {
				breakTimer.executeMethod(1);
			});
			resetButton.addEventListener("click", function() {
				breakTimer.executeMethod(2);
			});
			}

			stopMobileButton.addEventListener("click", function() {
				breakTimer.executeMethod(1);
			});

			resetMobileButton.addEventListener("click", function() {
				breakTimer.executeMethod(1);
			});


		






		





		}





var extendedTimerCounter = false;



/**
 * NOT SURE IF CODE BELOW IS STILL NEEDED
 **/


// function pomodoroBreakTimer() {
// 	alert('this should start');

// 	extendedTimerCounter = true;


// 	breakTimer.executeMethod(1);
// 	pomodoro.executeMethod(1);

// 	breakMinutesId.innerHTML = extendedTimer.getMinutes();
// 	breakSecondsId.innerHTML = extendedTimer.getSeconds() + "0";


// 	extendedTimer.startTimer();


// 	startButton.addEventListener("click", extendedTimer.startTimer);
// 	stopButton.addEventListener("click", function() {
// 		extendedTimer.executeMethod(1);
// 	});
// 	resetButton.addEventListener("click", function() {
// 		extendedTimer.executeMethod(2);
// 	});
	



// }







})();








