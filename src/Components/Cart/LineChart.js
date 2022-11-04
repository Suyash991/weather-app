import React from "react";
import {useContext} from 'react'
import TempContext from '../../Context/TempContext'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const notesData=useContext(TempContext)
  if(Object.keys(notesData.data).length)
  {
   
     let tempdata =Object.values(notesData.data.list[notesData.id].temp)
     let timedata =Object.keys(notesData.data.list[notesData.id].temp)
        
     
      
  return (
    <div className="chart-wrapper"style={{width:'80%', height:'300px', margin:'20px auto'}}>
      
      <Line
        data={{
          labels: timedata,
          datasets: [
            {
              label: 'temp of city',
              data: tempdata,    
              backgroundColor:'rgba(255, 165, 10, 0.4)',
        borderColor:'rgba(255, 71, 10)',
        borderWidth:5,
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'orange',
        pointBackgroundColor:'#fff',
        showLine:true
           
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
       
      />
      

    </div>
  );
}
else
{
  return <div></div>
}
}


export default LineChart;
