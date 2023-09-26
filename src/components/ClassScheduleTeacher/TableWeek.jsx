import React from 'react'
import { TrBox, TrBoxActive, TrBoxFooter, TrBoxFooterActive, TrBoxHeader, TrBoxHeaderActive, TrBoxTrBoxActive } from './styles'

export default function TableWeek({ weekNumber, start, end, para, timetable }) {
    return (
        <>
            <tr>
                {/* <th rowSpan={6}>{weekNumber}</th> */}
                <th>{para}</th>
                <th>{start}- {end}</th>
                {
                    timetable?.length > 0 && timetable.map(elem => {
                        return (
                            <th style={{ padding: " 0 2px" }}><ScheduleTableBox group={elem.groups} status={elem.status} /></th>
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