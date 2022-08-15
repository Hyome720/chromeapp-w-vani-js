const API_KEY = "2d56f9d80bb3261086f04c488ffceb77";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("거기 사시는 군요!", lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  });
}

function onGeoError() {
  alert("위치 특정 불가. 날씨를 알 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);