import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ClassScheduleTableWrapperAdmin, ContentWrapper } from '../../../global_styles/styles'
import { CircularProgress, Paper } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'
import { InputsWrapper } from '../../CourseManagement/styles'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import { getAcademecYear } from '../Semestr/requests'
import { academic_year, statistic } from '../../../utils/API_urls'
import { getStudentsStatistics } from './requests'

export default function AdminDashboard() {
  const [YearList, setYearList] = useState([])
  const [Data, setData] = useState([])
  const [Data1, setData1] = useState([])
  const [Data2, setData2] = useState([])
  const [TextLoader, setTextLoader] = useState(true)
  const [AllData, setAllData] = useState([])
  // const [AllMaster, setAllMaster] = useState([])
  const [AcademekYear, setAcademekYear] = useState(2023)

  useEffect(() => {
    getAcademecYear(academic_year, (response) => {
      let mass = []

      response.data.results.map(item => {
        mass.push({
          name: item.name,
          value: item.season
        })
      })
      setAcademekYear(AcademekYear)
      setYearList(mass)

    }, (error) => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    setTextLoader(false)
    setData1([])
    setData2([])
    setData([])
    getStudentsStatistics(`${statistic}?year=${AcademekYear}`, (response) => {
      let curr1 = []
      let curr2 = []
      setTextLoader(true)
      response.data.map(item => {
        if (item.degree == 'bachelor') {
          curr1.push(item)
        } else if (item.degree == 'master') {
          curr2.push(item)
        }
      })
      setData1(curr1)
      setData2(curr2)
      setData(response.data)
    }, (error) => {
      console.log(error)
      setTextLoader(true)
    })
  }, [AcademekYear]);

  useEffect(() => {
    getStudentsStatistics(`${statistic}all/?year=${AcademekYear}`, (response) => {
      setAllData(response.data.data)
    }, (error) => {
      console.log(error)
      setTextLoader(true)
    })
  }, [AcademekYear]);

  console.log(window.innerHeight);
  // document.querySelector(".iLdgRa")
  return (
    <ContentWrapper>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxHeader>
          <InputsWrapper>
            <AllSelectFullWidth
              chageValueFunction={(val) => setAcademekYear(val)}
              selectedOptionP={AcademekYear}
              selectOptions={YearList}
            />
          </InputsWrapper>
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapperAdmin style={{height: `${window.innerWidth > 768 ? window.innerHeight/1.5 + 40 : window.innerHeight/1.5 +20}px`}}>
            <table border="1" cellpadding="0" cellspacing="0">
              <thead style={{position: "sticky",top:0, zIndex: "9" }}>
              <tr>
                <td align="center" width="1" rowspan="3">#No</td>
                <td align="center" width="1" rowspan="3">                Yo'nalish                    </td>
                {
                  [...Array(5)].map((item, index) => {
                    return (
                      <>
                        <td align="center" colspan="6"><b className='kurslar'>{index + 1}-kurs</b> </td>
                      </>
                    )
                  })
                }
              </tr>
              <tr className='study_type_tr'>
                {
                  [...Array(5)].map((item, index) => {
                    return (
                      <>
                        <td align="center" colspan="3" width="10">Kunduzgi</td>
                        <td align="center" colspan="3" width="10">Sirtqi</td>
                      </>
                    )
                  })
                }
              </tr>


              <tr className='count_and_sum'>
                {
                  [...Array(10)].map((item, index) => {
                    return (
                      <>
                        <td align="center" width="10"> talabalar <br />soni</td>
                        <td align="center" width="10"> kontrakt <br /> summa </td>
                        <td align="center" width="10"> to'langan <br /> summa</td>
                      </>
                    )
                  })
                }
              </tr>
              </thead>




              {Data.length > 0 &&
              <tr className='alltr'>
                <td >#</td>
                <td>Jami</td>
                {
                  AllData.length > 0 && AllData.map((item, index) => {
                    return (
                      <>
                        <td>{Number(item.morning) == 0 ? " " : Number(item.morning)}</td>
                        <td>{Number(item.morning) == 0 ? " " : Number(item.morning_contract).toLocaleString().replace(/,/g, '.')}</td>
                        <td>{Number(item.morning) == 0 ? " " : Number(item.morning_paid_contract).toLocaleString().replace(/,/g, '.')}</td>
                        <td>{Number(item.external) == 0 ? " " : Number(item.external)}</td>
                        <td>{Number(item.external) == 0 ? " " : Number(item.external_contract).toLocaleString().replace(/,/g, '.') }</td>
                        <td>{Number(item.external) == 0 ? " " : Number(item.external_paid_contract).toLocaleString().replace(/,/g, '.')}</td>
                      </>
                    )
                  })
                }
              </tr>
              }     
              {
                Data.length > 0 ?
                  <>
                    <tr style={{ height: "1px" }}>
                      <td align="center" colspan="2" ><b className='kurslar'>Bakalavr</b></td>
                    </tr>

                    <>
                      {
                        Data1.map((item, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                {
                                  item.courses.map((elem, index2) => {
                                    return (
                                      <>
                                        <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[0]) }</td>
                                        <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning_contract).toLocaleString().replace(/,/g, '.')}</td>
                                        <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[1]).toLocaleString().replace(/,/g, '.') }</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[0])}</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external_contract).toLocaleString().replace(/,/g, '.') }</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[1]).toLocaleString().replace(/,/g, '.')}</td>
                                      </>
                                    )
                                  })
                                }
                              </tr>
                            </>
                          )
                        })
                      }
                    </>
                    <tr>
                      <td align="center" colspan="2" ><b className='kurslar'>Magistr</b></td>
                    </tr>
                    <>
                      {
                        Data2.map((item, index) => {
                          return (
                            <>
                              <tr>
                                <td>{Data1.length + index + 1}</td>
                                <td>{item.name}</td>
                                {
                                  item.courses.map((elem, index2) => {
                                    return (
                                      <>
                                       <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[0]) }</td>
                                        <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning_contract).toLocaleString().replace(/,/g, '.')}</td>
                                        <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[1]).toLocaleString().replace(/,/g, '.') }</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[0])}</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external_contract).toLocaleString().replace(/,/g, '.') }</td>
                                        <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[1]).toLocaleString().replace(/,/g, '.')}</td>
                                      </>
                                    )
                                  })
                                }
                              </tr>
                            </>
                          )
                        })
                      }


                    </>
                  </>
                  :
                  <tr>
                    <td align='center' colSpan={20}>{TextLoader ? "Ma'lumot yo'q" : <CircularProgress color="success" size={25} />}</td>
                  </tr>
              }



            </table>
          </ClassScheduleTableWrapperAdmin>
        </BoxBody>
      </Paper>

    </ContentWrapper>
  )
}
