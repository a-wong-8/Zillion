// import { Wrapper, GoogleMap, Marker } from '@googlemaps/react-wrapper';
// import { useEffect, useRef, useState } from 'react';

// const Map = ({mapOptions}) => {
//     const[map, setMap] = useState(null);
//     const mapRef = useRef(current);
//     const markersRef = useRef({});

//     if (mapOptions === undefined) {
//         mapOptions = {
//             center: {lat: 37.7749, lng: -122.4194},
//             zoom: 17
//         }
//     }

//     useEffect(()=> {
//         if (map === null) {
//             setMap(new google.maps.Map(mapRef, mapOptions))
//         }
//     },[])

//     useEffect(()=> {

//     })

//     return (
//         <div ref={mapRef}>
//             Map
//         </div>
//     )
// }

// const MapWrapper = () => {
//     return (
//         <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
//             <Map/>
//         </Wrapper>
//     )
// }

// export default MapWrapper;