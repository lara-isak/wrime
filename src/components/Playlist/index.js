import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const PlaylistContainer = ({weatherData}) => {

  const [token, setToken] = useState('');

  useEffect(() => {

      const api = `${process.env.REACT_APP_SPOTIFY_API_POST_URL }`;
      const credentials = `${process.env.REACT_APP_SPOTIFY_API_POST_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_API_POST_CLIENT_SECRET}`;

      axios({
        url: api,
        method: 'POST',
        data: 'grant_type=client_credentials',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          /*btoa() method creates a base-64 encoded ASCII string from a "string" of binary data
            this ensure that data remains intact without modification during transport*/
          'Authorization' : 'Basic ' + btoa(credentials)
        }
      })
        //then method fires when the above promise action is completed
        // that is why we can pass a callback function inside .then()
        // callback function takes the response object from the above link as a parametar
      .then(
        (res) => {
        setToken(res);
        console.log(token.data.access_token);
      });

  }, [])

  return(
    <div className="playlistContainer">
      <input type="text" name="mood" id="" />
      <button>Click me!</button>
      <h2>It seems that the weather is {weatherData.weather[0].main} at your current location.</h2>
      <h3>Here are some playlists to accomodate the weather:</h3>
    </div>
  )
};

export default PlaylistContainer;