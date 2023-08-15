import React from 'react'
import { ClassScheduleTableWrapper } from './styles'
import TableWeek from './TableWeek'
import listLanguage from './language.json'
import { useSelector } from 'react-redux'

export default function ClassScheduleTable() {

    const language = useSelector(state => state.language)

    return (
        <ClassScheduleTableWrapper>
            <table>
                <thead>
                    <tr>
                        <th>{listLanguage.Week[language]}</th>
                        <th>{listLanguage.Couple[language]}</th>
                        <th>{listLanguage.Monday[language]}</th>
                        <th>{listLanguage.Tuesday[language]}</th>
                        <th>{listLanguage.Wednesday[language]}</th>
                        <th>{listLanguage.thursday[language]}</th>
                        <th>{listLanguage.Friday[language]}</th>
                        <th>{listLanguage.saturday[language]}</th>
                    </tr>
                </thead>
                <tbody>
                    <TableWeek weekNumber={1} />
                    <TableWeek weekNumber={2} />
                </tbody>
            </table>
        </ClassScheduleTableWrapper>
    )
}