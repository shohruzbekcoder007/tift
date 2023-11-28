import { Box, Button, Modal, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { UnableToSpecify, TeacherSciencesButtonBox, ModalSubtitle } from './styles'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AllSelectFullWidth from '../AllSelectFullWidth'
import CustomizedInputSimple from '../CustomizedInputSimple'
import {getTeacherVedemost } from './requests'
import { host, teacher_submission_grade, teacher_vedemost } from '../../utils/API_urls'

export default function Vedomost() {
  const { state } = useLocation()

  const [tasksName, settasksName] = useState(null)
  const [tasksTasks, settasksTasks] = useState([])
  const [tasksStudents, settasksStudents] = useState([])
  const [studentSource, setstudentSource] = useState(null)
  const [maxGrade, setmaxGrade] = useState(null)
  const [tasksGradeId, settasksGradeId] = useState(null)
  const [tasksGrade, settasksGrade] = useState(null)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const [open, setOpen] = useState(false);
  

  



  useEffect(() => {
    
    getTeacherVedemost(`${teacher_vedemost}${state.data}`, (response) => {
        settasksName(response.data.name)
        settasksTasks(response.data.tasks)
        settasksStudents(response.data.students)
      }, (error) => {
          console.log(error)
      })
  
  }, [])


  const openModalBoxGrade = (element) => {
    setstudentSource(element.submission.source)
    setmaxGrade(element.grade)
    settasksGradeId(element.submission.id)

    handleOpen()
  }



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
                  text={tasksName}
                  iconc={null}
                />
                {
                  tasksTasks.map((elem, index) => {
                     return (
                      <>
                        <TableTHHeader key={index}
                          text={elem.title?.slice(0, 20)}
                          iconc={null}
                          />
                      </>
                     )
                  })
                }
              </tr>
              
            </thead>
            <tbody>
              {
                tasksStudents.map((elem, index) => {
                  return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{elem.full_name}</th>
                        {
                          elem.tasks.map((element, index) => {
                            return(
                              <th style={{ width: "200px" }} key={index}>
                                
                                {

                                  element.submission ?
                                    <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                      <div style={{width: "60px"}}>
                                      <Button
                                        sx={
                                          {
                                            width: '36px',
                                            height: '36px',
                                            padding: '8px 18px',
                                            borderRadius: '10px',
                                            border: "1px solid #EEE",
                                            background:' var(--secondary-color, #F6F6F6)',
                                          }
                                        }   
                                      onClick={(_) => {if(element.status){openModalBoxGrade(element)}}}
                                      >
                                        {element.submission.grade}
                                      </Button>
                                      </div>

                                        <a href={host + element.submission.source} target='_blank'>
                                          <Button 
                                            variant="contained"
                                            sx={{
                                              borderRadius: '10px',
                                              textTransform: "capitalize",
                                              boxShadow: "none",
                                              padding: "10px 12px",
                                            }}
                                            startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                            }
                                          >
                                          </Button>
                                        </a>

                                    </TeacherSciencesButtonBox>
                                    :
                                    <></>
                                }
                                
                              </th>
                            )
                        })
                      }
                      
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </ClassScheduleTableWrapper>
      </BoxBody>
    </Paper>
  )
}
