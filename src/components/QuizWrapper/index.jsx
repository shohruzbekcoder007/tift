import React from 'react'
import { useSelector } from 'react-redux'
import PageNotFound from '../PageNotFound'
import { getRole } from '../../utils/getRole'
import { QuizWrapperStyle } from './styles'
import Spinner from '../Spinner'
import Quiz2 from '../Quiz/Quiz2'

export default function QuizWrapper() {

    const user = useSelector((state) => state.user)

    return (
        <QuizWrapperStyle>
            {
                getRole(user) === "student" ? <Quiz2/> : user == null ? 
                    <Spinner/>:
                    <PageNotFound/>
            }
        </QuizWrapperStyle>
    )
}
