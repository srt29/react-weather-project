import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if(loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">
                            Monday
                        </div>
                        <WeatherIcon code="01d" size={30} />
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                            <span className="WeatherForecast-temperature-min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
    
        );
    
    
} else {
    let apiKey = "701f06352d61835bc4fc894e7b084629";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return null;
   
    
}}