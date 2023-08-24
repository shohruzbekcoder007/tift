import React from 'react'
import { NotificationWrapper } from './styles'

export default function Notification({ open }) {
    if (open) {
        return (
            <NotificationWrapper elevation={6} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi necessitatibus porro perspiciatis, reprehenderit nostrum obcaecati maxime totam non nam voluptatem nulla exercitationem esse laudantium at sit in aspernatur voluptates?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi necessitatibus porro perspiciatis, reprehenderit nostrum obcaecati maxime totam non nam voluptatem nulla exercitationem esse laudantium at sit in aspernatur voluptates?</p>
            </NotificationWrapper>
        )
    } else {
        return (
            <></>
        )
    }

}
