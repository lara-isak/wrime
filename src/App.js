import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

/* 
- useState & useEffect are Hooks 
- With Hooks we can use state and other React features without writing a class */

function App() {
  /* 
  - data state is storing all the data from the OpenWeatherAPI call
  */
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  /* 
  - by using useEffect Hook, we tell React that our components needs to do something after render
  - the empty deps array [] means this useEffect will run once, similar to componentDidMount()
  */
  useEffect(() => {
    /* 
    - navigator.geolocation is a property of the Navigator object
    - navigator.geolocation obtains the Geolocation object which is able to obtain the position of the device using the getCurrentPosition method 
    */
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const api = `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      /* 
      - fetch() method is used to fetch resources asynchronously across the network
      - the simplest use of fetch() takes one argument, the path to the resource we want to fetch and returns a promise containing the response
      - json() method returns a promise which takes JSON as input and resolves to a JavaScript object
      - process.env property is used to read environment variables
      */
      fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
    });

  }, [])

  return (
    /* 
    - since the return statement is rendered before our API call including the below check will assure that we don't get the React error message before the data is set and passed to the Weather component
    - instead we will show Dimmer module and Loader element, courtasy of Semantic UI React
    */
    <div className="App">
      {(error) ? (
        <div>Error: {error.message}</div>
      ) : (!isLoaded) ? (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      ) : (
        <Weather weatherData={data} />
      )}
    </div>
  );
}

export default App;
