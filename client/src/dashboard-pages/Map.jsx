import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
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
export default Map
