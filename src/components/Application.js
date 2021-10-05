import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import 'components/Appointment';
import Appointment from "./Appointment";
import axios from 'axios';

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Jairo Aguirre",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  },
  {
    id: 4,
    time: "4pm",
  },
  {
    id: "last",
    time: "5pm",
  }
];

export default function Application(props) {
  const [day, setDay] = useState('Monday');
  const [days, setDays] = useState([]);


  useEffect(() => {
    axios.get('/api/days')
      .then(response => {
        setDays([response]);
      });
  }, []);

  const createAppointments = (array) => {
    const appointments = array.map(appointment => 
      <Appointment 
        key={appointment.id}
        {...appointment}
      />
    );

    return appointments;
  };

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            day={day}
            setDay={setDay}
          />  
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {createAppointments(appointments)}
      </section>
    </main>
  );
}
