import React, { useEffect, useState } from 'react'
import { ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
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
                        return <Semester key={index} title={`${elem.semester}-semestr`} data={elem.sciences}/>
                    })
                }
                
            </PersonalPlanWrapper>
        </ContentWrapper>
    )
}

const Semester = ({ title, data }) => {
    return (
        <PersonalPlanPaper elevation={0} sx={{borderRadius: "10px"}}>
            <Typography
                sx={{
                    color: "#000000",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "normal",
                    mb: "16px"
                }}
            >
               { title }
            </Typography>
            <ClassScheduleTableWrapper style={{flexDirection: "column", display: "flex", justifyContent: "space-between", height: "80%"}}>
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
                                text="ball"
                                iconc={null}
                            />
                             <TableTHHeader
                                text="baho"
                                iconc={null}
                            />
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                          data?.length > 0 ? data.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{ elem.science }</th>
                                        <th>{ elem.credit }</th>
                                        <th>{ elem.grade }</th>
                                        <th>{ elem.gpa }</th>
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
                <div style={{display: "flex", justifyContent: 'end'}}>
                    <h3>GPA: 0</h3>
                </div>
        </PersonalPlanPaper>
    )
}
