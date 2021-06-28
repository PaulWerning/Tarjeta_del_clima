var x = document.getElementById("coord");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "La Geolocalización no es soportada por su navegador.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//calcular coordenadas https://www.w3schools.com/html/html5_geolocation.asp//

crossorigin="anonymous"
link = 'api.openweathermap.org/data/2.5/weather?lat=position.coords.latitude&lon=position.coords.longitude&appid=8d19ae8688f1cfb46db5a801f68df247'
var request= new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function (){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('Agua').innerHTML = obj.weather[0].description;
    document.getElementById('localización').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = obj.main.temp - 273.15;
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
        }
    else{
         console.log("La ciudad no existe");
    }
}
request.send();