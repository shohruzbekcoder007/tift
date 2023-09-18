import React from 'react'
import Quiz from '../Quiz'
import { useSelector } from 'react-redux'
import PageNotFound from '../PageNotFound'
import { getRole } from '../../utils/getRole'
import { QuizWrapperStyle } from './styles'
import Spinner from '../Spinner'

export default function QuizWrapper() {

    const user = useSelector((state) => state.user)

    return (
        <QuizWrapperStyle>
            {
                getRole(user) === "student" ? <Quiz/>:user == null ? 
                    <Spinner/>:
                    <PageNotFound/>
            }
        </QuizWrapperStyle>
    )
}
