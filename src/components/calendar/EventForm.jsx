import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import NewEventCalendar from "./NewEventCalendar";
import NewEventTime from "./NewEventTime";
import { Button, Input } from "@material-ui/core";
import { FiCalendar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiNotification2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FormControl } from '@material-ui/core'
import { FcCheckmark } from "react-icons/fc";

const INITIAL_EVENT = {
    kind: "calendar-event",
    title: "",
    description: "",
    location: "",
    creator: {
      name: "",
      userId: "",
    },
    start: {
      date: null,
      time: { hours: null, minutes: null, ap: null, allday: false },
    },
    end: {
      date: null,
      time: { hours: null, minutes: null, ap: null, allday: false },
    }}


export default function EventForm({ closeDialog, refreshEvents }) {
    const [form, setForm] = useState(INITIAL_EVENT);
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
      const handleTitle = (value) => setForm({ ...form, title: value });
      const handleDescription = (value) => setForm({ ...form, description: value });
      const handleLocation = (value) => setForm({ ...form, location: value });
    
      const CreateEvent = (event) => {
        event.preventDefault();
        setStatus("loading");

      }

      //INPUT FIELDS FOR START & END
      const [displayStartDate, setDisplayStartDate] = useState("");
      const [displayEndDate, setDisplayEndDate] = useState("");
    
      const startField = () => {
        document.getElementById("CalendarFormStart").style.visibility = "visible";
      };
      const endField = () => {
        document.getElementById("CalendarFormEnd").style.visibility = "visible";
      };

      //CALENDAR FUNCTIONS
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
  
  
  //CALENDAR SUBMIT INFO
  const submitStartDate = (event) => {
    event.preventDefault();
    document.getElementById("CalendarFormStart").style.visibility = "hidden";

    let formatted = format(CalendarStartDate, "EEE. MMM. d, y");
    setDisplayStartDate(formatted);
    if (form.end.date < CalendarStartDate) {
      setForm({ ...form, end: { ...form.end, date: CalendarStartDate } });
      let formatted = format(CalendarStartDate, "EEE. MMM. d, y");
      setDisplayEndDate(formatted);
    }
  };
  const submitEndDate = (event) => {
    event.preventDefault();
    document.getElementById("CalendarFormEnd").style.visibility = "hidden";
    let formatted = format(CalendarEndDate, "EEE. MMM. d, y");
    setDisplayEndDate(formatted);
    if (form.start.date > CalendarEndDate) {
      setForm({ ...form, start: { ...form.start, date: CalendarEndDate } });
      let formatted = format(CalendarEndDate, "EEE. MMM. d, y");
      setDisplayStartDate(formatted);
    }
  };
    return(
        <div>
          <div>
            <Input
              type="text"
              placeholder="Your event title"
              onChange={(ev) => handleTitle(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="What will happen?"
              onChange={(ev) => handleDescription(ev.target.value)}
            />
          </div>
          <div>
            <h4>Date</h4>
            <div className="dateNTimeInputSection">
              <FormControl>
                <Input
                  readOnly
                  placeholder="Start date"
                  onClick={() => startField()}
                  value={displayStartDate}
                />
                <FiCalendar color="#b3b3b3" />
              </FormControl>
              <BsArrowRight />
            
                <Input
                  placeholder="End date"
                  onClick={() => endField()}
                  value={displayEndDate}
                />
                <FiCalendar color="#b3b3b3" />
              
            </div>
            <div id="CalendarFormStart">
              <NewEventCalendar
                onChange={onStartCalendarChange}
                value={CalendarStartDate}
                onClickDay={(value, event) => selectStartDate(value, event)}
              />
              <div className="ButtonBox">
                <Button onClick={(event) => submitStartDate(event)}>
                  Ok
                </Button>
              </div>
            </div>
            <div id="CalendarFormEnd">
              <NewEventCalendar
                onChange={onEndCalendarChange}
                value={CalendarEndDate}
                onClickDay={(value, event) => selectEndDate(value, event)}
              />
              <div className="ButtonBox">
                <Button onClick={(event) => submitEndDate(event)}>
                  Ok
                </Button>
              </div>
            </div>
          </div>
            <NewEventTime form={form} setForm={setForm} />
          <div>
            <h4>Location</h4>
            <div>
              <GrLocation />
              <Input
                type="text"
                placeholder="Add location"
                onChange={(ev) => handleLocation(ev.target.value)}
              />
            </div>
          </div>
          <FormControl>
            <h4>Notifications</h4>
            <RiNotification2Line />{" "}
            <Input type="text" placeholder="Add notification" />
          </FormControl>
        <div>
          <Button onClick={closeDialog}>
            <GrClose />
          </Button>
          <Button
            onClick={(ev) => CreateEvent(ev)}
            disabled={buttonDisabled}
          >
            {status === "idle" ? (
              "Create event"
            ) : status === "loading" ? (
              <p>Loading</p>
            ) : (
              "Create event"
            )}
          </Button>
        </div>
        {status === "created" ? (
          <h3>
            ✅ Your event was added to your calendar!
          </h3>
        ) : null}
      </div>
    )
}