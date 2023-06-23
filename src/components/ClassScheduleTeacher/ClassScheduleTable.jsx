import React from 'react'
import { ClassScheduleTableWrapper, TrBox, TrBoxFooter, TrBoxHeader } from './styles'
import TableWeek from './TableWeek'

export default function ClassScheduleTable() {
    return (
        <ClassScheduleTableWrapper>
            <table>
                <thead>
                    <tr>
                        <th>Hafta</th>
                        <th>Juftlik</th>
                        <th>Dushanba</th>
                        <th>Seshanba</th>
                        <th>Chorshanba</th>
                        <th>Payshanba</th>
                        <th>Juma</th>
                        <th>Shanba</th>
                    </tr>
                </thead>
                <tbody>
                    <TableWeek weekNumber={1}/>
                    <TableWeek weekNumber={2}/>
                </tbody>
            </table>
        </ClassScheduleTableWrapper>
    )
}


const ScheduleTableBox = () => {
    return (
        <TrBox>
            <TrBoxHeader>DT loyihalarini boshqarish</TrBoxHeader>
            <TrBoxFooter>
                <span className="group">SPM001</span>
                <span className="room">E-202</span>
            </TrBoxFooter>
        </TrBox>
    )
}