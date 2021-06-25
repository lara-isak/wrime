import React from 'react';
import './style.scss';

const PlaylistContainer = ({weatherData}) => {
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