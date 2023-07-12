import { useEffect, useState } from 'react';
import MapContainer from './Map';

const Geocode = ({location}) => {
  const [geolocation, setGeolocation] = useState(null)
  const geocoder = new window.google.maps.Geocoder();

  let address;

  useEffect(() => {
    address = location;
    geocoder.geocode({ address: address }, (results, status) => {
    if (status === window.google.maps.GeocoderStatus.OK) {
        const location = results[0].geometry.location;
        setGeolocation({
            lat: location.lat(),
            lng: location.lng()
         });
    }});
}, [location]);

  return (
    <div className='map'>
        <MapContainer geolocation={geolocation}/>
    </div>
  )
};

export default Geocode;