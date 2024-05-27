import React from "react";

function FutureDays({ day }) {

    function handleDate(e){
        console.log(e.target.id)

    }
  return (
    <button className="dates" onClick={handleDate} id={day.date_epoch}>
        <p className="">{new Date(day.date).getDate()} {new Date(day.date).getUTCMonth}</p >
        <img src={day.day.condition.icon} alt={day.day.condition.text} className="img"/>
      <div className="">{day.day.maxtemp_c}°/{day.day.mintemp_c}°</div>
      
    </button>
  );
}

export default FutureDays;
