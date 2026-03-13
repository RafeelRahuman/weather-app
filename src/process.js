export function processWeatherData(data) {
    return {
    city: data.location.name,
    country: data.location.country,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    humidity: data.current.humidity,
    wind: data.current.wind_kph        
    }
}