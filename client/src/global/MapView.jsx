import React, {Component, useState } from 'react';
import Map from '../global/MapPage';
import Axios from 'axios';

function MapView(){

	const [pumpsName, setPumpsName] = useState([]);
	const [mapData, setMapData] = useState([]);

	return(
		<div className="container-fluid">
			<Map setPumpName={setPumpsName} pumpName={pumpsName} setMapData={setMapData} chartData={mapData}/></div>
	);
	
}

export default MapView;