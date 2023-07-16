import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaves, unsaveListing } from "../../store/listing";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Saves.css'

export default function MySaves () {
    const dispatch = useDispatch();
    const userSaves = useSelector((state)=> Object.values(state.saves));
    const session = useSelector((state)=> Object.values(state.session));

    useEffect(()=> {
        dispatch(fetchSaves());
    },[])

    const handleClick = (listing) => {
            dispatch(unsaveListing(listing.id, session[0].id))
    }

    const priceFormatter = (price) => {
        price = price.toString();
        let newPrice = '';

        for (let i = 0; i < price.length; i++) {
            newPrice += price[i];
            if ((price.length - i - 1) % 3 === 0 && i !== price.length - 1) {
              newPrice += ',';
            }
          }
        return newPrice;
    }

    return (
        <>
        <h1 className="my-saves-h1">
            My Saves
        </h1>

        <div className="saves-main-container">
        <div className="saves-container">

        {userSaves.map(listing=>(
        <div className="saves-item">
            <Link to={`/listings/${listing.id}`}>
            <li>
                <div>
                {listing.imageUrl && listing.imageUrl.length > 0 && (
                    <img src={listing.imageUrl[0]} className="saved-first-img" alt="First Image" />
                )}
                </div>
            </li>


            <li id="saves-price">
                ${priceFormatter(listing.price)}
            </li>
            
            <li id="saves-bed-bath">
                {listing.bed} bd | {listing.bath} bath | {listing.sqft} sqft
            </li>

            {listing.streetAddress}, 
            
            <li>
                {listing.city}, {listing.state} {listing.zipCode}
            </li>
            
            </Link>

            <button onClick={()=>handleClick(listing)} className="my-saves-button">
                Unsave
            </button>
        </div>
        
        ))}
        </div>
        </div>
        </>
    )
}