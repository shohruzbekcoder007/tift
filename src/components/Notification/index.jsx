import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { notifications } from '../../utils/API_urls'
import { getNotification } from '../Header/requests'
import { NotificationWrapper } from './styles'
import { getRole } from '../../utils/getRole'

export default function Notification({ open, setCountNote }) {
  const [notes, setNotes] = useState([])
  const user = useSelector((state) => state.user);

    useEffect(() => {
        getNotification(notifications, (response) => {
        
          setNotes(response.data)
          setCountNote(response.data.length)
    
        }, (error) => {
          console.log(error)
        })
    
      }, [])
    if (open) {
        return (
            <NotificationWrapper elevation={6} >
                {
                    notes.map((elem, index) => {
                        return(
                            (getRole(user) === "student")?
                            <Link to={`/student/sciences/tasks`} state={{data: elem.id}}>
                                <span key={index}>
                                    <p>{elem.science}</p>
                                    <p>Baholashgacha {elem.deadline.day} kun {elem.deadline.hours} soat qoldi</p>
                                </span>
                            </Link>:
                            <Link to={`/student/sciences/tasks`} state={{data: elem.id}}>
                                <span key={index}>
                                    <p>{elem.science}</p>
                                    <p>Baholashgacha {elem.deadline.day} kun {elem.deadline.hours} soat qoldi</p>
                                </span>
                            </Link>
                            
                        )
                    })
                }
            </NotificationWrapper>
        )
    } else {
        return (
            <></>
        )
    }

}
