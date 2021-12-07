import React, {Component, useState } from 'react';

import PumpList from '../global/PumpList';

import VolumeChart from './VolumeChart';

import Axios from 'axios';




function Pump(){




	const [pumpName, setPumpName] = useState([]);

	const [volumeData, storeVolume] = useState([]);

	var [dateLabels] = useState([]);

	const getVolumeData = () => {

		Axios.get("http://localhost:3001/volume").then((response) => {

		  storeVolume(response.data);

		  dateLabels = [response.data[0].date_sensed,

		  response.data[1].date_sensed,

		  response.data[2].date_sensed,

		  response.data[3].date_sensed,

		  response.data[4].date_sensed,

		  response.data[5].date_sensed,

		  response.data[6].date_sensed,

		  response.data[7].date_sensed]

		console.log(dateLabels)

		})

		

		}




	return(

		<div className="container-fluid">

			<PumpList setPumpName={setPumpName} pumpName={pumpName} getVolumeData={getVolumeData} />

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

											Battery Percentage</div>

										<div className="h5 mb-0 font-weight-bold text-uppercase text-gray-800">0%</div>

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

									<div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">5679</div>

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

							<h6 className="m-0 font-weight-bold text-primary">Intake</h6>

						</div>

						<div className="card-body">

							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">

						</canvas>

							<VolumeChart storeVolume={storeVolume} volumeData={volumeData} dateLabels={dateLabels} chartTitle={"Volume Pumped (gallons) by Date"} chartData={['2.524','23.457','0','80.387','32.527','274.917','3481.6']}/>

						</div>

					</div>

				</div>

				<div className="col-xl-6 col-lg-6">

					<div className="card shadow mb-4 border-left-info">

						<div className="card-header py-3">

							<h6 className="m-0 font-weight-bold text-primary">Intake</h6>

						</div>

						<div className="card-body">

							<canvas id="myChart"  className="chartjs-render-monitor mt-auto mb-auto" width="0" height="0">

						</canvas>

							<VolumeChart storeVolume={storeVolume} volumeData={volumeData} dateLabels={dateLabels} chartTitle={"Battery Percentage by Date"} chartData={['4.194','4.194','4.197','4.197','4.203','4.203','4.134']}/>

						</div>

					</div>

				</div>

			</div>

		</div>

	);

	

}




export default Pump;
