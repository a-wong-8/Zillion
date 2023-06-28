import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteListing, fetchListings } from "../../store/listing";
import UserSaves from "./Saves";

export default function MyListingsPage() {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const allListings = useSelector((state)=> Object.values(state.listings))
    const session = useSelector((state)=> Object.values(state.session))
    
    useEffect(()=>{
        dispatch(fetchListings());
        if (session[0] === null) {
            window.alert('Please sign in to view your listings.')
            window.location.href = `/`;
        }
    },[dispatch])

    const userListings = allListings.filter((listing) => String(listing.userId) === userId );
    
    const handleDelete = (listingId) => {
        dispatch(deleteListing(listingId))
    }

    return (
        <>
            <h1>My Listings</h1>
            {userListings.map((listing)=>(
                <ul key={listing.id}>
                    <li>{listing.streetAddress}</li>
                    <NavLink to={`listings/${listing.id}/edit`}>Edit</NavLink>
                    <button onClick={()=>handleDelete(listing.id)}>Delete</button>
                </ul>
            ))}
            {/* <UserSaves userId={userId}/> */}
        </>
    )
}

// shows the user's listings to edit or delete 