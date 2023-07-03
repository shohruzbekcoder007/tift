import React from 'react'
import { TrBox, TrBoxFooter, TrBoxHeader } from './styles'

export default function TableWeek({ weekNumber }) {
  return (
    <div>
        <tr>
                        <th rowSpan={6}>{weekNumber}</th>
                        <th>1</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>    
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>
                        <th><ScheduleTableBox/></th>

                    </tr>
                    <tr className='hr-tr'>
                        <th colSpan={8}></th>
                    </tr>
    </div>
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