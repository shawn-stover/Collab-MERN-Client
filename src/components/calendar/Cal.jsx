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
        
            <Wrapper>
            {/* <Events>
              <h4>Upcoming Events</h4>
              <br></br>
              <p className="event"><span>10:00am </span>- Brunch with Bill</p><hr />
              <p className="event"><span>12:00pm</span> - Lunch with Jill</p><hr />
              <p className="event"><span>2:00pm</span> - Meeting with Brian</p><hr />
              <p className="event"><span>5:00pm</span> - Pickup Jenny</p><hr />
            </Events> */}
            {/* <People>
              <label for='checkboxBill'>
                Bill
              </label>
              <input type='checkbox' name='checkboxBill' />
              <br></br>
              <label for='checkboxJill'>
                Jill
              </label>
              <input type='checkbox' name='checkboxJill' />
              <br></br>
              <label for='checkboxBrian'>
                Brian
              </label>
              <input type='checkbox' name='checkboxBrian' />
              <br></br>
              <label for='checkboxJenny'>
                Jenny
              </label>
              <input type='checkbox' name='checkboxJenny' />
              <br></br>
            </People> */}
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
        
    )
}
// const People = styled.div`
//     width: 190px;
//     margin: 10px 0px;
//     .h3 {
//       margin: 5px 0px;
//       padding: 10px 0px;
//     }
//     &:hover {
//       text-decoration: underline;
//     }
// `

// const Events = styled.div`
//     width: 190px;
//     margin: 10px 0px;
//     .p {
//       font-size: 10px;
//       margin: 5px 0px;
//       padding: 10px 0px;
//     }
//     &:hover {
//       text-decoration: underline;
//     }
// `
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  .react-calendar {
    width: 700px;
    height: 500px;
    border: none;
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
    width: 60px;
    height: 75px;
    text-align: center;
    padding: 0.6em 0em;
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