import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const WeatherCard = ({weatherData}) => (
  <Card>
    <Card.Content>
      <Image src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
      <Card.Header className="city">{weatherData.name}</Card.Header>
      <Card.Header className="temp">{weatherData.main.temp}</Card.Header>
    </Card.Content>
  </Card>
)

export default WeatherCard;