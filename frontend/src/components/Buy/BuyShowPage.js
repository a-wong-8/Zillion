import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchListing, fetchSaves, saveListing, unsaveListing } from "../../store/listing";
import { useEffect, useState } from "react";
import Geocode from "../Map/Geocode";
import './ShowPage.css'

export default function BuyShowPage() {
    const dispatch = useDispatch();
    const {listingId} = useParams();
    let listing = useSelector((state)=>state.listings[listingId])
    const session = useSelector((state)=> Object.values(state.session))
    const saves = useSelector((state)=> Object.values(state.saves))
    const [savedListing, setSavedListing] = useState('')

    let saved = false;

    saves.map(listing=>{
        if (listing.id === parseInt(listingId)) saved = true;
    }) 

    useEffect(()=>{
        dispatch(fetchListing(listingId));
        dispatch(fetchSaves());
    },[dispatch, listingId, savedListing])
    
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

    const handleClick = () => {
        if (session[0] === null) {
            window.alert('Please login or make an account to save a listing.')
        } else if (!saved) {
            dispatch(saveListing(listingId, session[0].id));
            setSavedListing(true)
        } else if (saved) {
            dispatch(unsaveListing(listingId, session[0].id))
        }
    }

    const priceSqft = (price, sqft) => {
        return `$${Math.floor(price/sqft)} price/sqft`
    }

    return (
        <div className="show-page">
            <div className="show-page-content">

            <div className="show-page-info">
            <button onClick={handleClick} className="save-button">
                {saved? 'Unsave' : 'Save'}
            </button>
                <ul>
                <li key={listing.id} id="show-price">
                    ${priceFormatter(listing.price)} 
                </li>
                <br></br>
                <li id="show-bed-bath">
                    {listing.bed} bds | {listing.bath} ba | {listing.sqft} sqft 
                </li>
                <br></br>
                <li id="show-page-address">
                    {listing.streetAddress}, {listing.city}, {listing.state} {listing.zipCode}
                </li>
                <br></br>
                <li>
                    <ul id="facts-list">
                        <li>{categoryFormatter(listing.category)}</li>
                        <li>Built in {listing.yearBuilt}</li>
                        <li>{listing.lotSize} Sqft lot</li>
                        <li>{priceSqft(listing.price, listing.sqft)}</li>
                    </ul>
                </li>
                <br></br>
                <li id="show-page-description">
                    <h4>
                        Overview 
                    </h4>
                    <br></br>
                    <p>
                        {listing.description}
                    </p>
                </li>

                </ul>
            <div className="show-page-map">
                <Geocode location={location}/>
            </div>
            </div>

            <div className="show-page-imgs">
                {img}
            </div>
            
            </div>
        </div>
    )
}

// page that shows one selected house 