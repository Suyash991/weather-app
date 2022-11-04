import noteContext from "./TempContext";
import {useState,useEffect} from 'react'

const TempState =(props)=>{
    const [data, setData] = useState({});
    const [id,setId]=useState(0)
    

    const getWeekDays=(dayIndex)=>
 {
  
  let arr=['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
   
  return arr[dayIndex]

 }
  
 const setWeekDay=(id)=>
 {
  console.log("id :" +id)
  setId(id)
 }

  useEffect(() => {
    let Url=`https://api.openweathermap.org/data/2.5/forecast/daily?q=Mumbai&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    const getData = async()=>{
      try{  
      const res= await fetch(Url);
         var apiData=await res.json();
        console.log(apiData)
         setData(apiData)
         
      }
      catch(err)
      {

      }
    }

    getData();

  }, [])
  
    return (
        <noteContext.Provider value={{data,getWeekDays,setWeekDay,id}}>
             {props.children}
        </noteContext.Provider>
    )
}
export default TempState