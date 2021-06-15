import React, { useEffect, useState } from 'react';

// useState & useEffect are Hooks. With Hooks we can use state and other React features without writing a class

function App() {
  // 2 states, 1 for the latitude and 1 for the longitude
  // these 2 states will be used to store the latitude and the longitude of our current location which will be used in the API call to access current weather data
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  // goal of the useEffect function is to load the functions inside it when app loads and reloads
  useEffect(() => {
    // navigator.geolocation is a property of the Navigator object
    // navigator.geolocation obtains the Geolocation object which is able to obtain the position of the device using the getCurrentPosition method
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  });

  return (
    <div className="App">
      <p>Your latitude is {lat}</p>
      <p>Your longitude is {lon}</p>
    </div>
  );
}

export default App;
