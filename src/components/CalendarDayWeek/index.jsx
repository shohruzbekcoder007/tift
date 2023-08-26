import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import uzLocale from '@fullcalendar/core/locales/uz';
import { Paper } from '@mui/material';
import { getClassSchedule } from './requests';
import { useEffect, useState } from 'react';
import { my_tasschedule } from '../../utils/API_urls';

const events = [
  // { 
  //   id: 1, 
  //   title: 'event 1', 
  //   start: '2023-08-09T10:45:00', 
  //   end: '2023-08-09T12:00:00',
  //   backgroundColor: "green",
  //   allDay: false
  // },
  // { 
  //   id: 12, 
  //   title: 'event 1', 
  //   start: '2023-07-07T10:45:00', 
  //   end: '2023-07-07T12:00:00',
  //   backgroundColor: "yellow",
  //   allDay: false
  // },
  // { 
  //   id: 2, 
  //   title: 'event 2', 
  //   start: '2023-07-07T13:00:00', 
  //   end: '2023-07-07T18:00:00', 
  //   allDay: false
  // }
];

function CalendarDayWeek() {
  const [Semester, setSemester] = useState(2);
  const [ScheduleList, setScheduleList] = useState([]);
  useEffect(() => {
    getClassSchedule(`${my_tasschedule}?semester=${Semester}`, (response) => {
      console.log(response.data);
      setScheduleList(response.data)
    }, (error) => {
      console.log(error)
    })
  }, []);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px",
          // backgroundColor: "transparent"
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          timeZone='GMT+5'
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
          nowIndicator
          allDaySlot={false}
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
          locale={uzLocale}
        />
      </Paper>
    </>
  );
}

export default CalendarDayWeek;