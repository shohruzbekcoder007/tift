import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { notifications } from '../../utils/API_urls'
import { getNotification } from '../Header/requests'
import { DeadlineDate, DeadlineTitle, NotificationWrapper, NotificationWrapperBody, NotificationWrapperTop } from './styles'
import { getRole } from '../../utils/getRole'
import { Box } from '@mui/joy'

export default function Notification({ open, setCountNote }) {
  const [notes, setNotes] = useState([])
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getNotification(notifications, (response) => {
      console.log(response.data, " notes ");
      setNotes(response.data)
      setCountNote(response.data.length)

    }, (error) => {
      console.log(error)
    })

  }, [])
  if (open) {
    return (
      <NotificationWrapper  elevation={6} >
        <NotificationWrapperTop>
          Xabarnomalar
        </NotificationWrapperTop>
        {
          notes.length > 0 ? notes.map((elem, index) => {
            return (
              (getRole(user) === "student") ?
                <span key={index}>
                  <Link to={`/student/sciences/tasks`} state={{ data: elem.patok }}>
                    <NotificationWrapperBody>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#039E51" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                          <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                        </svg>
                      </div>
                      <Box sx={{
                        color: "black",
                      }}>
                        <DeadlineTitle>{elem.science}</DeadlineTitle>
                        <DeadlineDate>Baholashgacha {elem.deadline.day} kun {elem.deadline.hours} soat qoldi</DeadlineDate>
                        <DeadlineTitle> {elem.time_} </DeadlineTitle>
                      </Box>
                    </NotificationWrapperBody>
                  </Link>
                </span>
                :
                <></>
              // <Link to={`/student/sciences/tasks`} state={{ data: elem.id }}>
              //   <span key={index}>
              //     <p>{elem.science}</p>
              //     <p>Baholashgacha {elem.deadline.day} kun {elem.deadline.hours} soat qoldi</p>
              //   </span>
              // </Link>

            )
          })
            :
            <span>
              <NotificationWrapperBody>
                <Box sx={{
                  color: "black",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "13px"
                }}>
                  Ma'lumot yo'q
                </Box>
              </NotificationWrapperBody>
            </span>
        }
      </NotificationWrapper>
    )
  } else {
    return (
      <></>
    )
  }

}