import { useDispatch, useSelector } from "react-redux";
import { GoogleMap } from '@react-google-maps/api';
import GeocoderHome from "../Map/GeocoderHome"; 
import BuyListingIndex from "./BuyListingIndex";
import { useEffect, useState } from "react";
import { fetchListings } from "../../store/listing";

export default function BuyPage () {
    const dispatch = useDispatch();
    const mapStyles = { height: "800px", width: "800px" };
    const defaultCenter = {lat: 37.70091, lng: -122.18210};
    const listings = useSelector((state)=> Object.values(state.listings));
    const [randList, setRandList] = useState(listings);

    window.scrollTo(0, 0);
    
    useEffect(()=> {
        dispatch(fetchListings())
    },[])

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

    useEffect(()=> {
        function getRandomListings(list, count) {
                const shuffled = list.sort(() => 0.5 - Math.random());
                let final = shuffled.slice(0, count);
                return final;
            }
        let dupList = [...listings];
        setRandList(getRandomListings(dupList, 8))
    },[dispatch])

    return (
        <div className="buy-page-container">
            
            <div className="buy-page-listings">
                <ul>
                    {randList.length > 1 ? randList.map(listing => <BuyListingIndex key={listing.id} listing={listing}/>) : listings.map(listing => <BuyListingIndex key={listing.id} listing={listing}/>)}
                </ul>
            </div>

            <div className="buy-page-map">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}>

                {listings.map(listing => <GeocoderHome 
                    key={listing.id} 
                    location={`${listing.streetAddress}, ${listing.city}`} 
                    price={formatNumber(listing.price)} 
                    id={listing.id}
                    />
                )}
            </GoogleMap>
            </div>

        </div>
    )
}