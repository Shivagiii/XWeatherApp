import React from "react";

function CityDetails({ location, forecast, current }) {
  return (
    <div className="card-display d-flex flex-column p-2">
      <div className="row  justify-content-space-around w-100 ">
        <div className="col d-flex flex-column align-items-center ">
          <p className="card-name">
            {location.name},{location.country}
          </p>
          <p>Today</p>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <p>25`c</p>
          <p>Clear</p>
         </div>
          <div className="col d-flex justify-content-center ">
            <img
              src={current.condition ? current.condition.icon : ``}
              alt={location.name}
            />
        </div>
      </div>
      <div className="weather-cards  row">
        <div className="weather-card  col-3">
          <p className="card-name">Temp</p>
          <p className="fs-6">{current.temp_c}°C</p>
        </div>
        <div className="weather-card  col-3">
          <p className="card-name">Humidity</p>
          <p className="fs-6">{current.humidity}%</p>
        </div>
        <div className="weather-card  col-3">
          <p className="card-name">UV</p>
          <p className="fs-6">{current.uv}</p>
        </div>
        <div className="weather-card  col-3">
          <p className="card-name">Pressure</p>
          <p className="fs-6">{current.pressure_in}</p>
        </div>
      </div> 
    </div>
  );
}

export default CityDetails;
