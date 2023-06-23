import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "./store/listing";

function ListingIndex() {
const dispatch = useDispatch();
const listings = useSelector((state)=>Object.values(state.listings))

    useEffect(()=> {
        dispatch(fetchListings())
    },[])

    return (
      <ul>
        {listings.map(listing => {
          return (
            <li key={listing.id}>
              <h2>{listing.street_address}</h2>
              <img src={listing.imageUrl} alt="" />
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default ListingIndex;