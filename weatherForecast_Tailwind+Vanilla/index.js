const apikey = "3cba71bbbb0bb1e38495f8c1b515be34";
const city = document.querySelector(".inp");
const weatherform = document.querySelector(".form");
const errorElement = document.querySelector(".error");

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityname = city.value;
  const herdata = await weatherdata(cityname);
  if (herdata) {
    display(herdata);
    errorElement.textContent = "";
  } else {
    display(null);
    errorElement.textContent =
      "City not found! Please enter a valid city name.";
  }
});

async function weatherdata(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  return await response.json();
}

function display(data) {
  const cityElement = document.querySelector(".city");
  const tempElement = document.querySelector(".temp");
  const humidityElement = document.querySelector(".humidity");
  const descElement = document.querySelector(".desc");
  const emojiElement = document.querySelector(".emoji");

  if (data === null) {
    cityElement.textContent = "";
    tempElement.textContent = "";
    humidityElement.textContent = "";
    descElement.textContent = "";
    emojiElement.textContent = "";
    return;
  }

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  let emoji = "🌤️";
  if (id >= 200 && id < 300) emoji = "🌩️";
  else if (id >= 300 && id < 400) emoji = "🌧️";
  else if (id >= 500 && id < 600) emoji = "🌧️";
  else if (id >= 600 && id < 700) emoji = "❄️";
  else if (id >= 700 && id < 800) emoji = "🌫️";
  else if (id === 800) emoji = "☀️";
  else if (id > 800) emoji = "☁️";

  const tempcel = (temp - 273.15).toFixed(1);

  cityElement.textContent = city;
  tempElement.textContent = `${tempcel}°C`;
  humidityElement.textContent = `Humidity: ${humidity}%`;
  descElement.textContent = `Description: ${description}`;
  emojiElement.textContent = `Weather: ${emoji}`;
}
