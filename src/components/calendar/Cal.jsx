import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import styled from "styled-components";



export default function Cal({updateCurrentMonth}) {
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
      setValue(nextValue);
    }

    let history = useHistory();

    const handleClickDate = (value) => {
      let formattedDate = format(value, "y-MM-dd");
      history.push(`/date/${formattedDate}`);
    };
  
    const tileContent = ({ date, view }) =>
      view === "month" && date.getDay() === 2 ? <p></p> : null;
  
    return(
        <div>
            <Wrapper>
            <Calendar
                 tileContent={tileContent}
                 onChange={onChange}
                 defaultView="month"
                 value={value}
                 prev2Label={null}
                 next2Label={null}
                 onClickDay={(value, event) => handleClickDate(value, event)}
                 onActiveStartDateChange={({ activeStartDate, value, view }) => {
                   updateCurrentMonth(activeStartDate.getMonth());}
                }/>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
  .react-calendar {
    width: 600px;
    background: white;
    line-height: 2em;
    text-align: center;
  }
  .react-calendar button {
    border: none;
    outline: none;
    font-size: 1.3rem;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: 400;
    font-size: 1.1em;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar__tile {
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 0.7em 0.7em;
    background-color: white;
    border-radius: 10px;
  }
  .react-calendar__navigation {
    height: 2.5rem;
    margin-bottom: 10px;
  }

  .react-calendar__navigation button {
    min-width: 40px;
    background: white;
    font-size: 1.4rem;
    padding: 0;
    margin: 0 3px;
    border: none;
    text-transform: lowercase;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #c1c7c3;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
`;