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
            alert("No weather found.");
            throw new Error("No weather found.");
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
      document.querySelector(".city").innerText = "El clima en " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".temp_min").innerText = "Min: " +  temp_min + "°C";      
      document.querySelector(".temp_max").innerText = "Max: " + temp_max + "°C";  
      document.querySelector(".humidity").innerText =
        "Humedad: " + humidity + "%";
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