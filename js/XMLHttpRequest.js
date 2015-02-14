var JSONprojObject = {};

var http_request = new XMLHttpRequest();
http_request.open("GET", 'js/projects.json', true);

http_request.onreadystatechange = function() {
	var done = 4, ok = 200;
	if (http_request.readyState == done && http_request.status == ok) {
		JSONprojObject = JSON.parse(http_request.responseText);
	}
};
http_request.send(null);