class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewPoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(results){
    this.location.textContent = results.name;
    this.desc.textContent= results.weather[0].description;
    this.string.textContent= results.main.temp + " Kelvin";
    this.icon.setAttribute("src",`http://openweathermap.org/img/w/${results.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${results.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${results.main.feels_like} Kelvin`;
    this.dewPoint.textContent = `Min: ${results.main.temp_min}K Max: ${results.main.temp_max}K`;
    this.wind.textContent = `Wind: ${results.wind.speed} Meter Per Second`;
  }
}