import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { PersonalPlanWrapper } from './styles'
import { Paper } from '@mui/material'

export default function PersonalPlan() {
    return (
        <ContentWrapper>
            <PersonalPlanWrapper>
                <Semester/>
                <Paper
                    elevation={0}
                    sx={{
                        width: 'calc(50% - 18px)',
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >2</Paper>
                <Paper
                    elevation={0}
                    sx={{
                        width: 'calc(50% - 18px)',
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >3</Paper>
                <Paper
                    elevation={0}
                    sx={{
                        width: 'calc(50% - 18px)',
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >3</Paper>
            </PersonalPlanWrapper>
        </ContentWrapper>
    )
}

const Semester = ({}) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: 'calc(50% - 18px)',
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            1111
        </Paper>
    )
}
