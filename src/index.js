import "./style.css";
import {getWeather} from "./api.js";
import { processWeatherData } from "./process.js";
import { displayWeather } from "./dom.js";

const form = document.querySelector("#weather-form");
const loading = document.querySelector("#loading");
const errorDiv = document.querySelector("#error");

form.addEventListener("submit", async(e) => {

    e.preventDefault();

    const location = document.querySelector("#location").value;

    try{
    loading.style.display ="block";

    const data = await getWeather (location);
    loading.style.display ="none";

    if(data.error){
        errorDiv.textContent = data.error.message;
        return;
    }

    const weather = processWeatherData(data);
    displayWeather(weather);
}
catch (error){
    loading.style.display = "none";
    errorDiv.textContent = "Something went wrong";
}

});