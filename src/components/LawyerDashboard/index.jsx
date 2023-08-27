import React from "react";
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
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function LawyerDashboard() {
  const data = {
    labels: [
      'Topshirmaganlar',
      'Topshirganlar',
    ],
    datasets: [{
      label: 'Talabalar Soni',
      data: [10000, 8000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4,
    }]
  };
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
              chageValueFunction={val => { console.log(); }}
              selectOptions={[
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
              ]}
            />
            <h3>1 - kurs talabalari soni 18000</h3>
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
          <Doughnut data={data} />
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
          <Doughnut data={data} />
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
          <Doughnut data={data} />
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
          <Doughnut data={data} />
        </Paper>
      </ContentWrapper>

    </>

  )
}

