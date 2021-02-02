class Weather{
  constructor(city,state){
    this.apiKey = '2884558bcf9a71a0a0be2126d92431dc';
    this.city = city;
    this.state = state;
  }

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const data = response.json();

    return data;
  }

  // Change Location
  changeLocation(city,state){
    this.city= city;
    this.state = state;
  }
}