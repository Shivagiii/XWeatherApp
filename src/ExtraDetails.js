import React from "react";

function ExtraDetails({ current, forecast }) {
    
  return (
    <div className=" mt-2  ">
      {forecast ? (
        <div className="row">
          <div className="  col-6 d-flex align-items-center flex-column">
            <p className="card-name ">Sunrise</p>
            <p className="fs-6">{forecast.astro.sunrise}</p>
          </div>
          <div className="  col-6 d-flex align-items-center flex-column">
            <p className="card-name">Sunset</p>
            <p className="fs-6">{forecast.astro.sunset}</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="row">
        <div className="  col-6 d-flex align-items-center flex-column">
          <p className="card-name">Precipitation </p>
          <p className="fs-6">{current.precip_in}</p>
        </div>
        <div className="  col-6 d-flex align-items-center flex-column">
          <p className="card-name">Wind Speed</p>
          <p className="fs-6">{current.wind_kph}kph</p>
        </div>
      </div>
    </div>
  );
}

export default ExtraDetails;
