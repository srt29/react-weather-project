import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.className,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date: new Date(response.data.dt * 1000),
        })
        
    }

    if (weatherData.ready) { 
        return ( 
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">            
                    <input type="search" placeholder="Enter a city..." className="form" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
            </div>
            </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <FormattedDate date={weatherData.date} />
        <li className="text-capitilize">{weatherData.description}</li>
        
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            <img src={weatherData.icon} alt={weatherData.description} className="float-left"/>
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
            </ul>
        </div>
    </div>
        </div>
        );

    } else {
    let apiKey = "701f06352d61835bc4fc894e7b084629";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

    }
}