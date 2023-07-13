import React, { useEffect } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Main() {

    const user = useSelector((state) => state.user)

    useEffect(() => {

    }, [])
    
    return (
        <MainWrapper>
            <Header/>
            <Sidebar role={'teacher'}/>
            <Outlet/>
        </MainWrapper>
    )
}
