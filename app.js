const weather = new Weather('London','uk');

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
  weather.getWeather()
.then(data=>{
  console.log(data);
})
.catch(err=>console.log(err));
}