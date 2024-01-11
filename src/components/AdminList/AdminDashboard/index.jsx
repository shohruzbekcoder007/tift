import React from 'react'
import { BoxBody, ClassScheduleTableWrapper, ContentWrapper } from '../../../global_styles/styles'
import { Paper } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'

export default function AdminDashboard() {
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

                <BoxBody>
                    <ClassScheduleTableWrapper>
                        <table border="1" cellpadding="0" cellspacing="0">
                            <tr height="50">
                                <td align="center" width="150" rowspan="2">State of Health</td>
                                <td align="center" width="300" colspan="2">Fasting Value</td>
                                <td align="center" width="150">After Eating</td>
                            </tr>
                            <tr height="50">
                                <td align="center" width="150">Minimum</td>
                                <td align="center" width="150">Maximum</td>
                                <td align="center" width="150">2 hours after eating</td>
                            </tr>
                            <tr height="50">
                                <td align="center" width="150">Healthy</td>
                                <td align="center" width="150">70</td>
                                <td align="center" width="150">100</td>
                                <td align="center" width="150">Less than 140</td>
                            </tr>
                            <tr height="50">
                                <td align="center" width="150">Pre-Diabetes</td>
                                <td align="center" width="150">101</td>
                                <td align="center" width="150">126</td>
                                <td align="center" width="150">140 to 200</td>
                            </tr>
                            <tr height="50">
                                <td align="center" width="150">Diabetes</td>
                                <td align="center" width="150">More than 126</td>
                                <td align="center" width="150">N/A</td>
                                <td align="center" width="150">More than 200</td>
                            </tr>
                        </table>
                    </ClassScheduleTableWrapper>
                </BoxBody>
            </Paper>

        </ContentWrapper>
    )
}
