import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { TableTHHeader } from '../DiplomaTable'
import { BoxBody, ClassScheduleTableWrapper } from '../../global_styles/styles'

export default function IndividualPysical() {
  return (
    <Box
        sx={{width: '100%'}}
    >
        <Typography 
            variant="h2" 
            gutterBottom
            sx={{
                color: '#151515',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                mb: "16px"
            }}
        >
            Individual shaxsiy rejaXamrayev Azizjon Bahodir o‘g‘li
        </Typography>
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
            }}
        >
            <ClassScheduleTableWrapper color='transparent'>
                <table>
                    <thead>
                        <tr>
                            <TableTHHeader
                                text=""
                                iconc={null}
                            />
                            <TableTHHeader
                                text="Fan"
                                iconc={null}
                            />
                            <TableTHHeader
                                text="Kredit"
                                iconc={null}
                            />
                            <TableTHHeader
                                text="Olingan baho"
                                iconc={null}
                            />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan={7}>I-семестр</th>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr className='hr-tr'>
                            <td colSpan={4}></td>
                        </tr>
                        <tr>
                            <th rowSpan={7}>I-семестр</th>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr className='hr-tr'>
                            <td colSpan={4}></td>
                        </tr>
                        <tr>
                            <th rowSpan={7}>I-семестр</th>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Jismoniy tarbiya</th>
                            <th>0</th>
                            <th></th>
                        </tr>
                        <tr className='hr-tr'>
                            <td colSpan={4}></td>
                        </tr>
                    </tbody>
                </table>
            </ClassScheduleTableWrapper>
        </Paper>
    </Box>
  )
}
