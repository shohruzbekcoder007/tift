import { Paper } from '@mui/material'
import React from 'react'
import CalendarDayWeek from '../CalendarDayWeek'
import { useLocation } from 'react-router'

export default function TutorSeeSchedule() {
    const {state} = useLocation()

    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                padding: "0",
                borderRadius: "10px"
            }}
        >
            <CalendarDayWeek  id={state?.id}/>
        </Paper>
    )
}