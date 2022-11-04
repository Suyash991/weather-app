import React from "react";
import './Navbar.css'
import {useContext} from 'react'
import noteContext from '../../Context/TempContext'


function Navbar() {

  const notesData=useContext(noteContext)


  if(Object.keys(notesData.data).length)
  {
  return (
    <>
   
      <div className="nav-container">
     
        <div className="nav-image">
          <img src={`http://openweathermap.org/img/wn/${notesData.data.list[notesData.id].weather[0].icon}.png`} alt="sunnyImage" />
        </div>
        <div className="nav-titles">
          <h1>{Math.round(notesData.data.list[notesData.id].temp.day)}°</h1>
          <h2>C</h2>
        </div>
        <div className="nav-description">
          <p>Precipitation: {notesData.data.list[notesData.id].clouds}%</p>
          <p>Humidity:  {notesData.data.list[notesData.id].clouds}%</p>
          <p>Wind: {notesData.data.list[notesData.id].speed} kmph</p>

        </div>
        
  
      </div>
      <div className="nav-links">
        <a href="/" className="nav-link">Temprature</a>
        <div className="dash-line"></div>
        <a href="/" className="nav-link">Precipitation</a>
        <div className="dash-line"></div>
        <a href="/" className="nav-link">Wind</a>
      </div>
    </>
  );
}

else
{
  <div></div>
}
}
export default Navbar;
