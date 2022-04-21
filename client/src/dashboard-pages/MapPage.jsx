import 'mapbox-gl/dist/mapbox-gl.css';
import '../custom-css/App.css';
import mapboxgl, {queryRenderedFeatures} from 'mapbox-gl';
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Axios from 'axios';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

function Map({pumpsName, setPumpsName, mapData, setMapData}){

//const mapboxgl = require('mapbox-gl');
const mapToken = "pk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRma3hrNjA1bjAybm9iM2thdnZraXQifQ.CyiZY5YybAs-rk7ac--dsA";
mapboxgl.accessToken = mapToken;
const mapContainer = useRef(null);
let map = useRef(null);
const [lng, setLng] = useState([]);
const [lat, setLat] = useState([]);
//const [lng, setLng] = useState(-77.012100);
//const [lat, setLat] = useState(40.231838);
const [zoom, setZoom] = useState(5);
const [central, setCentral] = useState("");

const [coords, setCoords] = useState([]);

/* for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  //new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
} */
  
const [pumps1, setPumps1] = useState([]);
const [locs, setLocs] = useState([]);

const getPumpsList = () => {
    Axios.get("http://localhost:3001/pumps").then((response) => {
      setPumps1(response.data);
      console.log(response.data);
    })
  }

  /* const getPumpLocs = () => {
    Axios.get("http://localhost:3001/mapDatas").then((response) => {
      setLocs(response.data);
      console.log(response.data);
    })
} */

   const updateCenter = (e) => {
    /* Axios.get("http://localhost:3001/mapData").then((response) => {
      console.log(response.data);
      setCoords(response.data);
    }); */
    
    if(e.target.value !== "Select Pump"){

      Axios.get("http://localhost:3001/mapData?id=" + e.target.value).then((response) => {
    console.log(response.data);
      
        
        //set the center long and lat to what pump value/id corresponds to
        //parse db data to read that pump's lng/lat - ask Adam

        var long = [];
        var lats = [];
        if(response.data[0]){
            for(let i=0; i<response.data.length; i++){
              console.log(response.data[i]);
              long[i] = response.data[i].gps_longitude;
              lats[i] = response.data[i].gps_latitude;
            }
        }

        map.current.flyTo({
          center: [long, lats],
          zoom: 8
        });
              }
              
      )};
     }
 
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
  
  var pumpArray = [];
  //var pumpArray: {type: String, properties: {Name}}[];
  const getPumpLocs = () => {
    let process = false;
    Axios.get("http://localhost:3001/mapDatas").then((response) => {
      response.data.forEach((item) => {
        let pump = {
            'type': 'Feature',
            'properties': {
                'Name': item.pump_name,
                'description': 'This is pump ' + item.iwp_pump_id 
              },
              'geometry': {
                'coordinates': [
                  item.gps_longitude,
                  item.gps_latitude
                ],
                'type': 'Point'
              }
            };
        // Add pump object to the Pump Array
        pumpArray.push(pump);
      })
    })
    process = true;
    return process;
  }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/hnicholas/cl0ka3zrx001b14o2ycy1m595',
        //center: [-77.012100, 40.231838],
        center: [-76.9869, 40.1563],
        zoom: zoom
            });
        
        map.current.on('load', () => {
          console.log("loading");
          getPumpLocs();

          //const geojson = 
          const waiting1 = () => {
            if (!pumpArray.length > 0) {
              setTimeout(waiting1, 200);
            } else {
          map.current.addSource('places', {
          // This GeoJSON contains features that include an "icon"
          // property. The value of the "icon" property corresponds
          // to an image in the Mapbox Streets style's sprite.
          'type': 'geojson',
          'data': {
          'type': 'FeatureCollection',
          'features': pumpArray
        }
        })
        console.log(pumpArray);
        console.log("got points");
      }
    }
    waiting1();
      });
  
      map.current.on('load', () => {
          
         const waiting = () => {
          if (!pumpArray.length > 0) {
            setTimeout(waiting, 300);
          } else { 
            map.current.addLayer({
        
              'id': 'places',
              'type': 'symbol',
              'source': 'places',
              'layout': {
              'icon-image': 'water-pump',
              'icon-allow-overlap': true
              }
              });
              console.log("added layer");
            }
      };
        waiting(); 
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.current.on('click', 'places', (e) => {
  // Copy coordinates array.
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.description;
  const Name = e.features[0].properties.Name;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(Name + '<br>' + description)
  .addTo(map.current);
  });


  map.current.on('mouseenter', 'places', () => {
    map.current.getCanvas().style.cursor = 'pointer';
    });
      // Change it back to a pointer when it leaves.
      map.current.on('mouseleave', 'places', () => {
      map.current.getCanvas().style.cursor = 'default';
      });
          }, []);
          

useEffect(() => {
    if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    }, []);

    return(
        <div className='container-fluid'>
            <div id="map">

            <div className="mapbar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
            {/* onClick={interact} */}

            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

        <style>{mapStyle}</style>
      <div className='row'>
        <div className="col">
            <label for="pumpList">Pump</label>
            <select id="pumpList" className="form-control form-control-sm" onClick={getPumpsList} onChange={updateCenter}>


            <option key="default">Select Pump</option>
            {pumps1.map((val,key) => {
                  return(
                    <option key={val.iwp_pump_id}>{val.iwp_pump_id}</option>
                  )
                })
              }
            </select>
          </div>

        <div id="root"></div>
        </div>

        </div>

        

        </div>
        );      
}

export default Map;