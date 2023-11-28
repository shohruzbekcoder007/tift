import { Box, Button, Modal, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { UnableToSpecify, TeacherSciencesButtonBox, ModalSubtitle } from './styles'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AllSelectFullWidth from '../AllSelectFullWidth'
import CustomizedInputSimple from '../CustomizedInputSimple'
import { createTaskGrade, getTeacherVedemost } from './requests'
import { host, teacher_submission_grade, teacher_vedemost } from '../../utils/API_urls'
import { ThesisHeader } from '../Thesis/styles'

export default function Vedomost() {
  const { state } = useLocation()
  console.log(state);
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

    getTeacherVedemost(`${teacher_vedemost}${state.data}`, (response) => {
      console.log(response.data);
      settasksName(response.data.name)
      settasksTasks(response.data.tasks)
      settasksStudents(response.data.students)
    }, (error) => {
      console.log(error)
    })

  }, [Status])


  const openModalBoxGrade = (element) => {
    setstudentSource(element.submission?.source)
    setmaxGrade(element.grade)
    settasksGradeId(element.submission.id)

    handleOpen()
  }


  const SubmintGradeTasks = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("submission", tasksGradeId);
    formData.append("grade", tasksGrade);
    createTaskGrade(teacher_submission_grade, formData, (response) => {
      setStatus(!Status)
      handleClose()
    }, (error) => {
      console.log(error)
    })
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
      <ThesisHeader>
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
        <a href={host + `/api/v1/teacher/vedomosts/${state.data}`} target='_blank'>
        <Button
          variant="contained"
          onClick={(_) => { }}
          sx={{
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "12px 70px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17px"
          }}
          startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          }
        >
          Vedemost Yuklab olish
        </Button>
        </a>
      </ThesisHeader>

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
                tasksStudents.length > 0 ? tasksStudents.map((elem, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <th>{elem.full_name}</th>
                      {
                        elem.tasks.map((element, index) => {
                          return (
                            <th style={{ width: "200px" }} key={index}>

                              {

                                element.submission?.source ?
                                  <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                    <div style={{ width: "60px" }}>
                                      <Button
                                        sx={
                                          {
                                            width: '36px',
                                            height: '36px',
                                            padding: '8px 18px',
                                            borderRadius: '10px',
                                            border: "1px solid #EEE",
                                            background: ' var(--secondary-color, #F6F6F6)',
                                          }
                                        }
                                        onClick={(_) => { if (element.status) { openModalBoxGrade(element) } }}
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
                                  <>
                                    {
                                      (element.method == 'oddiy') ?
                                        <div style={{ width: "60px" }}>
                                          <Button
                                            sx={
                                              {
                                                width: '36px',
                                                height: '36px',
                                                padding: '8px 18px',
                                                borderRadius: '10px',
                                                border: "1px solid #EEE",
                                                background: ' var(--secondary-color, #F6F6F6)',
                                              }
                                            }
                                            onClick={(_) => { if (element.status) { openModalBoxGrade(element) } }}
                                          >
                                            {element.submission?.grade}
                                          </Button>
                                        </div>
                                        : <>{
                                          element.method == 'test' ?
                                            <div style={{ width: "60px" }}>

                                              <Button
                                                sx={
                                                  {
                                                    width: '36px',
                                                    height: '36px',
                                                    padding: '8px 18px',
                                                    borderRadius: '10px',
                                                    border: "1px solid #EEE",
                                                    background: ' var(--secondary-color, #F6F6F6)',
                                                  }
                                                }
                                              >
                                                {element.submission?.grade}
                                              </Button>
                                            </div> :
                                            <></>
                                        }</>
                                    }
                                  </>
                              }

                            </th>
                          )
                        })
                      }

                    </tr>
                  )
                })
                  :
                  <tr>
                    <th colSpan={12} align='center'>Ma'lumot yo'q</th>
                  </tr>
              }

            </tbody>
          </table>
        </ClassScheduleTableWrapper>
        <Modal
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
              {studentSource ?
                <ModalSelectWrapper>
                  <ModalSubtitle>Fayl:
                    <a href={host + studentSource} target='_blank'>
                      <Button
                        variant="contained"
                        sx={{
                          marginLeft: '15px',
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
                        Yuklab Olish
                      </Button>
                    </a>

                  </ModalSubtitle>
                </ModalSelectWrapper> : <></>
              }

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
                          <CustomizedInputSimple callback_func={(val) => { settasksGrade(val) }} placeholder="" />
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

        </Modal>
      </BoxBody>
    </Paper>
  )
}
