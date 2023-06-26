import { useSelector } from "react-redux";
import BuyListing from "./BuyListing";
import { GoogleMap } from '@react-google-maps/api';
import GeocoderHome from "../Map/GeocoderHome"; 

export default function BuyPage () {
    const mapStyles = { height: "800px", width: "800px" };
    const defaultCenter = {lat: 37.70091, lng: -122.18210};
    const listings = useSelector((state)=> Object.values(state.listings))

    function formatNumber(number) {
        if (number > 999999 && number < 1099999) {
            let newNum = number.toString().slice(0, 1);
            return `${newNum}m`
        } else if (number > 1099999) {
            let newNum = number.toString().slice(0, 2);
            return `${(newNum * 0.1).toFixed(1)}m`
        } else {
            let newNum = number.toString().slice(0, 3);
            return `${newNum}k`
        }
    }

    return (
        <div className="buy-page-container">
            <div className="buy-page-listings">
                <BuyListing/>
            </div>

            <div className="buy-page-map">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}>

                {listings.map(listing => <GeocoderHome key={listing.id} location={`${listing.streetAddress}, ${listing.city}`} price={formatNumber(listing.price)}/>
                    )}

            </GoogleMap>
            </div>
        </div>
    )
}