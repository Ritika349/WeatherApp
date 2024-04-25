import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const SearchBox = ({UpdateInfo}) => {  
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY="34dd9a78c91089b3a92446790c21672e"
  let getWeatherInfo=async()=>{
    try {
    let response = await fetch(
      `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
    );

   let jsonResponse=await response.json();
    let result={
      city: city,
      temp: jsonResponse.main.temp,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description}
      
      return(result)
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
      setCity(event.target.value)     
  }
  let handleSubmit= async(e)=>{
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      UpdateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  
  return (
    <div >
        <h1>Search For the Weather</h1>
  <div className='mt-2 '>  
    <form onSubmit={handleSubmit}><TextField required  id="outlined-required"  label="Enter the City.." value={city} onChange={handleChange} /><br/>
 <div className="mt-2"><Button  type="submit" variant="contained" color="success">Search</Button></div>
 </form>
 {error && <p className="text-red-500 text-center">Invalid City Name</p>}

 </div>
 </div>
)
}

export default SearchBox