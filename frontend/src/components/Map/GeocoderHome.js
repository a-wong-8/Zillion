import { useEffect, useState } from "react";
import { Marker } from '@react-google-maps/api';
import mark from './marker2.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function GeocoderHome({location, price, id}) {
  const [geolocation, setGeolocation] = useState(null)
  const geocoder = new window.google.maps.Geocoder();
  const history = useHistory();
  const[hover, setHover] = useState(false);

  let address;

  useEffect(() => {
    address = location; // code is from google maps 
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
    // window.location.href = `/listings/${id}`;
    history.push(`/listings/${id}`);
  }

  const handleEnter = () => {
    setHover(true);
  }

  const handleLeave = () => {
    setHover(false);
  }

  return (
      <div style={{position: 'relative', zIndex:hover? 1:0}}>
        <Marker
          position={geolocation} label={{color: hover ? '#ddd':'white', text: price }}    
          style={{ position: 'relative', zIndex:hover? 1:0}}       
          onClick={handleClick} 
          icon={mark}
          onMouseOver={handleEnter}
          onMouseOut={handleLeave}
          >
        </Marker> 
      </div>
    )
}
