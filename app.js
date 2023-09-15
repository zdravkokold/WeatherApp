// Constants
const API_KEY = 'b70f418c7f19db53df53ba46f9478d10';
const submitBtn = document.getElementById('submit-btn');
const locationInput = document.getElementById('location');
const weatherDiv = document.getElementById('weather');

submitBtn.addEventListener('click', async () => {
  const location = locationInput.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();

  if (response.ok) {
    const weather = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherDiv.innerHTML = `
      <p>Weather: ${weather}</p> 
      <p>Temperature: ${Math.ceil(temp)}°C</p>
      <p>Feels like: ${Math.ceil(feelsLike)}°C</p>
      <p>Humidity: ${Math.ceil(humidity)}%</p>
      <p>Wind Speed: ${Math.ceil(windSpeed)} km/h</p>
    `;
  } else {
    weatherDiv.innerHTML = `<p>Error: ${data.message}</p>`;
  }
});