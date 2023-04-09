async function getWeather(city) {
  const myApi = "7885dc53ddf5449bb6c193408230904";
  const url =
    "https://api.weatherapi.com/v1/current.json?key=" + myApi + "&q=" + city;
  const response = await fetch(url, { mode: "cors" });
  const weatherData = await response.json();

  const data = {
    name: weatherData.location.name,
    current: weatherData.current.temp_c,
    wind: weatherData.current.wind_kph,
  };
  console.log(data);
}

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const inputGet = document.getElementById("myInput");
  const city = inputGet.value;

  getWeather(city);
});
