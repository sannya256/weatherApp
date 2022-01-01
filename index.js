// let input =document.querySelector("#city-input")
// input.addEventListener("")
// //Displaying current date and time

let date = new Date(); //new date

// Get new date
let day = date.getDay();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
day = days[date.getDay()]; //reassign day

//Get new date
let currentDate = date.getDate();

// Get new month
let month = date.getMonth();
let months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
month = months[date.getMonth()]; //reassign month

//Get new year
let year = date.getFullYear();

// Get new hour
let hour = date.getHours();
if (hour < 10) {
	hour = `0${hour}`;
}

//Get new minutes
let minutes = date.getMinutes();
if (minutes < 10) {
	minutes = `0${minutes}`;
}

// //Get new seconds
// let seconds = date.getSeconds();
// if (seconds < 10) {
//   seconds = `0${seconds}`;
// }

//display date
let dateNow = document.querySelector("#date");
dateNow.innerHTML = `${currentDate} ${month} ${year}
`;
//display time
let timeNow = document.querySelector("#time");
timeNow.innerHTML = `${hour}:${minutes}`;

//Displaying temperature

// function convertTemp(event) {
//   event.preventDefault();
//   let temp = document.querySelector("#temp");
//   let fahren = Math.round(temp.innerHTML * 1.8 + 32);
//   temp.innerHTML = fahren;
// }

// let fahrenheit = document.querySelector("#fahrenheit");
// // fahrenheit.addEventListener("click", convertTemp);
// fahrenheit.addEventListener("click", convertTemp);

// Current location button interraction
const apiKey = "d6c8c570602004f838d15bd6dcda7652";

function location(response) {
	let userPosition = response.data.name;
	let country = response.data.sys.country;
	let temperature = Math.round(response.data.main.temp);

	let userLocation = document.querySelector("#city");
	userLocation.innerHTML = userPosition;

	let userCountry = document.querySelector("#country");
	userCountry.innerHTML = country;

	let currentTemp = document.querySelector("#temp");
	currentTemp.innerHTML = `${temperature}℃`;

	let today = document.querySelector("#day");
	today.innerHTML = day;
}
function currentLocation(position) {
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(location);
}

function geolocation(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(currentLocation);
}

let button = document.querySelector("button");
button.addEventListener("click", geolocation);

//==================================================================================================//

//Add search engine

function enteredCity(event) {
	event.preventDefault();
	// Get user entered city name
	let city = document.querySelector("#input-city");

	// Get weather details using openweather api
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
	console.log(apiUrl);
	axios.get(apiUrl).then(displayWeather);
}

//Function to display weather details on browser
function displayWeather(response) {
	let cityName = response.data.name;
	let displayCity = document.querySelector("#city");
	displayCity.innerHTML = cityName;

	//Find user entered city in the openweather , match it and display the details

	//Display temperature
	let temperature = Math.round(response.data.main.temp);
	let currentTemp = document.querySelector("#temp");
	currentTemp.innerHTML = `${temperature}℃`;
	//display country
	let country = response.data.sys.country;
	let userCountry = document.querySelector("#country");
	userCountry.innerHTML = country;

	//Display winds

	//Display chances of precipitation
	//Display Length of the day
	//Display Length of the Night

	//If city name is incorrect
}

// Add event listener to search button
let search = document.querySelector("form");
search.addEventListener("submit", enteredCity);

// Load user location
navigator.geolocation.getCurrentPosition(currentLocation);
