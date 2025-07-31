function updateWeatherData(response) {
  let temperatureElement = document.querySelector(
    "#weather-app-temperature-value"
  );
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");
  temperatureElement.innerHTML = Math.round(temperature);

  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "6a9deo698c10843af1d451t2df75b880";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");

  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Brussels");
