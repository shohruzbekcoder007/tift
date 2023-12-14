import React, { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

import { Doughnut } from "react-chartjs-2";
import { Paper } from "@mui/material";
import { BoxHeader, ContentWrapper } from "../../global_styles/styles";
import AllSelect from "../AllSelect";
import CustomizedInput from "../CustomizedInput";
import { getLawyerDashboard } from "./requests";
import { additional_statistics_archive } from "../../utils/API_urls";
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function LawyerDashboard() {
  const [Course_number, setCourse_number] = useState('&')
  const [Status, setStatus] = useState(false)
  const [StudentCount, setStudentCount] = useState(0)

  const [dataDiplom, setdataDiplom] = useState({
    labels: [
      'Topshirganlar',
      'Topshirmaganlar',
    ],
    datasets: [{
      label: 'Talabalar Soni',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4,
    }]
  })
  const [dataContract, setdataContract] = useState({
    labels: [
      'Topshirganlar',
      'Topshirmaganlar',
    ],
    datasets: [{
      label: 'Talabalar Soni',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4,
    }]
  })
  const [dataPassport, setdataPassport] = useState({
    labels: [
      'Topshirganlar',
      'Topshirmaganlar',
    ],
    datasets: [{
      label: 'Talabalar Soni',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4,
    }]
  })
  const [dataPhoto, setdataPhoto] = useState({
    labels: [
      'Topshirganlar',
      'Topshirmaganlar',
    ],
    datasets: [{
      label: 'Talabalar Soni',
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4,
    }]
  })


  const CourseNumber = useMemo(() => {
    return [
      {
        name: 'Kurslar',
        value: "&",
      },
      {
        name: '1-kurs',
        value: 1,
      },
      {
        name: '2-kurs',
        value: 2,
      },
      {
        name: '3-kurs',
        value: 3,
      },
      {
        name: '4-kurs',
        value: 4,
      }
    ]
  }, [])


  useEffect(() => {
    setStatus(false)
    getLawyerDashboard(`${additional_statistics_archive}?course_number=${Course_number}`, (response) => {
      console.log(response.data.contract);
      dataDiplom.datasets[0].data = response.data.diplom
      dataContract.datasets[0].data = response.data.contract
      dataPassport.datasets[0].data = response.data.passport
      dataPhoto.datasets[0].data = response.data.photo
      setStudentCount(response.data.students_count)
      setdataDiplom(dataDiplom)
      setdataContract(dataContract)
      setdataPassport(dataPassport)
      setdataPhoto(dataPhoto)
      setStatus(true)
    }, (error) => {
      setStudentCount(0)
      console.log(error);
    })
  }, [Course_number])








  return (
    <>

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
            <AllSelect
              chageValueFunction={val => { setCourse_number(val); }}
              selectOptions={CourseNumber}
            />
            <h3>{Course_number == "&" ? "Umumiy" : Course_number + " - kurs"} talabalari soni {StudentCount}</h3>
            <CustomizedInput callback_func={(val) => { console.log(val) }} />
          </BoxHeader>


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
            borderRadius: "10px"
          }}
        >
          <h3>Diplom / Atstat</h3>
          {
            Status && <Doughnut data={dataDiplom} />
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
            borderRadius: "10px"
          }}
        >
          <h3>Pasport kopiya</h3>
          {
            Status && <Doughnut data={dataPassport} />
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
            borderRadius: "10px"
          }}
        >
          <h3>Rasm</h3>
          {
            Status && <Doughnut data={dataPhoto} />
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
            borderRadius: "10px"
          }}
        >
          <h3>Kantrakt</h3>
          {
            Status && <Doughnut data={dataContract} />
          }
        </Paper>
      </ContentWrapper>

    </>

  )
}

