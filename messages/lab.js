function parse () {
	var request = new XMLHttpRequest();
	request.open("GET", "data.json", true)
	request.onreadystatechange = callback;
	request.send(null);
	function callback () {
		if (request.readyState == 4 && request.status == 200) {
			result = "";
			message = JSON.parse(request.responseText);
			elem = document.getElementById("messages");
			for (count = 0; count < message.length; count++) {
				result += "<div id='message'>" + "<p>" + message[count].content + " " + 
						  message[count].username + "</p>" + "</div>" + "<br>";
			}
			elem.innerHTML = result;
		}
		else if (request.readyState == 4 && request.status != 200) {
			document.getElementById("messages").innerHTML = "<p>Error</p>";
		}

	}
}