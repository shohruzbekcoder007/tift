import React from 'react'
import { TrBox, TrBoxActive, TrBoxFooter, TrBoxFooterActive, TrBoxHeader, TrBoxHeaderActive, TrBoxTrBoxActive } from './styles'
import { useSelector } from 'react-redux'
import WeekDay from '../../dictionary/WeekDay'

export default function TableWeek({ weekNumber, start, end, para, timetable }) {
  const language = useSelector(state => state.language)

    return (
        <>
            <tr>
                {/* <th rowSpan={6}>{weekNumber}</th> */}
                <th data-cell="Para">{para}</th>
                <th data-cell="Vaqt">{start}- {end}</th>
                {
                    timetable?.length > 0 && timetable.map((elem,index) => {
                        return (
                            <th data-cell={WeekDay[index][language]} key={index} style={{ padding: " 0 2px" }}><ScheduleTableBox group={elem.groups} status={elem.status} /></th>
                        )
                    })
                }
                {/* <th><ScheduleTableBox /></th>
                <th><ScheduleTableBox /></th>
                <th><ScheduleTableBox /></th>
                <th><ScheduleTableBox /></th>
                <th><ScheduleTableBox /></th> */}
            </tr>

            {/* <tr className='hr-tr'>
                        <th colSpan={9}></th>
                    </tr> */}
        </>
    )
}

const ScheduleTableBox = ({ group }) => {
    return group.length > 0 && group?.map(elem => {
        if (elem.status) {
            return (
                    <TrBoxActive>
                        <TrBoxHeaderActive>{elem.science}</TrBoxHeaderActive>
                        <TrBoxFooterActive>
                            <span className="group">{elem.group}</span>
                            <span className="room">{elem.room}</span>
                        </TrBoxFooterActive>
                    </TrBoxActive>
            )
        } else {
            return (
                    <TrBox>
                        <TrBoxHeader>{elem.science}</TrBoxHeader>
                        <TrBoxFooter>
                            <span className="group">{elem.group}</span>
                            <span className="room">{elem.room}</span>
                        </TrBoxFooter>
                    </TrBox>
            )

        }
    })
}