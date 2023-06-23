import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { Paper } from '@mui/material'
import ClassScheduleTable from './ClassScheduleTable'

export default function ClassScheduleTeacher() {
  return (
    <ContentWrapper>
        <Paper 
            elevation={0}
            sx={{
                width: '100%',
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            <ClassScheduleTable/>
        </Paper>
    </ContentWrapper>
  )
}
