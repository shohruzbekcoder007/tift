import React from 'react'
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
export default function DekanStudents() {
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
        740-22 KXr - Talabalar
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
                  [1, 2, 3, 3, 3, 3, 3,3,3,3,3,3,3,3,3,4,1,23,5,].map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>{index}</th>
                        <th>1220</th>
                        <th>Sharipov Jaxongir Shaxobiddin o’g’li</th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
        </BoxFooter>
      </Paper>
    </>
  )
}
