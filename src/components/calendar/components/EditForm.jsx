import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { format } from 'date-fns'

import NewEventCalendar from './NewEventCalendar'
import EditTime from './EditTime'

export default function EditForm({closeDialog, refreshEvents, currentEvent}) {
    const [form, setForm] = useState(currentEvent);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (form.title != null && form.start.date != null) {
          if (form.start.time.allday === true) {
            setButtonDisabled(false);
          } else {
            if (
              form.start.time.hours != null &&
              form.start.time.minutes != null &&
              form.start.time.ap != null &&
              form.end.time.hours != null &&
              form.end.time.minutes != null &&
              form.end.time.ap != null
            ) {
              setButtonDisabled(false);
            } else {
              setButtonDisabled(true);
            }
          }
        } else {
          setButtonDisabled(true);
        }
      }, [form]);
    
      useEffect(() => {
        let startDate = new Date(currentEvent.start.date);
        let formatted = format(startDate, "EEE. MMM. d, y");
        setDisplayStartDate(formatted);
        let endDate = new Date(currentEvent.end.date);
        let formatted2 = format(endDate, "EEE. MMM. d, y");
        setDisplayEndDate(formatted2);
      }, []);
    
      const handleTitle = (value) => setForm({ ...form, title: value });
      const handleDescription = (value) => setForm({ ...form, description: value });
      const handleLocation = (value) => setForm({ ...form, location: value });
    
      const UpdateEvent = (event) => {
        event.preventDefault();
        setStatus("loading");
        //+++++++++JSON PUT METHOD HERE+++++++++++++++
        //THEN REFRESH EVENTS
        // THEN SET STATUS && SET BUTTON DISABLED
        //CATCH ERRORS
      }
      //GRAB THE START AND END DATE FROM THE INPUT FIELDS
        const [displayStartDate, setDisplayStartDate] = useState("");
        const [displayEndDate, setDisplayEndDate] = useState("");

        const startField = () => {
            document.getElementById("CalendarFormStart").style.visibility = "visible";
        };
        const endField = () => {
            document.getElementById("CalendarFormEnd").style.visibility = "visible";
        };
//SAME CALENDAR STATES AND FUNCTIONS 
const [CalendarStartDate, setCalendarStartDate] = useState(new Date());
const [CalendarEndDate, setCalendarEndDate] = useState(new Date());

const onStartCalendarChange = (nextValue) => setCalendarStartDate(nextValue);
const onEndCalendarChange = (nextValue) => setCalendarEndDate(nextValue);

const selectStartDate = (value) => {
  setForm({ ...form, start: { ...form.start, date: value } });
  setCalendarStartDate(value);
};
const selectEndDate = (value) => {
  setForm({ ...form, end: { ...form.end, date: value } });
  setCalendarEndDate(value);
};

// 🆗 OK BUTTON IN CALENDARVIEW.JSX🆗
//🏁 START DATE 
//🎬 END DATE 

    return(
        <div>
            <NewEventCalendar />
            <EditTime />
        </div>
    )
}