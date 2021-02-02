
const ui = new UI();
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city,weatherLocation.state);

document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',function(e){
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);

  // set location in LS
  storage.setLocationData(city,state);

  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
.then(data=>{
  ui.paint(data);
})
.catch(err=>console.log(err));
}