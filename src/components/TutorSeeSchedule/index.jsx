import { Paper } from '@mui/material'
import React from 'react'
import CalendarDayWeek from '../CalendarDayWeek'

export default function TutorSeeSchedule() {
    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                padding: "0",
                borderRadius: "10px"
            }}
        >
            <CalendarDayWeek />
        </Paper>
    )
}