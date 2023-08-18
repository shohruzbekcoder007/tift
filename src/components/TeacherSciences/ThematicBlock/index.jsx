import { Button, Checkbox, Modal, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../global_styles/styles'
import { TableTHHeader } from '../../DiplomaTable'
import { UnableToSpecify, TeacherSciencesButtonBox, ModalSubtitle } from '../../Vedomost/styles'

export default function ThematicBlock() {
  const [file, setFile] = useState(null);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const setFileHandler = (newValue, info) => {
    setFile(newValue)
  }

  return (
    <>
    <Typography
    variant='h2'
    sx={{
      color: '#000',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
      mb: "26px"
    }}
  >
    O’zlashtirish qaydnomasi
  </Typography>
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
                  text="#"
                  iconc={null}
                />
                <TableTHHeader
                  text="SPM201-1-29-05-2023"
                  iconc={null}
                />
                <TableTHHeader
                  text="NB"
                  iconc={null}
                />
              </tr>
            </thead>
            <tbody>
              {
                [1, 2, 3, 4, 5].map((elem, index) => {
                  return (
                    <tr key={index}>
                      <th>{elem}</th>
                      <th>Ahmedov Ulug‘bek Zarifboy o‘g‘li (Dasturiy injiniring - 321-19 DIr)</th>
                      <th style={{ width: "200px" }}>
                        <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                          <Checkbox {...label} />
                        </TeacherSciencesButtonBox>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </ClassScheduleTableWrapper>
      </BoxBody>
    </Paper>
    </>
  )
}
