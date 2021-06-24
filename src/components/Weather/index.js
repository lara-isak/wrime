import React from 'react';
import './style.scss';

const WeatherContainer = ({weatherData}) => {
  return (
    <div className="weatherContainer">
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="Current weather icon" />
      <h1>{weatherData.name}</h1>
      <h2>{weatherData.main.temp}</h2>
    </div>
  )
};

export default WeatherContainer;