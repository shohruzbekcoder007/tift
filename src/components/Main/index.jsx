import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

export default function Main() {
    
    return (
        <MainWrapper>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </MainWrapper>
    )
}
