import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { Outlet } from 'react-router-dom'

export default function TeacherSciences() {
    return (
        <ContentWrapper>
            <Outlet/>
        </ContentWrapper>
    )
}
