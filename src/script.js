//Feature 1
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0 ${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = document.querySelector("#current-date");
date.innerHTML = `${day}, ${hours}:${minutes}`;

//Feature 2
function showTemperature(response) {
  console.log(response.data.main);
  document.querySelector("#currentTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city-big").innerHTML = response.data.name;
  document.querySelector("#city-small").innerHTML = response.data.name;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  console.log(response);
}
function search(city) {
  let apiKey = "51c757e95cb1fdd4bc45100437afbefb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let formSearchCity = document.querySelector("#search-city");
formSearchCity.addEventListener("submit", handleSubmit);

search("Lisbon");

function searchLocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "51c757e95cb1fdd4bc45100437afbefb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let currentButton = document.querySelector("#current-location-btn");
currentButton.innerHTML = addEventListener("click", searchLocation);

// Bonus Feature
//function showFahrenheit(event) {
//let currentTemperature = document.querySelector("#currentTemperature");
//currentTemperature.innerHTML = "66";
//}
//function showCelsius(event) {
//let currentTemperature = document.querySelector("#currentTemperature");
//currentTemperature.innerHTML = "19";
//}

//let fahrenheitTemperature = document.querySelector("#fahrenheit");
//fahrenheitTemperature.addEventListener("click", showFahrenheit);

//let celsiusTemperature = document.querySelector("#celsius");
//celsiusTemperature.addEventListener("click", showCelsius);
