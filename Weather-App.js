let apiKey = "15380ebebbbe38a332a3ce013441db70";

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");

searchBtn.addEventListener("click", async () => {
  let cityName = document.querySelector("#city-name").value.trim();

  if (cityName === "") {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = "<h3>Please enter a city name</h3>";
    return;
  }

  try {
    resultBox.classList.remove("hidden");

    resultBox.innerHTML = `
      <div class="flex justify-center items-center">
        <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="text-center mt-3 ms-1 text-gray-700 font-medium">Fetching Weather Details...</p>
      </div>
    `;

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
    );

    let data = await response.json();
    console.log(data);

    // weather details
    let icon = data.weather[0].icon;
    resultBox.innerHTML = `
    <div>
      <h2 class="text-3xl font-bold text-gray-800">${data.name}, ${data.sys.country}</h2>
      <p class="text-gray-600 mt-1">Temperature: ${data.weather[0].main}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="loading..." class="w-16 h-16 mt-2"/>
      <h1 class="text-5xl font-bold text-gray-700">${data.main.temp}°C</h1>
      
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6">
    <div class="bg-white/60 p-4 rounded-xl shadow">
    <p class="text-gray-600 text-sm">Humidity</p>
    <h3 class="text-2xl font-bold text-gray-800">${data.main.humidity}%</h3>
    </div>
    <div class="bg-white/60 p-4 rounded-xl shadow">
    <p class="text-gray-600 text-sm">Wind Speed</p>
    <h3 class="text-2xl font-bold text-gray-800">${data.wind.speed} m/s</h3>
    </div>
    `;
  } catch (error) {
    console.error(error);
    resultBox.innerHTML = `<h3>Error in Fetching Weather Data...</h3>`;
  }
});
