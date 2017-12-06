

	var submitted = false;
	var loaded = false;

var script = document.createElement('script');
script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function main() {

	var host = window.location.hostname;
	console.log(host, " in main ");

	inject(host, loaded);
	popup(host, submitted);
}

function inject(host, loaded){

	if(host == "www.usa.gov" || host == "turbovote.org" || host == "turbovote.org"){
				console.log("host is turbo, usa, etc", host);
	}

	else{
			// just place a div at top right
		var div = document.createElement('div');
		div.id='div1';
		div.style.position = 'absolute';
		div.style.top = 0;
		div.style.right = 0;
		div.textContent = 'register!';
		document.body.appendChild(div);


	var div2 = document.createElement('div');
	div2.id='div2';
	div2.style.position = 'absolute';
	div2.style.top = 30;
	div2.style.left = 40;
	div2.textContent = "why haven't you registered?";
	document.body.appendChild(div2);


	var div3 = document.createElement('div');
	div3.id='div3';
	div3.style.position = 'absolute';
	div3.style.bottom = 10;
	div3.style.left = 80;
	div3.textContent = "vote";
	document.body.appendChild(div3);

	var popup = document.getElementById("div1").addEventListener("mouseover", function(){
    window.open('https://www.sec.state.ma.us/ovr/','popupad','width=400,height=450');
	})

	var popup2 = document.getElementById("div2").addEventListener("mouseover", function(){
    window.open('https://turbovote.org','popupad','width=400,height=450');
	})

	var popup3 = document.getElementById("div3").addEventListener("mouseover", function(){
    window.open('https://www.usa.gov/register-to-vote','popupad','width=400,height=450');
	})

		console.log("host is not turbo, usa, etc")
	}

console.log("before loaded, loaded is", loaded);
if(!loaded){
		 window.open('https://turbovote.org','popupad','width=400,height=450');
		loaded = true;
	}
console.log("loaded is", loaded);

return loaded;

};

function popup(host, submitted){
if (!submitted){
	if(host == "facebook.com" || host == "twitter.com" || host == "www.youtube.com"){
		 window.open('https://agnescameron.info/popup.html','popupad','width=1000,height=1000');
		 window.open('https://turbovote.org','popupad','width=400,height=450');
		 console.log(host, "in popup");
		 window.prompt("why are you procrastinating, you're not registered to vote?","");
		 submitted = true;
		}	
	else{
		submitted = false;
	}

	console.log("submitted is ", submitted);
	}

			 return submitted;	
};

window.onload = main();