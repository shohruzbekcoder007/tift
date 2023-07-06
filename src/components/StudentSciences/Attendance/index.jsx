import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function Attendance() {
    return (
        <>
            <Typography
                variant="h6"
                component="h4"
                sx={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#151515",
                    fontStyle: "normal",
                    lineHeight: "normal"
                }}
            >
                Davomat
            </Typography>
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                salom
            </Paper>
        </>
    )
}
