import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { TeacherStatisticWrapper, TeacherStatisticWrapperBottom, TeacherStatisticWrapperHeader, WrapperHeaderLeft, WrapperHeaderRight } from './styles'
import { my_semesters, teacher_mylessons } from '../../utils/API_urls'
import { getTeacherMyLesson } from '../TeacherSciences/TeacherSciencesMain/requests'
import { getStatisticSemester } from './requests'

export default function TeacherStatistic() {

  const [semester, setSemester] = useState(0)
  const [ScienceListCount, setScienceListCount] = useState(0)

  useEffect(() => {
    getStatisticSemester(my_semesters, (response) => {
      setSemester(response[0].id);
    }, (error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    if (semester !== 0) {
      getTeacherMyLesson(`${teacher_mylessons}?semester=${semester}`, (response) => {
        setScienceListCount(response.data.results.length);
      }, (error) => {
        console.log(error)
      })
    }
  }, [semester])

  return (
    <ContentWrapper>
      <TeacherStatisticWrapper>
        <TeacherStatisticWrapperHeader>
          <WrapperHeaderLeft>
            <h2>{ScienceListCount}</h2>
            <p>Davomat jurnali</p>
          </WrapperHeaderLeft>
          <WrapperHeaderRight>
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="85" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
            </svg>
          </WrapperHeaderRight>
        </TeacherStatisticWrapperHeader>
        <TeacherStatisticWrapperBottom>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
          <p>Davomat jurnali</p>
        </TeacherStatisticWrapperBottom>
      </TeacherStatisticWrapper>


      <TeacherStatisticWrapper>
        <TeacherStatisticWrapperHeader>
          <WrapperHeaderLeft>
            <h2>10</h2>
            <p>Mening dars jadvalim</p>
          </WrapperHeaderLeft>
          <WrapperHeaderRight>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
            </svg>
          </WrapperHeaderRight>
        </TeacherStatisticWrapperHeader>
        <TeacherStatisticWrapperBottom>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
          <p>Mening dars jadvalim</p>
        </TeacherStatisticWrapperBottom>
      </TeacherStatisticWrapper>



      <TeacherStatisticWrapper>
        <TeacherStatisticWrapperHeader>
          <WrapperHeaderLeft>
            <h2>12</h2>
            <p>Darslar ro'yxati</p>
          </WrapperHeaderLeft>
          <WrapperHeaderRight>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>
          </WrapperHeaderRight>
        </TeacherStatisticWrapperHeader>
        <TeacherStatisticWrapperBottom>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
          <p>Darslar ro'yxati</p>
        </TeacherStatisticWrapperBottom>
      </TeacherStatisticWrapper>
    </ContentWrapper>
  )
}
