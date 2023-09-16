import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { Paper } from '@mui/material'
// import ClassScheduleTable from './ClassScheduleTable'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import uzLocale from '@fullcalendar/core/locales/uz';
import { getClassSchedule } from './requests';
import { teacher_schedule } from '../../utils/API_urls';

export default function ClassScheduleTeacher() {

  const [ScheduleList, setScheduleList] = useState([]);
  useEffect(() => {
    getClassSchedule(teacher_schedule, (response) => {
      console.log(response.data);
      setScheduleList(response.data)
    }, (error) => {
      console.log(error)
    })
  }, []);

  return (
    <ContentWrapper>
        <Paper 
            elevation={0}
            sx={{
                width: '100%',
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            {/* <ClassScheduleTable/>  */}
            {/* student table  */}
            <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
        initialView="timeGridWeek"
        timeZone= 'GMT+5'
        headerToolbar={{ 
          center: 'timeGridWeek,timeGridDay',
          right: "",
          left: ""
        }} 
        customButtons={{ 
          new: { 
            text: 'new', 
            click: () => console.log('new event'), 
          }, 
        }}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
        events={ScheduleList}
        // eventHeight={650}
        eventHeight={"300px"}
        // eventShortHeight={120}
        // eventColor='#378006'
        // eventFontSize="20px"
        // eventShortHeight={"120px"}
        // expandRows={true}
        // handleWindowResize={false}
        // contentHeight={"300px"}
        windowResizeDelay={"200px"}
        contentHeight={'auto'}
        nowIndicator 
        allDaySlot={false}
        dateClick={(e) => console.log(e.dateStr)} 
        eventClick={(e) => console.log(e.event.id)}
        locale={uzLocale}
      /> 
        </Paper>
    </ContentWrapper>
  )
}
