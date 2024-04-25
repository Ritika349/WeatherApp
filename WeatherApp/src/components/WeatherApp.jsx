import SearchBox from './SearchBox'
import Card from './Card'
import { useState } from 'react'
const WeatherApp = () => {
    let [weatherInfo,setWeatherInfo]=useState({
    city:"Mohali",
    temp:30,
    max_temp:32,
    min_temp:18,
    humidity:2,
    weather:"Scattered Clouds"})

   let UpdateInfo=(newInfo)=>{
 setWeatherInfo(newInfo);
   } 
  return (
    <div>
        <SearchBox UpdateInfo={UpdateInfo} />
        <Card info={weatherInfo}/>
    </div>
  )
}
export default WeatherApp
