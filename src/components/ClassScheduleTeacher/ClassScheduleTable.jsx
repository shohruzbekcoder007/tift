import React from 'react'
import { ClassScheduleTableWrapper } from './styles'
import TableWeek from './TableWeek'
import listLanguage from './language.json'
export default function ClassScheduleTable() {
    return (
        <ClassScheduleTableWrapper>
            <table>
                <thead>
                    <tr>
                        <th>{listLanguage.Week['ru']}</th>
                        <th>{listLanguage.Couple['ru']}</th>
                        <th>{listLanguage.Monday['ru']}</th>
                        <th>{listLanguage.Tuesday['ru']}</th>
                        <th>{listLanguage.Wednesday['ru']}</th>
                        <th>{listLanguage.thursday['ru']}</th>
                        <th>{listLanguage.Friday['ru']}</th>
                        <th>{listLanguage.saturday['ru']}</th>
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