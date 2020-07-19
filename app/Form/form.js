import React, { useState } from "react";
import "./form.css";
import FormInput from "./formInput";

const Form = () => {
  const [eventName, setEvent] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [success, setSuccess] = useState("");
  const [displayForm, setDisplayForm] = useState("block");

  const SetEventName = (e) => {
    const eventName = e.target.value;
    setEvent(eventName);
  };
  const SetEventStart = (e) => {
    const eventName = e.target.value;
    setEventStart(eventName);
  };
  const SetEventEnd = (e) => {
    const eventName = e.target.value;
    setEventEnd(eventName);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    
 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("eventName", eventName);
    urlencoded.append("eventStart", eventStart);
    urlencoded.append("eventEnd", eventEnd);
    
    var requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/", requestOptions)
      .then(setSuccess("Thank you for your request!"), setEvent(''),setEventStart(''), setEventEnd(''), setDisplayForm('none'))
      .catch(error => console.log('error', error));
      
  };

  return (
    <div>
    {success.length>0?<h3 className="success">{success}</h3>: null}
      <form action="" method="post" class="form" onSubmit={onsubmit} style={{display: `${displayForm}`}}>
        <FormInput
          label="Event Name"
          type="text"
          name="eventName"
          onchange={SetEventName}
          value={eventName}
        />
        <FormInput
          label="Event Start Date and Time"
          type="datetime-local"
          name="startDate"
          onchange={SetEventStart}
          value={eventStart}
        />
        <FormInput
          label="Event End Date and Time"
          type="datetime-local"
          name="endDate"
          onchange={SetEventEnd}
          value={eventEnd}
        />
        <button type="submit" class="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
