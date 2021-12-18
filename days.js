//Add search engine

function enteredCity(event) {
	event.preventDefault();

	// document.querySelector("#search-button").click();
	let city = document.querySelector("#input-city");
	let location = document.querySelector("#location");
	location.innerHTML = "You entered";
	let cityInput = document.querySelector("#city");
	if (city.value) {
		cityInput.innerHTML = `${city.value} city`; //Display entered city or town
	} else {
		location.innerHTML = "Enter a "; //Display if search is clicked without an entry
		cityInput.innerHTML = `City or Town`;
	}
}

// Add event listener to search button
let search = document.querySelector("#search-button");
search.addEventListener("click", enteredCity);

// let input =document.querySelector("#city-input")
// input.addEventListener("")
// //Displaying current date and time

let date = new Date(); //new date

// Get new date
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

//Get new seconds
let seconds = date.getSeconds();
if (seconds < 10) {
	seconds = `0${seconds}`;
}

//display date
let dateNow = document.querySelector("#date");
dateNow.innerHTML = ` ${day} ${currentDate}/${month}/${year}
`;
//display time
let timeNow = document.querySelector("#time");
timeNow.innerHTML = `${hour}:${minutes}:${seconds}`;

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
