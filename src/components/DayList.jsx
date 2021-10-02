import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const createDayList = () => {
    const mapDayList = props.days.map(day => 
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay}  
      />
    );

    return mapDayList;
  };

  return (
    <ul>
      {createDayList()}
    </ul>
  );
};

export default DayList;