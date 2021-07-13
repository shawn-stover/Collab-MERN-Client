import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FormControl, Select } from '@material-ui/core'
// import Select from '@material-ui/core/Select';

const HOURS = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
const MINUTES = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];


export default function NewEventTime({ form, setForm }) {
    const allDaySelect = (checked) => {
        if (checked) {
          setForm({
            ...form,
            start: { ...form.start, time: { ...form.start.time, allday: true } },
            end: { ...form.end, time: { ...form.end.time, allday: true } },
          });
        } else {
          setForm({
            ...form,
            start: { ...form.start, time: { ...form.start.time, allday: false } },
            end: { ...form.end, time: { ...form.end.time, allday: false } },
          });
        }
      };
    
      const onStartHourChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, hours: value } },
        });
      };
      const onStartMinChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, minutes: value } },
        });
      };
      const onStartAPChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, ap: value } },
        });
      };
      const onEndHourChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, hours: value } },
        });
      };
      const onEndMinChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, minutes: value } },
        });
      };
      const onEndAPChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, ap: value } },
        });
      };
    
    return(
        <div> 
             <div>
      <FormControl>
        <h2 className="TimeLabel">Time</h2>{" "}
        <div className="AllDaySection">
          <input
            type="checkbox"
            className="checkBoxBox"
            onChange={(ev) => allDaySelect(ev.target.checked)}
          />
          <label>All-day</label>
        </div>
      </FormControl>
      <div>
        <Select onChange={(ev) => onStartHourChange(ev.target.value)}>
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select onChange={(ev) => onStartMinChange(ev.target.value)}>
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select onChange={(ev) => onStartAPChange(ev.target.value)}>
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
        
          <BsArrowRight />
       
        <Select onChange={(ev) => onEndHourChange(ev.target.value)}>
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select onChange={(ev) => onEndMinChange(ev.target.value)}>
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select onChange={(ev) => onEndAPChange(ev.target.value)}>
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
      </div>
    </div>
        </div>
    )
}