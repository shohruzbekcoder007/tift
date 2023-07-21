import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getRole } from '../../utils/getRole'
import PageNotFound from '../PageNotFound'
import Spinner from '../Spinner'

export default function Main() {

    const user = useSelector((state) => state.user)
    
    return (
        <MainWrapper>
            {
                getRole(user) === "teacher" ?
                <>
                    <Header/>
                    <Sidebar role={'teacher'}/>
                    <Outlet/>
                </>: user == null ? 
                    <Spinner/>:
                    <PageNotFound/>
            }
        </MainWrapper>
    )
}
