import React, { Component } from 'react';

class Pump extends Component {
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
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pump ID</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">275</div>
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
			</div>
		);
	}
}

export default Pump;