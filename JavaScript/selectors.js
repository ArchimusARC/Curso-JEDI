window.onload = function() {
	
	document.getElementById("red_button").onclick = function() {
		document.getElementById("red").style.visibility = "hidden";
	}

	document.getElementById("blue_button").onclick = function() {
		var blues = document.getElementsByClassName("blue");
		var i = 0;
		for(i; i < blues.length; i++) {
			blues[i].style.visibility = "hidden";
			}
		}

	document.getElementById("deleteThis").onclick = function() {
		var divs = document.getElementsByTagName = "div";
		var i = 0;
		for(i; i < divs.length; i++) {
			divs[i].style.visibility = "hidden";
		}
		document.getElementById("deleteThis").style.visibility = "hidden";
	}

}


