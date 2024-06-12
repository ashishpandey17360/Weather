const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "319e677bbbmsh53283fb1a14940ep1551e5jsnbc2c69720dc1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML= response.cloud_pct
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  getWeather(city.value);
  e.preventDefault();
});

getWeather("Moradabad");












// delhi weather fetching
const delhi = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "319e677bbbmsh53283fb1a14940ep1551e5jsnbc2c69720dc1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    delhi_cloud_pct.innerHTML = response.cloud_pct;
    delhi_temp.innerHTML = response.temp;
    delhi_feels_like.innerHTML = response.feels_like;

    delhi_humidity.innerHTML = response.humidity;
    delhi_min_temp.innerHTML = response.min_temp;
    delhi_max_temp.innerHTML = response.max_temp;
    delhi_wind_speed.innerHTML = response.wind_speed;
    delhi_wind_degrees.innerHTML = response.wind_degrees;
    delhi_sunrise.innerHTML = response.sunrise;
    delhi_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));












// lucknow weather fetching
const lucknow = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "319e677bbbmsh53283fb1a14940ep1551e5jsnbc2c69720dc1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    lucknow_cloud_pct.innerHTML = response.cloud_pct;
    lucknow_temp.innerHTML = response.temp;
    lucknow_feels_like.innerHTML = response.feels_like;

    lucknow_humidity.innerHTML = response.humidity;
    lucknow_min_temp.innerHTML = response.min_temp;
    lucknow_max_temp.innerHTML = response.max_temp;
    lucknow_wind_speed.innerHTML = response.wind_speed;
    lucknow_wind_degrees.innerHTML = response.wind_degrees;
    lucknow_sunrise.innerHTML = response.sunrise;
    lucknow_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));





  // featching new york

  const newyork = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "319e677bbbmsh53283fb1a14940ep1551e5jsnbc2c69720dc1",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      newyork_cloud_pct.innerHTML = response.cloud_pct;
      newyork_temp.innerHTML = response.temp;
      newyork_feels_like.innerHTML = response.feels_like;
  
      newyork_humidity.innerHTML = response.humidity;
      newyork_min_temp.innerHTML = response.min_temp;
      newyork_max_temp.innerHTML = response.max_temp;
      newyork_wind_speed.innerHTML = response.wind_speed;
      newyork_wind_degrees.innerHTML = response.wind_degrees;
      newyork_sunrise.innerHTML = response.sunrise;
      newyork_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));








  // featchindubai

  const dubai = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "319e677bbbmsh53283fb1a14940ep1551e5jsnbc2c69720dc1",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      dubai_cloud_pct.innerHTML = response.cloud_pct;
      dubai_temp.innerHTML = response.temp;
      dubai_feels_like.innerHTML = response.feels_like;
  
      dubai_humidity.innerHTML = response.humidity;
      dubai_min_temp.innerHTML = response.min_temp;
      dubai_max_temp.innerHTML = response.max_temp;
      dubai_wind_speed.innerHTML = response.wind_speed;
      dubai_wind_degrees.innerHTML = response.wind_degrees;
      dubai_sunrise.innerHTML = response.sunrise;
      dubai_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
