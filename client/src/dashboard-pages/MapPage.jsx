import React from 'react'
import MapSection from './Map' // import the map here
import GoogleMapReact from 'google-map-react'
import '../custom-css/Map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
  <Icon icon={locationIcon} className="pin-icon" />
  <p className="pin-text">{text}</p>
</div>
)



const Map = ({ location, zoomLevel }) => (

  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ apiKey: process.env.MAP }} //will need to follow website to restrict key when in production
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
      </div>
    </div>
  </div> 

)

const location = {
    address: 'One University Avenue, Mechanicsburg PA 17055',
    lat: 40.155269,
    lng: -76.99325,z
  }

const MapComp = () => (
  <div className="Map Component">
    <Map>
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </Map>
  </div>
)

export default MapComp