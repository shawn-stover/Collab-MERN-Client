import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weather() {
    const [weather, setWeather] = useState()
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`
    
      const getWeather = async () => {
         try{
             const response = await axios.get(apiUrl) 
             setWeather(response.data)
             
             console.log(response.data)
         } catch(error) {
             console.log(error)
         }
      }
      
        useEffect(() => {
            getWeather()
        }, [])
       
        if(!weather) {
            return(
              <div>
                    <h1>Loading</h1>
              </div>
            )
        }
     
      return (
        <div >
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <h3>{weather.weather[0].main}</h3>
            <h4>Current Temp</h4>
            <h4>{weather.main.temp}°F</h4>
            <h5>{weather.main.temp_max}/{weather.main.temp_min}</h5>  
        </div>
      );
}