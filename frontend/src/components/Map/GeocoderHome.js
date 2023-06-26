import { useEffect, useState } from "react";
import { Marker } from '@react-google-maps/api';

export default function GeocoderHome({location, price, id}) {
    const [geolocation, setGeolocation] = useState('null')
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
    }, [address, location]);

    const handleClick = () => {
      window.location.href = `/listings/${id}`;
    }

return (
    <>
      <Marker position={geolocation} label={price} onClick={handleClick}/>
    </>
  )
}
