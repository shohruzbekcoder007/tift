import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { TeacherDashboardButton, TeacherDashboardDate, TeacherDashboardInformations, TeacherDashboardPagination, TeacherDashboardSubTItle, TeacherDashboardTitle, TeacherDashboardWrapper } from './styles'
import { Link } from 'react-router-dom'
import listLanguage from './language.json'
import { Pagination } from '@mui/material'

export default function TeacherDashboard() {
  return (
    <ContentWrapper>
      <TeacherDashboardInformations>
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
          <Link to={'1'}>
            <TeacherDashboardButton>
              {listLanguage.Detail["ru"]}
            </TeacherDashboardButton>
          </Link>
        </TeacherDashboardWrapper>
      </TeacherDashboardInformations>
      <TeacherDashboardPagination>
        <Pagination count={10} shape="rounded" color="primary" onChange={() => { }} />
      </TeacherDashboardPagination>
    </ContentWrapper>
  )
}
