import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing } from "../../store/listing";
import Geocode from "../Map/Geocode";

export default function BuyShowPage() {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    let listing = useSelector((state)=>state.listings[listingId])

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    },[dispatch, listingId])

    if (listing === undefined) return null;

    const location = `${listing.streetAddress} ${listing.city}`;

    return (
        <>
            <h1>${listing.price} {listing.streetAddress}.</h1>
            <h2>{listing.city}, {listing.state} {listing.zipCode}</h2>
            <h3>   {listing.bed} bds | {listing.bath} ba | {listing.sqft} sqft | {listing.category}</h3>

            <h4>{listing.description}</h4>
            <h4>Year built: {listing.yearBuilt}</h4>
            <h4><img src={listing.imageUrl}/></h4>
            
            <Geocode location={location}/>
        </>
    )
}

// page that shows one selected house 