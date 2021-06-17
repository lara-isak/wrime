import React, { useEffect, useState } from 'react';

// useState & useEffect are Hooks. With Hooks we can use state and other React features without writing a class

function App() {
  /* 
  - 2 states, 1 for the latitude and 1 for the longitude
  - these 2 states will be used to store the latitude and the longitude of our current location which will be used in the API call to access current weather data
  */
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  // goal of the useEffect function is to load the functions inside it when app loads and reloads
  useEffect(() => {
    // async functions always return a promise
    const fetchData = async () => {
    /* 
    - navigator.geolocation is a property of the Navigator object
    - navigator.geolocation obtains the Geolocation object which is able to obtain the position of the device using the getCurrentPosition method 
    */
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    /* 
    - fetch() method is used to fetch resources asynchronously across the network
    - the simplest use of fetch() takes one argument, the path to the resource we want to fetch and returns a promise containing the response
    - json() method returns a promise which takes JSON as input and resolves to a JavaScript object
    - process.env property is used to read environment variables
    */
    await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then(resolve => resolve.json())
          .then(result => {
            setData(result);
            console.log(result);
          });
        }
        // setInterval(() => {
        //   fetchData();
        // }, 60000)
  });



  return (
    <div className="App">
      <p>Your latitude is {lat}</p>
      <p>Your longitude is {lon}</p>
      {/* <p>How is the weather? {data}</p> */}
    </div>
  );
}

export default App;
