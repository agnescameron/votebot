		var headID = document.getElementsByTagName("head")[0];
		var newCss = document.createElement('link');
		newCss.rel = 'stylesheet';
		newCss.type = 'text/css';
		window._botUsername = '658919';
		window._botName = 'votebot';
		newCss.href = "http://rebot.me/assets/css/bot.css";
		var newScript = document.createElement('script');
		newScript.src = "http://rebot.me/assets/js/bot.js";
		newScript.type = 'text/javascript';
		headID.appendChild(newScript);
		headID.appendChild(newCss);