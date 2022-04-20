import React, {Component} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

function VolumeChart({chartData, chartTitle, pumpId, purpose}){

  var dates = [];
  var id = "";
  var dataPoints = [];
  if(chartData[0]){
  for(var i=0; i<chartData.length; i++){
    dates[i] = chartData[i].date_sensed.split(":")[0].slice(0,-3);
  }

  id = pumpId;

  //You'll need to add new chart types here. Just add a new block to the if statement.
 
  for(var j = 0; j < chartData.length; j++){
    if(purpose==="volume"){
      dataPoints[j] = chartData[j].daily_volume_sum;
    } else if(purpose === "leakage"){
      dataPoints[j] = chartData[j].leak_coefficient_avg;
    } else if(purpose === "battery"){
      dataPoints[j] = chartData[j].battery_percentage;
    } else if(purpose === "priming"){
      dataPoints[j] = chartData[j].longest_prime;
    } else {
      console.log("ERR: Purpose undefined (see component call in PumpView.jsx)");
    }
  }
}

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };


  var labels = ["Date 1","Date 2","Date 3","Date 4","Date 5","Date 6","Date 7", "Date 8"];
  if(dates){
    labels=dates;
  }

  const data = {
    labels,
    datasets: [
      {
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