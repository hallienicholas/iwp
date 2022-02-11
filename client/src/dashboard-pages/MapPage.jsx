import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

ReactDOM.render(
    <React.StrictMode>
    <Map />
    </React.StrictMode>,
    document.getElementById('root')
    );

function Map(){

mapboxgl.accessToken = 'pk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRma3hrNjA1bjAybm9iM2thdnZraXQifQ.CyiZY5YybAs-rk7ac--dsA';
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [lng, lat],
    zoom: zoom
        });
    });

const mapStyle = `body { margin: 600px; padding: 100px; max-width: 200px} 
#map { position: fixed; top: 50%; left: 50%; right: 50% bottom: 50%}`;

    return(
        <div>
            <div ref={mapContainer} className="map-container" />
            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
            
        <style>{mapStyle}</style>   
            
        <div id="root"></div>
        </div>
        );
        
}

export default Map;