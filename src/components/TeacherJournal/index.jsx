import { Box, Button, Modal, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ClassScheduleTableWrapper2, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { UnableToSpecify, TeacherSciencesButtonBox, ModalSubtitle, TeacherSciencesButtonBox2, TableStyle } from './styles'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AllSelectFullWidth from '../AllSelectFullWidth'
import CustomizedInputSimple from '../CustomizedInputSimple'
import { createTaskGrade, getTeacherJurnal, getTeacherVedemost } from './requests'
import { host, teacher_jurnal, teacher_submission_grade, teacher_vedemost } from '../../utils/API_urls'
import { red } from '@mui/material/colors'

export default function TeacherJournal() {
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
  const [Status, setStatus] = useState(false);
  

  



  useEffect(() => {
    
    getTeacherJurnal(`${teacher_jurnal}${state.data}/`, (response) => {
        console.log(response);
        settasksName(response.data.name)
        settasksTasks(response.data.tasks)
        settasksStudents(response.data.students)
      }, (error) => {
          console.log(error)
      })
  
  }, [Status])


  // const openModalBoxGrade = (element) => {
  //   setstudentSource(element.submission.source)
  //   setmaxGrade(element.grade)
  //   settasksGradeId(element.submission.id)

  //   handleOpen()
  // }

  // const SubmintGradeTasks = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("submission", tasksGradeId);
  //   formData.append("grade", tasksGrade);
  //   createTaskGrade(teacher_submission_grade, formData, (response) => { 
  //     setStatus(!Status)
  //     handleClose()
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }


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
        O'qituvchi Jurnali
      </Typography>
      <BoxBody>
        <ClassScheduleTableWrapper2>
          <table>
            <thead>
              <tr>
                <TableTHHeader
                  text="#"
                  iconc={null}
                />
                <TableTHHeader
                  text="Studentlar                                "
                  iconc={null}
                />
                {
                  tasksTasks.map((elem, index) => {
                     return (
                      <>
                        <TableTHHeader key={index}
                          text={`${elem.name?.slice(0, 20)}...`}
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
              tasksStudents.length > 0 ?  tasksStudents.map((elem, index) => {
                  return (
                      <tr key={index}>
                        <th data-cell="Raqam">{index + 1}</th>
                        <th data-cell={"Talaba"}>{elem.full_name}</th>
                        {
                          elem.tasks.map((element, index) => {
                            return(
                              <TableStyle data-cell={tasksTasks[index]?.name?.slice(0, 20)} key={index}>
                                    <TeacherSciencesButtonBox2 >
                                      <div >
                                        {
                                          element.submission?.grade == '1.00' ?  <Button
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
                                        // onClick={(_) => {{openModalBoxGrade(element)}}}
                                        >
                                          {element.submission?.grade}
                                        </Button>
                                        :
                                        <Button
                                        sx={
                                          {
                                            width: '36px',
                                            height: '36px',
                                            padding: '8px 18px',
                                            borderRadius: '10px',
                                            border: "1px solid #EEE",
                                            background:' var(--secondary-color, #F6F6F6)',
                                            color: "red"
                                          } 
                                        }   
                                      // onClick={(_) => {{openModalBoxGrade(element)}}}
                                      >
                                        {element.submission?.grade}
                                      </Button>
                                        }
                                    
                                      </div>
                                    </TeacherSciencesButtonBox2>

                                
                              </TableStyle>
                            )
                        })
                      }
                      
                    </tr>
                  )
                })
                :
                  <tr>
                    <th data-cell="Ma'lumot" colSpan={12} align='center'>Ma'lumot yo'q</th>
                  </tr>
              }
              
            </tbody>
          </table>
        </ClassScheduleTableWrapper2>
        {/* <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            >
            <form onSubmit={SubmintGradeTasks} method="HTTP_METHOD" encType='multipart/form-data'>
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
                          <th>Vazifa uchun baho</th>
                          <th>
                            <CustomizedInputSimple  callback_func={(val) => { settasksGrade(val) }} placeholder="" />
                          </th>
                          <th>{maxGrade}</th>
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

        </Modal>  */}
      </BoxBody>
    </Paper>
  )
}
