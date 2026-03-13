export async function getWeather(location) {

    const key = "4f9a3d37f02d456dba5113040261203";
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`);

    const data = await response.json();
    
    return data;
    
}