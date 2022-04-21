import React, {Component, useState } from 'react';
import PumpList from '../global/PumpList';
import VolumeChart from './VolumeChart';
import Axios from 'axios';

function Pump(id){

	

	const [pumpName, setPumpName] = useState("");
	const [chartData, setChartData] = useState([0]);

	const fillBattery = () => {
		if(chartData[0]){
			return chartData[0].battery_percentage;
		} else {
			return "N/A";
		}
	}

	const fillTrans = () => {
		if(chartData[0]){
			return chartData[0].iwp_sensor_data_id;
		} else {
			return "N/A";
		}
	}

	return(
		<div className="container-fluid">
			<PumpList setPumpName={setPumpName} pumpName={pumpName} setChartData={setChartData} chartData={chartData} id={id.location.state}/>
			<div className="row">
				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-primary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pump ID</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">{pumpName}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-faucet fa-2x text-gray-300"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-md-6 mb-4">
						<div className="card border-left-danger shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
											Battery Voltage</div>
										<div className="h5 mb-0 font-weight-bold text-uppercase text-gray-800">
											{fillBattery()}
										</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-battery-empty fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className="col-xl-3 col-md-6 mb-4">
					<div className="card border-left-secondary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Last Transmission</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">
										{fillTrans()}
									</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-faucet fa-2x text-gray-300"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-6 col-lg-6">
					<div className="card shadow mb-4 border-left-info">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Volume</h6>
						</div>
						<div className="card-body">
							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">
						</canvas>
							<VolumeChart chartData={chartData} chartTitle={"Volume Pumped by Date"} pumpId={pumpName} purpose="volume"/>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-6">
					<div className="card shadow mb-4 border-left-info">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Battery</h6>
						</div>
						<div className="card-body">
							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">
						</canvas>
							<VolumeChart chartData={chartData} chartTitle={"Battery Voltage by Date"} pumpId={pumpName} purpose="battery"/>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className="col-xl-6 col-lg-6">
					<div className="card shadow mb-4 border-left-info">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Leakage</h6>
						</div>
						<div className="card-body">
							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">
						</canvas>
							<VolumeChart chartData={chartData} chartTitle={"Leakage Coefficient by Date"} pumpId={pumpName} purpose="leakage"/>
						</div>
					</div>
				</div>
				<div className='col-xl-6'>
				<div className="card shadow mb-4 border-left-info">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Priming</h6>
						</div>
						<div className="card-body">
							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">
						</canvas>
							<VolumeChart chartData={chartData} chartTitle={"Longest Prime by Date"} pumpId={pumpName} purpose="priming"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
}

export default Pump;