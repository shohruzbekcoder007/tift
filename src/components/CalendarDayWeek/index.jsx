// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import uzLocale from '@fullcalendar/core/locales/uz';
import { Paper } from '@mui/material';
import { getClassSchedule } from './requests';
import { useEffect, useState } from 'react';
import { my_tasschedule } from '../../utils/API_urls';
import ClassScheduleTable from '../../components/ClassScheduleTeacher/ClassScheduleTable'

function CalendarDayWeek() {
  const [Semester, setSemester] = useState(2);
  const [ScheduleList, setScheduleList] = useState([]);
  useEffect(() => {
    getClassSchedule(`${my_tasschedule}`, (response) => {
      // console.log(response.data);
      setScheduleList(response.data || []) 
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
          // minWidth: "300px"
        }}
        >
        <ClassScheduleTable table={ScheduleList?.results}/>
        {/* <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          timeZone='GMT+5'
          eventMinWidth="100px"
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
        /> */}
      </Paper>
    </>
  );
}

export default CalendarDayWeek;