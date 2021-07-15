import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from 'axios'
import Cal from './Cal'
import NewEvent from "./NewEvent"
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

//import { BiArrowBack } from "react-icons/bi";

export default function CalendarView() {
    const history = useHistory();
    const [status, setStatus] = useState("loading");
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [MonthEvents, setMonthEvents] = useState([]);

    const updateCurrentMonth = (month) => setCurrentMonth(month);

    useEffect(() => {
        setStatus("loading");
        fetch(`/events/month/${currentMonth}`)
          .then((res) => res.json())
          .then((res) => {
            setMonthEvents(res.data);
            setStatus("idle")
         })
          .catch((error) => console.log("💥error!", error));
      }, [currentMonth]);
    
      
    
      const getEventsAfterCreate = async () => {
        setStatus("loading");
    
        await fetch(`/events/month/${currentMonth}`)
          .then((res) => res.json())
          .then((res) => {
            setMonthEvents(res.data);
            setStatus("idle");
          })
          .catch((error) => console.log("💣error!", error));
      };
    return(
        <Wrapper>
            <NewEvent refreshEvents={getEventsAfterCreate} />
            <Tabs>
        
        <TabItem onClick={() => console.log("/calendar-month")}>Monthly</TabItem>
        <TabItem
          onClick={() => console.log(`/week/${format(new Date(), "y-MM-dd")}`)}
          style={{ backgroundColor: "white" }}
        >
          Weekly
        </TabItem>
        <TabItem
          style={{ backgroundColor: "white" }}
          onClick={() => console.log(`/date/${format(new Date(), "y-MM-dd")}`)}
        >
          Daily
        </TabItem>
      </Tabs>
      <Cal updateCurrentMonth={updateCurrentMonth} />

      {status === "loading" ? null : (
        <>
          <EventsSection>
            {MonthEvents.map((ev) => (
              <EventBox
                onClick={() =>
                  console.log(`/date/${format(new Date(ev.date), "y-MM-dd")}`)
                }
              >
                <DateBox>
                  <div className="dayName">
                    {format(new Date(ev.date), "EEE.")}
                  </div>
                  <div className="dayNum">{format(new Date(ev.date), "d")}</div>
                </DateBox>
                <DayEventsBox>
                  {ev.events.map((meeting) => (
                    <div>
                      <EventTitle >
                        {"‣ "}
                        {meeting.title}
                      </EventTitle>
                    </div>
                  ))}
                </DayEventsBox>
              </EventBox>
            ))}
          </EventsSection>
        </>
      )}
        </Wrapper>
    )
}  
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  margin-right: 3px;
`;
const TabItem = styled.div`
  flex-grow: 1;
  text-align: center;
  background-color: white;
  color: black;
  margin-bottom: 20px;
  padding: 20px 0;
  font-size: 1.2rem;
`;
// const NoEventsSection = styled.div`
//   margin-top: 20px;
//   text-align: center;
//   font-size: 1.2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const EventsSection = styled.div``;
const slideUpAnimation = keyframes`
    from {
    margin-top: 100%;
    opacity: 0;
  }
  to {
    margin-top: 0%;
    opacity:0.4;
  }
`;
const EventBox = styled.div`
  display: flex;
  border: none;
  animation: ${slideUpAnimation} 0.3s;
`;
const DateBox = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  min-width: 100px;
  min-height: 100px;
  .dayName {
    color: green;
    font-size: 1rem;
    line-height: 1rem;
  }
  .dayNum {
    color: green;
  }
`;

const DayEventsBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #dae2f1;
`;

const EventTitle = styled.div`
  padding-left: 15px;
  font-size: 1.4rem;
`;

{/* <NavIcon>
          <AiOutlineHome onClick={() => history.push("/")} size={30} />
        </NavIcon>
        <NavIcon>
          <BiArrowBack onClick={() => history.goBack()} size={30} />
        </NavIcon> */}