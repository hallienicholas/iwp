import React from 'react'
import MapSection from './Map' // import the map here
import '../custom-css/Map.css'

const location = {
    address: 'One University Avenue, Mechanicsburg PA 17055',
    lat: 40.155269,
    lng: -76.99325,
  }

const MapComp = () => (
  <div className="Map Component">
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
  </div>
)

export default MapComp