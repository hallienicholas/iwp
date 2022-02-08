import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React, { Component } from "react";
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

function Map(){

mapboxgl.accessToken = 'sk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRmcnZ2cDIwbG4ydm1tZTJ6Mm15cnQifQ.9ww16sfDMlqEhvVI-x-Axw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

render() {
        
    return(
        <div id="map" className="menu">
            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
        

        <style>
            body { margin: 0; padding: 0; }
            #map { position: absolute; top: 0; bottom: 0; width: 100%; }
        </style>        

        <div id="map"></div>
        </div>
        );
}

export default Map;