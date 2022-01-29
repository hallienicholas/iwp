import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

function PieChart(data){

    const config = {
        type: 'pie',
        data: data,
      };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Last 25 transmissions by pump ID",
          },
        },
    };

    const realData = data.data;
    console.log(realData)
    if(realData.labels){
        return(<Pie options={options} data={realData} />);
    } else {
        const testData = {
            labels: ['Show Data'],
            datasets: [{
                label: "Last 25 transmissions by pump ID",
                data: ['25'],
                backgroundColor: ['rgb(181, 181, 181)'],
                hoverOffset: 4
            }]
        }
        return(<Pie options={options} data={testData} />)
    }
    

    
}
export default PieChart;