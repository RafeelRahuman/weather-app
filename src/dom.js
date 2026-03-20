export function displayWeather(weather){

  const container = document.querySelector("#weatherResult");

  const condition = weather.condition.toLowerCase();


if(condition.includes("sunny") || condition.includes("clear")){
  document.body.style.background = "#f1cb34";
}

else if(weather.condition.includes("Rain")){
  document.body.style.background = "#4f9bd9";
}

else if(weather.condition.includes("Cloud")){
  document.body.style.background = "#8dc3da";
}

else{
  document.body.style.background = "#4f3ab8";
}
  container.innerHTML = `
    <h2>${weather.city}, ${weather.country}</h2>
    <img src="${weather.icon}">
    <p>Temperature: ${weather.temperature}°C</p>
    <p>Condition: ${weather.condition}</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Wind: ${weather.wind} km/h</p>
  `;

}