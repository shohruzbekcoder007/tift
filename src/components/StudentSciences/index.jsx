import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContentWrapper } from '../../global_styles/styles'


export default function StudentSciences() {
    return (
        <ContentWrapper>
            <Outlet/>
        </ContentWrapper>
    )
}
