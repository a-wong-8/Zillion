import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { fetchListing, updateListing } from "../../store/listing";
import { useEffect, useState } from "react";
import EditPageForm from "./EditPageForm";

export default function EditPage() {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    let listing = useSelector((state)=>state.listings[listingId])

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    },[dispatch, listingId])

    // add comp and only render form when listing is completed being fetched 
    // then dont need undefined listing 
    // form component then send listing as prop if listing is loaded 
    
    if (listing) {
        
    return (
        <>
            <EditPageForm listing={listing}/>
        </>
    )}
}