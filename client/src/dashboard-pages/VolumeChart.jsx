import React, {Component} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function VolumeChart({storeVolume, volumeData, dateLabels, chartTitle, chartData}){
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  const labels = ["10-27","10-29","10-30","10-31","11-03","11-13","12-22"];

console.log(dateLabels)

  const data = {
    labels,
    datasets: [
      {
        label: 'Pump 284',
        data: chartData,
        borderColor: 'rgb(40, 180, 70)',
        backgroundColor: 'rgba(40, 180, 70, 0.5)',
      },
    ],
  };


  return(<Line options={options} data={data} />);
}

export default VolumeChart;