import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

export default function Weather() {

    // const useStyles = makeStyles() => ({
    //     h3
    // })

    const [weather, setWeather] = useState()
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`
    

    //call to weather API for data
      const getWeather = async () => {
         try{
             const response = await axios.get(apiUrl) 
             setWeather(response.data)
             
             console.log(response.data)
         } catch(error) {
             console.log(error)
         }
      }
      
    //useEffect to regulate API calls
        useEffect(() => {
            getWeather()
        }, [])
    
    //to handle error when api takes a second to respond
        if(!weather) {
            return(
              <div>
                    <h1>Loading</h1>
              </div>
            )
        }
     
      return (
      
            <Box display='inline-flex' >
                <Box style={{backgroundColor: 'lightblue', paddingLeft: '20%', paddingRight: '20%', borderRadius: '12px'}}>
                   
                    <Box item>
                        <img style={{height: '50px'}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather Icon'/>
                
                        <p style={{marginTop: '0', fontSize: '10px', fontWeight: 'bold' }} >{weather.weather[0].main}</p>
                    </Box>
                   
                    <Box item>
                        <p style={{marginBottom: '0', fontSize: '10px', fontWeight: 'bold'}}>Current Temp</p>
                        <p style={{marginTop: '0', fontSize: '10px'}}>{weather.main.temp}°F</p>
                        <p style={{marginBottom: '0', fontSize: '10px', fontWeight: 'bold'}}>Max/Min</p>
                        <p style={{marginTop: '0', fontSize: '10px'}}>{weather.main.temp_max}°F/{weather.main.temp_min}°F</p>  
                    </Box>
                
                </Box>
            </Box>
        
      );
}