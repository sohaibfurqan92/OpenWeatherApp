const weather = new Weather('London','uk');
const ui = new UI();

document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',function(e){
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);

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