import React, { useEffect, useState } from 'react'
import { ClassScheduleTableWrapper } from './styles'
import TableWeek from './TableWeek'
import listLanguage from './language.json'
import { useSelector } from 'react-redux'
import WeekDay from '../../dictionary/WeekDay'
export default function ClassScheduleTable({ table }) {
  const language = useSelector(state => state.language)
  const currentDate = new Date();

  // Define options to get the day of the week (e.g., "Monday")
  const options = { weekday: 'long' };
  const [currentWeekDateNumbers, setCurrentWeekDateNumbers] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  console.log(currentMonth);

  useEffect(() => {
    const currentDate = new Date();
    const daysInWeek = 7;

    // Create an array to store the day numbers for the current week starting from Monday
    const currentWeekDateNumbers = Array.from({ length: daysInWeek }, (_, index) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - currentDate.getDay() + 1 + index);
      return date.getDate(); // Extract only the day of the month
    });

    console.log(currentWeekDateNumbers);

    setCurrentWeekDateNumbers(currentWeekDateNumbers);
  }, []);

  // Get the current day of the week
  const currentDayOfWeek = currentDate.toLocaleDateString('en-US', options);
  return (
    <ClassScheduleTableWrapper>
      <table>
        <thead>
          <tr>
            <th style={{width: "30px"}}>Para</th>
            <th style={{width: "120px"}}>Vaqt</th>
            {
              WeekDay.map((elem,index) => {
                if (elem.eng == currentDayOfWeek) {
                  return (
                    <th style={{ color: "#24bd70",width: "150px"}}>{elem[language]}  {currentWeekDateNumbers[index]}/ {currentMonth}</th>
                  )
                } else {
                  return (
                    <th style={{width: "150px"}} >{elem[language]} {currentWeekDateNumbers[index]}/ {currentMonth}</th>
                  )
                }
              })
            }
            {/* <th>{listLanguage.Week['uz']}</th> */}
            {/* <th>Vaqt</th>
                        <th>{listLanguage.Monday[language]}</th>
                        <th>{listLanguage.Tuesday[language]}</th>
                        <th>{listLanguage.Wednesday[language]}</th>
                        <th>{listLanguage.thursday[language]}</th>
                        <th>{listLanguage.Friday[language]}</th>
                        <th>{listLanguage.saturday[language]}</th>
                        <th>{listLanguage.sunday[language]}</th> */}
          </tr>
        </thead>
        <tbody>
          {
            table?.length > 0 ? table?.map((elem,index) => {
              return (
                <TableWeek key={index} weekNumber={1} start={elem.start_time} end={elem.end_time} para={elem.name} timetable={elem.timetable} />
              )
            })
              :
              <tr>
                <th data-cell="Ma'lumot" colSpan={12} align='center'>Ma'lumot yo'q</th>
              </tr>
          }
          {/* <TableWeek weekNumber={2}/> */}
        </tbody>
      </table>
    </ClassScheduleTableWrapper>
  )
}