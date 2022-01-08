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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function VolumeChart({volume, chartTitle}){


  var dates = [];
  var dataPoints = [];
  if(volume[0]){
    dates = [volume[0].date_sensed.split(":")[0].slice(0,-3), volume[1].date_sensed.split(":")[0].slice(0,-3),
  volume[2].date_sensed.split(":")[0].slice(0,-3), volume[3].date_sensed.split(":")[0].slice(0,-3), 
  volume[4].date_sensed.split(":")[0].slice(0,-3), volume[5].date_sensed.split(":")[0].slice(0,-3),
  volume[6].date_sensed.split(":")[0].slice(0,-3), volume[7].date_sensed.split(":")[0].slice(0,-3)]
  //You'll need to add new chart types here. Just add a new block to the if statement.
    if(volume[0].daily_volume_sum){

    dataPoints = [volume[0].daily_volume_sum, volume[1].daily_volume_sum, volume[2].daily_volume_sum,
    volume[3].daily_volume_sum, volume[4].daily_volume_sum, volume[5].daily_volume_sum,
    volume[6].daily_volume_sum, volume[7].daily_volume_sum]
  } else {
    dataPoints = [volume[0].battery_percentage, volume[1].battery_percentage, volume[2].battery_percentage,
    volume[3].battery_percentage, volume[4].battery_percentage, volume[5].battery_percentage,
    volume[6].battery_percentage, volume[7].battery_percentage]
  }
}


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


  var labels = ["10-27","10-29","10-30","10-31","11-03","11-13","12-22"];
  if(dates){
    labels=dates;
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Pump 284',
        data: ['0','0','0','0','0','0','0','0'],
        borderColor: 'rgb(40, 180, 70)',
        backgroundColor: 'rgba(40, 180, 70, 0.5)',
      },
    ],
  };

  if(dataPoints){
    data.datasets[0].data=dataPoints;
  }


  return(<Line options={options} data={data} />);
}

export default VolumeChart;