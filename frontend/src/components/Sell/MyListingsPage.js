import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteListing, fetchListings } from "../../store/listing";
// import UserSaves from "./Saves";
import './MyListingsPage.css'

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
    },[dispatch, userId])

    const userListings = allListings.filter((listing) => String(listing.userId) === userId );
    
    const handleDelete = (listingId) => {
        const confirm = window.confirm('Are you sure you want to delete this listing?');
        if (confirm) dispatch(deleteListing(listingId))
    }

    return (
        <>
        <h1 id="my-listings-h1">
            My Listings
        </h1>

        <div className="my-listings-main-container">
        <div className="my-listings-display-container">

            {userListings.map((listing)=>(
                <div id="my-listings-list-container">

                    <li>
                        {listing.imageUrl && listing.imageUrl.length > 0 && (
                            <img src={listing.imageUrl[0]} className="my-listing-first-img" 
                            alt="First Image"/>
                        )}
                    </li>

                    <Link to={`/listings/${listing.id}`}>
                        <li>{listing.streetAddress},</li>
                        <li>{listing.city}, {listing.state}</li>
                    </Link>
                    
                    <NavLink to={`listings/${listing.id}/edit`} id="edit-button">
                        <button>
                            Edit
                        </button>
                    </NavLink>
                    <br></br>

                    <button id="delete-button" 
                    onClick={()=>handleDelete(listing.id)}>
                        Delete
                    </button>

                </div>
            ))}

        </div>
        </div>

        </>
    )
}

// shows the user's listings to edit or delete 