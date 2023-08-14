import React, { useEffect, useState } from 'react'
import { BoxBody, ContentWrapper } from '../../global_styles/styles'
import { Alert, Paper } from '@mui/material'
import { ClassScheduleTableWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { useLocation } from "react-router-dom"
import { syllabus_request_id } from '../../utils/API_urls'
import { getTeacherSyllabusRequest } from './requests'
import { dateFormatter } from '../../utils/dateFormatter'

export default function ApplicationsReport() {

    const location = useLocation();

    const [syllabus, setSyllabus] = useState(null)

    useEffect(() => {
        const data = location.state?.data;
        console.log(`${syllabus_request_id}/${data}/`, data)
        getTeacherSyllabusRequest(`${syllabus_request_id}/${data}/`, (response) => {
            setSyllabus(response.data)
            console.log(response.data)
        }, (error) => {
            console.log(error)
        })
    }, [])

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
                        <table>
                        <thead>
                            <tr>
                                <TableTHHeader
                                    text="Asosiy ma’lumotlar"
                                    iconc={null}
                                    colspan={2}
                                />
                            </tr>
                        </thead>
                        <tbody>
                            {syllabus?
                            <>
                            <tr>
                                <th>Ariza raqami</th>
                                <th>{syllabus.id}</th>
                            </tr>
                            <tr>
                                <th>Fan</th>
                                <th>{syllabus.science}</th>
                            </tr>
                            <tr>
                                <th>O`qituvchi</th>
                                <th>{syllabus.teacher}</th>
                            </tr>
                            <tr>
                                <th>O`quv rejasi</th>
                                <th>'|'</th>
                            </tr>
                            <tr>
                                <th>Ariza topshirilgan sana</th>
                                <th>{dateFormatter(syllabus.updated_at)}</th>
                            </tr>
                            </>:
                            <tr>
                                <th colSpan={2} align='center'>Ma’lumot yo’q</th>
                            </tr>
                            }
                        </tbody>
                        </table>
                    </ClassScheduleTableWrapper>
                </BoxBody>
                <Alert severity="success">Holati: Topshirilgan</Alert>
            </Paper>
    </ContentWrapper>
  )
}
