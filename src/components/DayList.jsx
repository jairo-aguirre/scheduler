import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const createDayList = () => {
    const days = props.days.map(day => 
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={event => props.setDay(day.name)}  
      />
    );

    return days;
  };

  return (
    <ul>
      {createDayList()}
    </ul>
  );
};

export default DayList;