import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

function Map(){

const mapToken = "pk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRma3hrNjA1bjAybm9iM2thdnZraXQifQ.CyiZY5YybAs-rk7ac--dsA";
mapboxgl.accessToken = mapToken;
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-77.012100);
const [lat, setLat] = useState(40.231838);
const [zoom, setZoom] = useState(5);

const mapStyle = 
  `#map { 
    width: 100%;
    margin-right:auto;
    margin-left:auto;
}
#map-container {
  margin-left:auto;
  margin-right:auto;
}`;


useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/hnicholas/ckzdfpm16000614mn71sfppcs',
    //style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [lng, lat],
    zoom: zoom
    
        });
    });

    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/

const interact = (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
      layers: 'pump-locations'
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    
    /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
 map.on('mouseDown', (e) => {
   console.log(e);
 })
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(map);
    
  };

    return(
        <div className='container-fluid'>
          <div id="map">
            <div ref={mapContainer} className="map-container" onClick={interact} />
            
            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

          <style>{mapStyle}</style>
        </div>
        </div>
        );
        
}

export default Map;