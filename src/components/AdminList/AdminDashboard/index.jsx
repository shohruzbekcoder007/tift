import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ClassScheduleTableWrapperAdmin, ContentWrapper } from '../../../global_styles/styles'
import { CircularProgress, Paper } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'
import { InputsWrapper } from '../../CourseManagement/styles'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import { getAcademecYear } from '../Semestr/requests'
import { academic_year, statistic } from '../../../utils/API_urls'
import { getStudentsStatistics } from './requests'
import { TabPanel, Tabs, } from '@mui/base'
import { Tab, TabsList } from '../../QuestionnaireTeacher/styles'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js"
import { Bar, Doughnut } from 'react-chartjs-2'


ChartJs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



let options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: window.innerWidth < 768 ? 0.5 : 2,
  plugins: {
    legend: {
      position: window.innerWidth < 768 ? 'bottom' : 'top' ,
    },
    title: {
      display: true,
      text: 'kurslar bo\'yicha',
    },
  },
};


export default function   AdminDashboard() {
  const [YearList, setYearList] = useState([])
  const [Data, setData] = useState([])
  const [Data1, setData1] = useState([])
  const [Data2, setData2] = useState([])
  const [TextLoader, setTextLoader] = useState(true)
  const [AllData, setAllData] = useState([])
  const [Status, setStatus] = useState(false)
  // const [AllMaster, setAllMaster] = useState([])
  const [AcademekYear, setAcademekYear] = useState(2023)



  const [Students, setStudents] = useState({
    labels: [],
    datasets: [{
      label: 'Talabalar Soni',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(99, 255, 112)',
        'rgb(213, 255, 99)',
        'rgb(99, 255, 247)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4,
    }]
  })

  const [Contract, setContract] = useState({
    labels: [
      'To\'langan summa',
      'Kontrakt summa',
    ],
    datasets: [{
      label: 'So\'m',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 5,
    }]
  })


  const [Courses, setCourses] = useState({
    labels: [],
    datasets: [
      {
        label: ' Kontrakt summa',
        backgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: ' To\'langan summa',
        backgroundColor: '#039E51',
      },
    ],
  })







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
    setStatus(false)
    getStudentsStatistics(`${statistic}all/?year=${AcademekYear}`, (response) => {
      setAllData(response.data.data)
      let currData = []
      let currData2 = []
      let oneCourseContractPayed = 0
      let oneCourseContractUnPayed = 0

      let currData3 = []
      let currData4 = []
      let KurslarRoyxati = []


      response.data.data.map((item,index) => {
        if (item.morning != 0 || item.external != 0) {
          KurslarRoyxati.push(`${index+1}-kurs`)
        }

        let oneCourseStudents = item.external + item.morning
        currData.push(oneCourseStudents)

        oneCourseContractPayed += Number(item.external_paid_contract) + Number(item.morning_paid_contract)
        oneCourseContractUnPayed += Number(item.external_contract) + Number(item.morning_contract)

        currData3.push(Number(item.external_contract) + Number(item.morning_contract))
        currData4.push(Number(item.external_paid_contract) + Number(item.morning_paid_contract))

      })
      
      Courses.labels = KurslarRoyxati
      Students.labels = KurslarRoyxati
      currData2.push(oneCourseContractPayed)
      currData2.push(oneCourseContractUnPayed)
      
      Students.datasets[0].data = currData
      setStudents(Students)
      Contract.datasets[0].data = currData2
      setContract(Contract)

      Courses.datasets[0].data = currData3
      Courses.datasets[1].data = currData4

      setCourses(Courses)
      setStatus(true)

    }, (error) => {
      console.log(error)
      setTextLoader(true)
    })
  }, [AcademekYear]);

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
        <Tabs defaultValue={0} style={{ width: "100%" }}>
          <TabsList>
            <Tab>Diagramma</Tab>
            <Tab>Jadval</Tab>
          </TabsList>
            <BoxHeader>
              <InputsWrapper>
                <AllSelectFullWidth
                  chageValueFunction={(val) => setAcademekYear(val)}
                  selectedOptionP={AcademekYear}
                  selectOptions={YearList}
                />
              </InputsWrapper>
            </BoxHeader>
          <TabPanel value={1}>
            <BoxBody>
              <ClassScheduleTableWrapperAdmin style={{ height: `${window.innerWidth > 768 ? window.innerHeight / 1.5 + 40 : window.innerHeight / 1.5 + 20}px` }}>
                <table border="1" cellpadding="0" cellspacing="0">
                  <thead style={{ position: "sticky", top: 0, zIndex: "9" }}>
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
                              <td>{Number(item.external) == 0 ? " " : Number(item.external_contract).toLocaleString().replace(/,/g, '.')}</td>
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
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[0])}</td>
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning_contract).toLocaleString().replace(/,/g, '.')}</td>
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[1]).toLocaleString().replace(/,/g, '.')}</td>
                                            <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[0])}</td>
                                            <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external_contract).toLocaleString().replace(/,/g, '.')}</td>
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
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[0])}</td>
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning_contract).toLocaleString().replace(/,/g, '.')}</td>
                                            <td>{Number(elem.morning[0]) == 0 ? " " : Number(elem.morning[1]).toLocaleString().replace(/,/g, '.')}</td>
                                            <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external[0])}</td>
                                            <td>{Number(elem.external[0]) == 0 ? " " : Number(elem.external_contract).toLocaleString().replace(/,/g, '.')}</td>
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
          </TabPanel>


          <TabPanel value={0}>



            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Paper
                elevation={0}
                sx={{
                  width: '49%',
                  display: 'grid',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '350px',
                  padding: "30px",
                  borderRadius: "10px",

                  '@media (max-width: 768px)':{
                    width: "100%"
                  } 
                }}
              >
                <h3>Talabalar</h3>
                {
                  !Status ? <CircularProgress color="success" size={25} /> : <Doughnut data={Students} />
                }
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  width: '49%',
                  display: 'grid',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '350px',
                  padding: "30px",
                  borderRadius: "10px",

                  '@media (max-width: 768px)':{
                    width: "100%"
                  } 
                }}
              >
                <h3>Umumiy Kontrakt to'lovlar</h3>
                {
                  !Status ? <CircularProgress color="success" size={25} /> : <Doughnut data={Contract} />
                }
              </Paper>
            </div>

            <Paper
              elevation={0}
              sx={{
                width: 'auto',
                // display: 'grid',
                // justifyContent: 'center',
                textAlign: 'center',
                height: 'auto',
                // padding: "30px",
                borderRadius: "10px"
              }}
            >
              <p> <h3>Kontrakt to'lovlar</h3></p>
              {
                !Status ? <CircularProgress color="success" size={25} /> : <Bar  options={options} data={Courses} />
              }
            </Paper>


          </TabPanel>
        </Tabs>
      </Paper>
    </ContentWrapper>
  )
}
