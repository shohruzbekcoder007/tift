import React, { useEffect, useState } from 'react'
import { ClassScheduleTableWrapper, ClassScheduleTableWrapper2, ContentWrapper } from '../../global_styles/styles'
import { PersonalPlanPaper, PersonalPlanWrapper } from './styles'
import { Paper, Typography } from '@mui/material'
import { TableTHHeader } from '../DiplomaTable'
import { rating_notebook } from '../../utils/API_urls'
import { getStudentRatingNotebook } from './requests'



export default function PersonalPlan() {
  const [personalDataList, setpersonalDataList] = useState([])

  useEffect(() => {
    getStudentRatingNotebook(rating_notebook, (response) => {
      setpersonalDataList(response.data.results)
    }, (error) => {
      console.log(error)
    })
  }, [])
  return (
    <ContentWrapper>
      <PersonalPlanWrapper>
        {
          personalDataList.map((elem, index) => {
            return <Semester key={index} index={index} title={`${elem.semester}-semestr`} data={elem.sciences} />
          })
        }

      </PersonalPlanWrapper>
    </ContentWrapper>
  )
}


const Semester = ({ title, data, index}) => {
  let allCredit = 0
  let allGrade = 0
  console.log(data);
  data.map(item => {
    allCredit += item.credit
    allGrade += item.credit * item.gpa
  })
  console.log(allCredit);
  console.log(allGrade);


  return (
    <PersonalPlanPaper elevation={0} sx={{ borderRadius: "10px" }}>
      <Typography
        sx={{
          color: "#000000",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "normal",
          mb: "16px"
        }}
      >
        {title}
      </Typography>
      <ClassScheduleTableWrapper style={{ flexDirection: "column", display: "flex", justifyContent: "space-between", }}>
        <table>
          <thead>
            <tr>
              <TableTHHeader
                text="Fan"
                iconc={null}
              />
              <TableTHHeader
                text="Kredit"
                iconc={null}
              />
              <TableTHHeader
                text="Ball"
                iconc={null}
              />
              <TableTHHeader
                text="Baho"
                iconc={null}
              />
            </tr>
          </thead>
          <tbody>

            {
              data?.length > 0 ? data.map((elem, index) => {
                return (
                  <tr key={index}>
                    <th data-cell="Fan">
                      {
                        elem.discipline_type == 'selection' ? elem.science + " (tanlov fan)" : elem.science
                      }
                      </th>
                    <th data-cell="Kredit">{elem.credit}</th>
                    <th data-cell="Ball">{elem.score}</th>
                    <th data-cell="Baho">{elem.gpa}</th>
                  </tr>
                )
              })
                :
                <tr>
                  <th data-cell="Malumot" colSpan={12} align='center'>Ma'lumot yo'q</th>
                </tr>
            }
          </tbody>
        </table>
      </ClassScheduleTableWrapper>
      <div style={{ display: "flex", justifyContent: 'end' }}>
        {
          parseFloat(allGrade / allCredit).toFixed(2) != "NaN" ?  <h3>GPA: {parseFloat(allGrade / allCredit).toFixed(2)}</h3> : ""
        }
        
      </div>
    </PersonalPlanPaper>
  )
}
