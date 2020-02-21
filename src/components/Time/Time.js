import React from 'react';
import styled from 'styled-components';

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #CDE1E3;
`;

export default function UpdateTime() {
  //Functions that handle the clock
  const parseHourMin = (num) => {
    let parseNum;

    //Otherwise there will only be one digit when the minute/hour is less then 10
    if (num < 10) {
      parseNum = '0' + num;
    } else {
      parseNum = num;
    }
    return parseNum;
  }

  //Change date into correct apple format
  const formatDate = (day, hour, min) => {
    let parseHour = parseHourMin(hour),
      parseMin = parseHourMin(min),
      date = day + ' ' + parseHour + ':' + parseMin;

    return date;
  }

  let d = new Date(),
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  //Check every half a second if the time has changed
  setTimeout(UpdateTime, 500);

  return (
    <TimeContainer>
      {formatDate(days[d.getDay()], d.getHours(), d.getMinutes())}
    </TimeContainer>
  );
}

