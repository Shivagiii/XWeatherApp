import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CityDetails from "./CityDetails";
import FutureDays from "./FutureDays";
import HourDetails from "./HourDetails";
import ExtraDetails from "./ExtraDetails";

function App() {
  const [city, setCity] = useState("pune");
  const [hour, setHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date().getHours());
  const [forecast, setForcast] = useState({
    location: {},
    current: {},
    forecastday: [],
  });

  const fetchWeather = async () => {
    const url = "https://api.weatherapi.com/v1/forecast.json";
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${url}?key=a3cfe8b66e5b4116b32202426242902&&q=${city}&&days=3`
      );
      console.log(data);
      setForcast({
        location: data.location,
        current: data.current,
        forecastday: data.forecast.forecastday,
      });
    } catch (e) {
      console.error(e);
      alert("Failed to fetch weather data");
      setCity("");
    }
    setIsLoading(false);
    if(forecast.forecastday[0]){
    const h=forecast.forecastday[0].hour.filter((h) => new Date(h.time).getHours()%3 ===0 && new Date(h.time).getHours()>=date );
    setHours(h);
    console.log(hour)
    }
  };

  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    fetchWeather();
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  console.log(forecast);
  return (
    <div class="container-fluid App d-flex justify-content-start" >
      <div class="col-12 align-self-center ">
        <form onSubmit={handleClick} className="App-header ">
          <input type="text"  className=" w-50 h-75 form-control" value={city} onChange={handleChange} />
          <button class="btn btn-light m-1 h-75 text-secondary " type="submit">Search</button>
        </form>
        
      </div>
      <div class="col-md-12 bodyTag mh-100 d-flex  ">
      <div className="currentDate ">
      <CityDetails location={forecast.location} current={forecast.current}/>
      <div className="info">
      <HourDetails day={hour}/> 
        {/* <HourDetails day={forecast.forecastday[0]}/>   */}
         </div>
         <ExtraDetails current={forecast.current} forecast={forecast.forecastday[0]}/>
        </div>
        <div className="nextDays flex ">
          Data of 3 days
        {forecast.forecastday.map((day) => (
            <FutureDays day={day} />
          ))} 
          </div>
      </div>

      {/*
     
      
        
        <div className="info">
          
        <HourDetails day={forecast.forecastday[0]}/>  
         </div>
        </div >
        
          
        </div>
      </div> */}
    </div>
  );
}

export default App;
