import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { TeacherDashboardButton, TeacherDashboardDate, TeacherDashboardSubTItle, TeacherDashboardTitle, TeacherDashboardWrapper } from './styles'
import { Link } from 'react-router-dom'
import listLanguage from './language.json'

export default function TeacherDashboard() {
  return (
    <ContentWrapper>
      <TeacherDashboardWrapper>
        <TeacherDashboardDate>
          04:06:2022
        </TeacherDashboardDate>
         <TeacherDashboardTitle>
          Dars mashg'ulotlarini ko'chirish!
         </TeacherDashboardTitle>
         <TeacherDashboardSubTItle>
           Hurmatli professor-o‘qituvchilar! O‘quv yilini iyul oyidan kechiktirmasdan tugatish uchun 02.07.2022 sanadan keyin o‘tkazilishi kerak...
         </TeacherDashboardSubTItle>
          <Link to={'/teacher/dashboard/1'}>
            <TeacherDashboardButton>
            {listLanguage.Detail["ru"]}
          </TeacherDashboardButton>
          </Link>
      </TeacherDashboardWrapper>
    </ContentWrapper>
  )
}
