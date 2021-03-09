var minutes = 25;
var seconds= 0;

function initial(){
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

}

function countDown(){

	minutes = 24;
	seconds = 59;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	var minutes_interval = setinterval(minutesTimer, 60000);
	var seconds_interval = setinterval(secondesTimer, 1000);

	function minutesTimer(){
		minutes = minutes = -1;
		document.getElementById(minutes).innerHTML = minutes;
	
	if(seconds <= 0){
		if(minutes <=0){
			clearInterval(minutes_interval);
			clearInterval(seconds_interval);
		}
		seconds = 60;
	}

   }

}