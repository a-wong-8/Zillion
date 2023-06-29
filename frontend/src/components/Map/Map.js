import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapContainer = ({geolocation}) => {
  const mapStyles = { height: "400px", width: "400px" };
  const defaultCenter = geolocation;

  const locations = [
    {
        name: "Location 1",
        location: geolocation,
      },
  ]

  return (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}>

             {locations.map(item => (
              <Marker key={item.name} position={item.location}/>
            ))}

        </GoogleMap>
  )
}

export default MapContainer;