import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import uzLocale from '@fullcalendar/core/locales/uz';
 
const events = [ 
  { 
    id: 1, 
    title: 'event 1', 
    start: '2023-07-07T10:45:00', 
    end: '2023-07-07T12:00:00',
    backgroundColor: "red",
    allDay: false
  },
  { 
    id: 12, 
    title: 'event 1', 
    start: '2023-07-07T10:45:00', 
    end: '2023-07-07T12:00:00',
    backgroundColor: "yellow",
    allDay: false
  },
  { 
    id: 2, 
    title: 'event 2', 
    start: '2023-07-07T13:00:00', 
    end: '2023-07-07T18:00:00', 
    allDay: false
  }, 
  { 
    id: 4, 
    title: 'event 4', 
    start: '2023-07-07T00:45:00', 
    end: '2023-07-07T01:00:00',
    backgroundColor: "green",
    allDay: false
  }
]; 
 
function CalendarDayWeek() { 
  return ( 
    <div className="CalendarDayWeek"> 
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
        initialView="timeGridWeek"
        timeZone= 'UTC'
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
        events={events} 
        nowIndicator 
        allDaySlot={false}
        dateClick={(e) => console.log(e.dateStr)} 
        eventClick={(e) => console.log(e.event.id)}
        locale={uzLocale}
      /> 
    </div> 
  ); 
} 
 
export default CalendarDayWeek;