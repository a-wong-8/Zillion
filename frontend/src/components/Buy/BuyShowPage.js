import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchListing, saveListing, unsaveListing } from "../../store/listing";
import { useEffect } from "react";
import Geocode from "../Map/Geocode";

export default function BuyShowPage() {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    let listing = useSelector((state)=>state.listings[listingId])
    const session = useSelector((state)=> Object.values(state.session))
    
    useEffect(()=>{
        dispatch(fetchListing(listingId))
    },[dispatch, listingId])
    
    
    if (listing === undefined) return null;
    const location = `${listing.streetAddress} ${listing.city}`;

    let img;

    if (listing.imageUrl !== null) {
        img = listing.imageUrl.map((image, index) => (
            <img key={index} src={image} alt="" />
          ));
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

    const categoryFormatter = (category) => {
        switch (category) {
            case 'category1':
                return 'Single family'
            case 'category2':
                return 'Condo'
            case 'category3':
                return 'Townhouse'
            case 'category4':
                return 'Multi family'
            case 'category5':
                return 'Apartment'
            case 'category6':
                return 'Mobile'
            case 'category7':
                return 'Coop unit'
            case 'category8':
                return 'Vacant land'
            case 'category9':
                return 'Other'
        }
    }

    // const handleClick = () => {
    //     if (listing.saved) {
    //         dispatch(unsaveListing(listingId, session[0].id))
    //     } else {
    //         dispatch(saveListing(listingId, session[0].id))
    //     }
    // }

    // console.log(listing.saved);

    return (
        <>
            {/* <button onClick={handleClick}>Save</button> */}
            <h1 key={listing.id}>${priceFormatter(listing.price)} {listing.streetAddress}.</h1>
            <h2>{listing.city}, {listing.state} {listing.zipCode}</h2>
            <h3>{listing.bed} bds | {listing.bath} ba | {listing.sqft} sqft. </h3>
            <h3>{categoryFormatter(listing.category)}</h3>

            <h4>{listing.description}</h4>
            <h4>Year built: {listing.yearBuilt}</h4>

            {/* <h4>{listing.imageUrl.map(image => <img src={image} alt=""/>)}</h4> */}
            <h4>{img}</h4>
            
            <Geocode location={location}/>
        </>
    )
}

// page that shows one selected house 