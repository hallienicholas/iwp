import React, { Component } from 'react';

class Dashboard extends Component {
	render(){
		return(
			<div className="container-fluid">
				<h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
				<div className="row">
					<div className="col-xl-3 col-md-6 mb-4">
						<div className="card border-left-primary shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pumps Installed</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">Number</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-faucet fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            	Gallons Pumped</div>
                                            <div className="h5 mb-0 font-weight-bold text-uppercase text-gray-800">A bunch</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-water fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;