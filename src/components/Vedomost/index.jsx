import { Button, Modal, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { UnableToSpecify, TeacherSciencesButtonBox, ModalSubtitle } from './styles'
import { Link, Outlet } from 'react-router-dom'
import AllSelectFullWidth from '../AllSelectFullWidth'
import CustomizedInputSimple from '../CustomizedInputSimple'

export default function Vedomost() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        padding: "20px",
        borderRadius: "10px"
      }}
    >
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
      <BoxHeader>
        <Typography
          variant='h2'
          sx={{
            color: '#00753B',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '150%',
            padding: "10px",
            alignItem: "center",
            bgcolor: "rgba(0, 138, 22, 0.08)",
            borderRadius: "10px",
            width: "100%"
          }}
        >
          Talabalarga baxo qo'yish muddati: Topshirish muddatidan keyin 2 kun.
        </Typography>

      </BoxHeader>
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
                  text="SMP201-1"
                  iconc={null}
                />
                <TableTHHeader
                  text="                                                                                                                 Dastury ta'minotni tan narxini baholash"
                  iconc={null}
                />
              </tr>
            </thead>
            <tbody>
              {
                [1, 2, 3, 4, 5].map((elem, index) => {
                  return (
                    <tr key={index}>
                      <th>1</th>
                      <th>Ahmedov Ulug‘bek Zarifboy o‘g‘li (Dasturiy injiniring - 321-19 DIr)</th>
                      <th style={{ width: "200px" }}>
                        <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                          <div style={{width: "60px"}}>
                          <CustomizedInputSimple  callback_func={(val) => { console.log(val) }} placeholder="" />
                          </div>
                        </TeacherSciencesButtonBox>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </ClassScheduleTableWrapper>
        {/* <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <form method="HTTP_METHOD" encType='multipart/form-data'>
            <ModalBox>
              <div style={{ marginBottom: '20px' }}>
                <ModalHeader>
                  <Typography
                    id="keep-mounted-modal-title"
                    variant="h6"
                    component="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#000",
                    }}
                  >
                    Baholash
                  </Typography>
                  <span
                    onClick={handleClose}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                    </svg>
                  </span>

                </ModalHeader>
              </div>
              <ModalSelectWrapper>
                <ModalSubtitle>Vazifa: Dastury ta'minotni tan narxini baholash</ModalSubtitle>
                <ModalSubtitle> Talaba: Ahmedov Ulug‘bek</ModalSubtitle>
                <ModalSubtitle>Vazifani topshirish uchun oxirgi muddati:11-06-2023 23:59</ModalSubtitle>
                <ModalSubtitle>Maks.ball: 50.00</ModalSubtitle>
                <ModalSubtitle>Fayl: </ModalSubtitle>
              </ModalSelectWrapper>

              <ModalSelectWrapper>
                <ClassScheduleTableWrapper>
                  <table>
                    <thead>
                      <tr>
                        <TableTHHeader
                          text="Me’zon"
                          iconc={null}
                        />
                        <TableTHHeader
                          text="Ball"
                          iconc={null}
                        />
                        <TableTHHeader
                          text="Maksimal ball"
                          iconc={null}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Mustaqil ish mazmuni</th>
                        <th>
                          <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}
                          >
                            <svg width="45" height="45" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" fill="#F6F6F6" />
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" stroke="#EEEEEE" />
                            </svg>
                          </TeacherSciencesButtonBox>
                        </th>
                        <th>30</th>
                      </tr>
                      <tr>
                        <th>Nazariy savollar</th>
                        <th>
                          <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}
                          >
                            <svg width="45" height="45" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" fill="#F6F6F6" />
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" stroke="#EEEEEE" />
                            </svg>
                          </TeacherSciencesButtonBox>
                        </th>
                        <th>10</th>
                      </tr>
                      <tr>
                        <th>Himoya</th>
                        <th>
                          <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}
                          >
                            <svg width="45" height="45" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" fill="#F6F6F6" />
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" stroke="#EEEEEE" />
                            </svg>
                          </TeacherSciencesButtonBox>
                        </th>
                        <th>10</th>
                      </tr>
                      <tr>
                        <th align='end'>Umumiy</th>
                        <th>
                          <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}
                          >
                            <svg width="45" height="45" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" fill="#F6F6F6" />
                              <rect x="1" y="0.5" width="35" height="35" rx="9.5" stroke="#EEEEEE" />
                            </svg>
                          </TeacherSciencesButtonBox>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </ClassScheduleTableWrapper>
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <ModalSubtitle>* Kasr sonlar «.» (nuqta) simvoli orqali kiritiladi. </ModalSubtitle>
              </ModalSelectWrapper>
              <ModalButtons>
                <Button
                  sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Bekor qilish
                </Button>
                <Button
                  sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                  variant="contained"
                  type="submit"
                >
                  Saqlash
                </Button>
              </ModalButtons>
            </ModalBox>
          </form>

        </Modal> */}
      </BoxBody>
    </Paper>
  )
}
