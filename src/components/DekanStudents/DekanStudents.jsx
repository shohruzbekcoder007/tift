import React, { useEffect, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'
import { TableTHHeader } from '../DiplomaTable'
import Button from '@mui/material/Button'
import AllSelect from '../AllSelect'
import CustomizedInputSimple from '../CustomizedInputSimple'
import { InputsWrapper } from '../CourseManagement/styles'
import listLanguage from '../CourseManagement/language.json'
import { GroupListStudents } from '../../utils/API_urls'
import { getStudents } from './requests'
import { useLocation } from 'react-router-dom'

export default function DekanStudents() {
  const { state } = useLocation()
  console.log(state);
  const [Students, setStudents] = useState([]);
  const [pageCount, setPageCount] = useState(1)
  const [science, setScience] = useState(null)
  const [status, setStatus] = useState('all')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [allCount, setAllCount] = useState(0)
  useEffect(() => {
    getStudents(`${GroupListStudents}${state?.id}`, (response) => {
      console.log(response?.data?.results);
      setStudents(response?.data?.results)
      setPageCount(response.data.page_count)
      setAllCount(response.data.count)
    }, (error) => {
      console.log(error)
    })
  }, [])
  return (
    <>
      <Typography
        variant="h6"
        component="h4"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#151515",
          fontStyle: "normal",
          lineHeight: "normal"
        }}
      >
        {state?.name} - Talabalar
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <CustomizedInput callback_func={(val) => { console.log(val) }} />
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="No"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="ID"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="F.I.SH"
                    iconc={null}
                  />
                </tr>
              </thead>
              <tbody>
                {
                  Students.length > 0 ? Students.map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{elem.id}</th>
                        <th>{elem.full_name}</th>
                      </tr>
                    )
                  })
                    :
                    <tr>
                      <th colSpan={12} align='center'>Ma'lumot yo'q</th>
                    </tr>
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami ${allCount} ta, ${pageSize * (page - 1) + 1} dan ${pageSize * (page - 1) + Students.length} gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={pageCount} shape="rounded" color="primary" onChange={(_, value) => { setPage(value) }} />
        </BoxFooter>
      </Paper>
    </>
  )
}
