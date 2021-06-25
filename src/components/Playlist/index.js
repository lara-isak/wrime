import React from 'react';
import './style.scss';

const PlaylistContainer = ({weatherData}) => {
  return(
    <div className="playlistContainer">
      {/* <h1>moodify</h1>
      <h2>Soul food for every mood</h2> */}
      <input type="text" name="mood" id="" />
      <button>Click me!</button>
      <h1>{weatherData.name}</h1>
    </div>
  )
};

export default PlaylistContainer;