import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

export default function NewEventCalendar({onChange, value, onClickDay}) {
    return(
        <div>
            <Calendar
        onChange={onChange}
        defaultView="month"
        value={value}
        prev2Label={null}
        next2Label={null}
        onClickDay={onClickDay}
      />
        </div>
    )
}