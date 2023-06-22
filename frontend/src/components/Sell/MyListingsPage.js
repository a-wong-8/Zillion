import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteListing, fetchListings } from "../../store/listing";

export default function MyListingsPage({user}) {
    const dispatch = useDispatch();
    const allListings = useSelector((state)=> Object.values(state.listings))
    const {userId} = useParams();

    useEffect(()=>{
        dispatch(fetchListings(userId))
    },[dispatch, userId])

    const userListings = allListings.filter((listing) => String(listing.userId) === userId );
    
    const handleDelete = (listingId) => {
        dispatch(deleteListing(listingId))
    }

    return (
        <>
            <h1>My Listings</h1>
            {userListings.map((listing)=>(
                <ul>
                    <li>{listing.streetAddress}</li>
                    <NavLink to={`listings/${listing.id}/edit`}>Edit</NavLink>
                    <button onClick={()=>handleDelete(listing.id)}>Delete</button>
                </ul>
            ))}
        </>
    )
}

// shows the user's listings to edit or delete 