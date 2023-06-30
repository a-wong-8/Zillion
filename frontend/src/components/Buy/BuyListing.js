import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../store/listing";
import { useEffect } from "react";
import BuyListingIndex from "./BuyListingIndex";

export default function BuyListing() {
    const dispatch = useDispatch();
    const listings = useSelector((state)=> Object.values(state.listings))

    useEffect(()=> {
        dispatch(fetchListings())
    },[dispatch])

    let dupList = [...listings];
    dupList = dupList.slice(0,10);

    return (
        <>
        {/* // <ul>  */}
            {dupList.map(listing => <BuyListingIndex listing={listing}/>)}
        {/* // </ul> */}
        </>
    )
} 

// this will map out all the listings 
