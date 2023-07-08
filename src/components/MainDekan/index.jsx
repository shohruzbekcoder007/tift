import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainDekan() {
    
    return (
        <MainWrapper>
            <Header/>
            <Sidebar role={'dekan'}/>
            <Outlet/>
        </MainWrapper>
    )
}