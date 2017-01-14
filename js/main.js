
	var timerStatus = "off";
	var timeTest = 60;

window.onload = function() {

	// Event listeners

	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");
	var resetButton = document.getElementById("reset-button");

	startButton.addEventListener("click", start);





};













function start() {


	timerStatus = "on";

	var startButton = document.getElementById("start-button");
	var startText = document.getElementById("start-text");

	startButton.style.borderColor = "#1a280b";
	startText.style.color = "#1a280b";
	
	var timer = setInterval(function() {
		increment();
	}, 1000);


	
}

function increment() {



		var setSeconds = document.getElementById("seconds");
		var testSeconds = document.getElementById("minutes");

		timeTest = timeTest -1;

		setSeconds.innerHTML = timeTest;

		// console.log(setSeconds);
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
