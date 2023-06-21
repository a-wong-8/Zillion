import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../store/listing";
import { useEffect } from "react";
import BuyListingIndex from "./BuyListingIndex";

export default function BuyListing() {
    const dispatch = useDispatch();
    const listings = useSelector((state)=> Object.values(state.listings))

    useEffect(()=> {
        dispatch(fetchListings())
    },[])

    return (
        <ul>
            {listings.map(listing => <BuyListingIndex listing={listing}/>)}
        </ul>
    )
} 

// this will map out all the listings 