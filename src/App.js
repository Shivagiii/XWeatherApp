
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [city,setCity] = useState('');
  const [details,setDetails]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  async function fetchWeather(e){
   
    e.preventDefault();
    const url='https://api.weatherapi.com/v1/current.json'
    try{
      setIsLoading(true)
      const {data} = await axios.get(`${url}?key=a3cfe8b66e5b4116b32202426242902&&q=${city}`)
      console.log(data.current)
      setDetails(data.current)
      
    }
    catch(e){
      console.error(e);
      alert("Failed to fetch weather data")
      setDetails([]);
      setCity('')

    }
    setIsLoading(false)
  }


function handleChange(e){
  setCity(e.target.value);
  setDetails([])
}

  return (
    <div className="App">
      <form onSubmit={fetchWeather}>
        <input type="text" value={city} onChange={handleChange}/>
        <button type='submit'>Search</button>
      </form>

      {isLoading?<p>Loading data...</p>:<></>}
      {details.temp_c?
      <div  className='weather-cards'>
        <div className='weather-card'>
          <h3>Temperature</h3>
          <p>{details.temp_c}°C</p>
        </div>
        <div className='weather-card'>
          <h3>Humidity</h3>
          <p>{details.humidity}%</p>
        </div>
        <div className='weather-card'>
          <h3>Condition</h3>
          <p>{details.condition.text}</p>
        </div>
        <div className='weather-card'>
          <h3>Wind Speed</h3>
          <p>{details.wind_kph}kph</p>
        </div>
      </div>
      :<></>  
    }
     

    </div>
  );
}

export default App;
