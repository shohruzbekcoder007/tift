import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getRole } from '../../utils/getRole'
import Spinner from '../Spinner'
import PageNotFound from '../PageNotFound'

export default function MainDepartment() {

    const user = useSelector((state) => state.user)
    
    return (
        <MainWrapper>
            {
                getRole(user) === "department" ?
                <>
                    <Header/>
                    <Sidebar role={'department'}/>
                    <Outlet/>
                </>: user == null ? 
                    <Spinner/>:
                    <PageNotFound/>
            }
        </MainWrapper>
    )
}