import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

const location = {
    address: 'One University Avenue, Mechanicsburg PA 17055',
    lat: 40.155269,
    lng: -76.99325,
  }

  const App = () => (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      <DisclaimerSection />
      <FooterSection />
    </div>
  )

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP }} //will need to follow website to restrict key when it production
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
  )

  export default App

