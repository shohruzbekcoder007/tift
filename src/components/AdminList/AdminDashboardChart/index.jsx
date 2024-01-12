import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ContentWrapper } from '../../../global_styles/styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => {
        return Math.random()*1000
      }),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {   
      label: 'Dataset 2',
      data: labels.map(() => {
        return Math.random()*100
      }),
      backgroundColor: '#039E5180',
    },
  ],
};

export function AdminDashboardChart() {
  return <ContentWrapper>
    <Bar options={options} data={data} />;  
  </ContentWrapper>
}
