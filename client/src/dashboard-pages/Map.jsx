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

    <Map.Navigator
      initialRouteName="SearchPage"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fefefe",
        },
        headerLeft: () => null,
        headerTitleAlign: "center",
        headerBackTitle: null,
        headerTintColor: "black",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#2C2C2C",
        },
      }}
    >
      <Map.Screen
        name="Map"
        component={SearchPage}
        options={({ navigation }) => {
          return {
            headerRight: () => <Header navigation={navigation} />,
          };
        }}
      />
      <Map.Screen
        name="MapView"
        component={MapView}
        options={({ navigation }) => {
          return {
            headerRight: () => <Header navigation={navigation} />,
          };
        }}
      />
    </Map.Navigator>

)
export default Map
