import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { TeacherDashboardButton, TeacherDashboardDate, TeacherDashboardInformations, TeacherDashboardPagination, TeacherDashboardSubTItle, TeacherDashboardTitle, TeacherDashboardWrapper } from './styles'
import { Link } from 'react-router-dom'
import listLanguage from './language.json'
import { Pagination, Skeleton } from '@mui/material'
import { getNews } from './requests'
import { get_news } from '../../utils/API_urls'
import { useSelector } from 'react-redux'

export default function TeacherDashboard() {

  const [news, setNews] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [count, setCount] = useState(1)
  const language = useSelector(state => state.language)

  useEffect(() => {
    getNews(`${get_news}?page_size=12&page=${count}`, (response) => {
      setNews(response.results)
      // console.log(response)
      setPageCount(response.page_count)
    }, (error) => {
      console.log(error)
    })
  }, [count])

  return (
    <ContentWrapper>
      <TeacherDashboardInformations>
        {
          news.length === 0 ? [1,2,3,4].map((_, index) => {
            return (
              <TeacherDashboardWrapper key={index}>
                <Skeleton width="50%" />
                <Skeleton />
                <Skeleton variant="rectangular" width={"100%"} height={118} />
                <Skeleton width="80%" />
              </TeacherDashboardWrapper>
            )
          }):<></>
        }{
          news.map((elem, index) => {
            return (
              <TeacherDashboardWrapper key={index}>
                <TeacherDashboardDate>
                  {`${new Date(elem.created_at).getDate()}:${new Date(elem.created_at).getMonth() + 1}:${new Date(elem.created_at).getFullYear()}`}
                </TeacherDashboardDate>
                <TeacherDashboardTitle dangerouslySetInnerHTML={{__html: elem.title.slice(0,50)+'...'}}>
                </TeacherDashboardTitle>
                <TeacherDashboardSubTItle dangerouslySetInnerHTML={{__html: elem.description.slice(0,150)+'...'}}>
                </TeacherDashboardSubTItle>
                <Link to={`${elem.id}`} state={{ element: elem }}>
                  <TeacherDashboardButton>
                    {listLanguage.Detail[language]}
                  </TeacherDashboardButton>
                </Link>
              </TeacherDashboardWrapper>
            )
          })
        }
      </TeacherDashboardInformations>
      <TeacherDashboardPagination>
        <Pagination count={pageCount} shape="rounded" color="primary" onChange={(_, value) => { setCount(value) }} />
      </TeacherDashboardPagination>
    </ContentWrapper>
  )
}
