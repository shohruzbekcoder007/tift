import React from 'react'
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

  // Get the current day of the week
  const currentDayOfWeek = currentDate.toLocaleDateString('en-US', options);
  return (
    <ClassScheduleTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Para</th>
            <th>         Vaqt           </th>
            {
              WeekDay.map(elem => {
                if (elem.eng == currentDayOfWeek) {
                  return (
                    <th style={{ color: "#24bd70" }}>{elem[language]}</th>
                  )
                } else {
                  return (
                    <th>{elem[language]}</th>
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