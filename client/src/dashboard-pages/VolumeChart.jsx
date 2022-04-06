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
  if(purpose=="volume"){
    for(var i=0; i<chartData.length; i++){
      dataPoints[i] = chartData[i].daily_volume_sum;
    }
  } else if(purpose=="leakage"){
    for(var i=0; i<chartData.length; i++){
      dataPoints[i] = chartData[i].leak_coefficient_avg;
    }
  } else {
    for(var i=0; i<chartData.length; i++){
      dataPoints[i] = chartData[i].battery_percentage;
    }
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


  var labels = ["Date 1","Date 2","Date 3","Date 4","Date 5","Date 6","Date 7", "Date 8"];
  if(dates){
    labels=dates;
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Select Pump',
        data: ['0','0','0','0','0','0','0','0'],
        borderColor: 'rgb(40, 180, 70)',
        backgroundColor: 'rgba(40, 180, 70, 0.5)',
      },
    ],
  };

  if(dataPoints){
    data.datasets[0].data=dataPoints;
  }

  if(id){
    data.datasets[0].label = "Pump " + id;
  }

  return(<Line options={options} data={data} />);
}

export default VolumeChart;