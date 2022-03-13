import React, {Component, useState } from 'react';
import Map from '../dashboard-pages/MapPage';
import Axios from 'axios';
import mapboxgl from 'mapbox-gl';

function MapView(){

	const [pumpsName, setPumpsName] = useState([]);
	const [mapData, setMapData] = useState([]);


	const getMapData = (e) => {
		Axios.get("http://localhost:3001/mapData?id=" + e.target.value).then((response) => {
		  console.log(response.data);
		  setMapData(response.data);
		  //const info = response.data;
		  //const [id, name, latitude, longitude, country] = info.split(','); 
		  //console.log(id);
		  
		})
		};

	return(
		<div className="container-fluid">
			<Map setPumpsName={setPumpsName} pumpsName={pumpsName} setMapData={setMapData} mapData={mapData} getMapData={getMapData}/>
            </div>
	);
	
}

export default MapView;