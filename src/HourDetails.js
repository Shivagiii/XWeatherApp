import React from "react";

const HourDetails = ({ day }) => {
  return (
    <div className="hourDivMain row  mx-1">
      {day ? day.map((h) =>
         <div className="hourDiv col-1">
          
          <p>{new Date(h.time).getHours()}</p>
          <img src={h.condition.icon } alt={h.condition.text} className="img"/> 
          <p>{h.temp_c}</p>
        
         
          </div>
         ) : <></>}
    </div>
  );
};

export default HourDetails;
