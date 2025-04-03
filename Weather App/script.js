const apiKey = "14401087a6e14a4afbe1a020969ee1aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherimg = document.querySelector(".weatherimg");
async function getWeather(city) {

  const response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
  if (!response.ok) {
    alert("City not found");
    return;
  }
  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".Feel").innerText = Math.round(data.main.feels_like) + "°C";
  document.querySelector(".humidvalue").innerText = data.main.humidity + "%";
  document.querySelector(".windvalue").innerText = Math.round(data.wind.speed) + "km/h";
if(data.weatherimg[0].main == "Clouds"){
    weatherimg.src = "images/clouds.png";

}else if(data.weatherimg[0].main == "Clear"){
    weatherimg.src = "images/clear.png";
}
else if(data.weatherimg[0].main == "Rain"){
    weatherimg.src = "images/rain.png";} 
else if(data.weatherimg[0].main == "Mist"){
    weatherimg.src = "images/mist.png";}
else if(data.weatherimg[0].main == "Snow"){
    weatherimg.src = "images/snow.png";}
// else if(data.weatherimg[0].main == "Thunderstorm"){
//     weatherimg.src = "images/thunderstorm.png";}
// else if(data.weatherimg[0].main == "Smoke"){
//     weatherimg.src = "images/smoke.png";}
// else if(data.weatherimg[0].main == "Dust"){
//     weatherimg.src = "images/dust.png";}

searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  getWeather(city);
});
}