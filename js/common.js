
let url = './php/api.php';

let loader = document.getElementById('loader');

let cityName = document.getElementById('city');
let temperature = document.getElementById('temp');
let wind = document.getElementById('wind');
let status = document.getElementById('status');

fetch(url)
  .then(response => response.json())
  .then(
    commits => {
    	setInterval(() => {
		  	loader.classList.remove("loader");
	        cityName.innerHTML 		= commits.name;
	        temperature.innerHTML 	= Math.round(commits.main.temp);
	        wind.innerHTML 			= commits.wind.speed;
	        status.innerHTML 		= commits.weather[0].main;
    	}, 2000)
    });
