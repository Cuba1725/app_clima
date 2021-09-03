let weather = {
    apiKey: "86b6f51e5940289b5bb3f3efa326c2dc",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&lang=es&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No se encontraron resultados!");
            throw new Error("No se encontraron resultados!");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));        
    },

    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp } = data.main;
      const { temp_min } = data.main;
      const { temp_max } = data.main;
      const { humidity } = data.main;
      const { speed } = data.wind;

      var x = Math.round(temp);
      var y = Math.round(temp_max);
      var z = Math.round(temp_min);
      document.querySelector(".city").innerText = "El clima en " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = x + " °C";
      document.querySelector(".temp_min").innerText = "Min: " +  z + " °C";      
      document.querySelector(".temp_max").innerText = "Max: " + y + " °C";  
      document.querySelector(".humidity").innerText =
        "Humedad: " + humidity + " %";
      document.querySelector(".wind").innerText =
        "Viento: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("Cargando");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";        
        console.log(data);
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Pilar, ar");


  /*-------reloj digital----------*/
window.onload = function() {
  setInterval(updateTime, 1000)
};

function updateTime () {
  const hourEL = document.querySelector("#hours");
  const minuteEL = document.querySelector("#minutes");
  const secondEL = document.querySelector("#seconds");
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (hours >= 0 && hours <= 9) hours = "0" + hours;
  if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
  if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
  hourEL.innerHTML = hours;
  minuteEL.innerHTML = minutes;
  secondEL.innerHTML = seconds;


  const dateEL = document.querySelector("#date");
  let date = d.getDate();
  if (date >= 0 && date <= 9) date = "0" + date;
  let month = d.getMonth() + 1;
  if (month >= 0 && month <= 9) month = "0" + month;
  let year = d.getFullYear();
  if (year >= 0 && year <= 9) year = "0" + year;
  dateEL.innerHTML = `${date} - ${month} - ${year}`;

  const dayEL = document.querySelector("#day");
  let daynumber = d.getDay(), day = "";
  switch (daynumber) {
      case 0: day = "Domingo"; break;
      case 1: day = "Lunes"; break;
      case 2: day = "Martes"; break;
      case 3: day = "Miercoles"; break;
      case 4: day = "Jueves"; break;
      case 5: day = "Viernes"; break;
      case 6: day = "Sabado"; break;
  }
  dayEL.innerHTML = day;
}

