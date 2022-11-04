import React from "react";
import {useContext} from 'react'
import TempContext from '../../Context/TempContext'
import "./CardSection.css";


function CardSection() {


  
  const notesData=useContext(TempContext)

  const onclickHandle =(event)=>{
    notesData.setWeekDay(event.target.getAttribute('data-remove'))
  }

  if(Object.keys(notesData.data).length)
  {
   
    let id=0;
    return (
     
      <>
        <div className="cardSection-container">
          {
            notesData.data.list.map ((ele)=>(
              
          <div className="cardSection-warpper" key={id++}  onClick={(event)=>onclickHandle(event)} data-remove={id}>
            <h2 className="card-day" data-remove={id}>{notesData.getWeekDays(id)}</h2>
            <div className="card-img">
              <img
                src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`} 
                alt="weatherphoto"
                data-remove={id}
              />
            </div>
            <div className="card-temp" data-remove={id}>
            <p className="day-temp" data-remove={id}>{Math.round(ele.temp.day)}°</p>
             <p className="night-temp" data-remove={id}>{Math.round(ele.temp.night)}°</p>
            </div>
          </div>
              )
              )
  }
        </div>
      </>
    );
    
  }
  else
  {
   
    return <h1>Loading............</h1>
  }
 
  
  
}

export default CardSection;
