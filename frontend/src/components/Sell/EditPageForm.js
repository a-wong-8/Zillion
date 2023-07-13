import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { fetchListing, updateListing } from "../../store/listing";
import { useEffect, useState } from "react";

export default function EditPageForm() {
    
    const dispatch = useDispatch();
    const {listingId} = useParams();
    let listing = useSelector((state)=>state.listings[listingId])
    const user = useSelector((state)=> Object.values(state.session))
    
    useEffect(()=>{
        dispatch(fetchListing(listingId))
    },[dispatch, listingId])

    useEffect(() => {
        if (user[0].id !== listing.userId) {
            window.alert('Please sign in to edit listing.')
            window.location.href = `/`;
        }
    }, [])

    const[ streetAddress, setStreetAddress] = useState(listing.streetAddress);
    const[ city, setCity] = useState(listing.city);
    const[ state, setState ] = useState(listing.state);
    const[ zipCode, setZipCode] = useState(listing.zipCode);
    const[ bed, setBed] = useState(listing.bed);
    const[ bath, setBath] = useState(listing.bath);
    const[ sqft, setSqft] = useState(listing.sqft);
    const[ lotSize, setLotSize] = useState(listing.lotSize);
    const[ category, setCategory] = useState(listing.category);
    const[ description, setDescription] = useState(listing.description);
    const[ price, setPrice] = useState(listing.price);
    const[ yearBuilt, setYearBuilt] = useState(listing.yearBuilt);

    const handleSubmit = (e) => {
        e.preventDefault();
        const listingFill = {
            ...listing,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            bed: bed,
            bath: bath,
            sqft: sqft,
            lotSize: lotSize,
            category: category,
            description: description,
            price: price,
            yearBuilt: yearBuilt
        }
        dispatch(updateListing(listingFill));
        window.alert('Listing has been successfully edited.')
    }

    return (
    <div className="sell-form">
            <h1 id="for-sale-by-owner">Edit Listing</h1>
      
            <form className="listing-form" onSubmit={handleSubmit}>

                <label id="sell-price">Set your price
                <br></br>
                    <input value={price} type="integer" placeholder="$" onChange={(e)=>setPrice(e.target.value)} required/>
                </label>
                
                <div id="home-facts-div">
                    Home facts
                </div>

                <div className="home-facts-container">
                <label>
                    <h4 id="listing-form-h4">
                    Street address
                    </h4>
                    <input value={streetAddress} type="text" onChange={(e)=>setStreetAddress(e.target.value)} required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        City
                    </h4>
                    <input value={city} type="text" onChange={(e)=>setCity(e.target.value)} required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        State
                    </h4>
                    <input value={state} type="text" onChange={(e)=>setState(e.target.value)} required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        Zip code
                    </h4>
                    <input value={zipCode} type="integer" onChange={(e)=>setZipCode(e.target.value)} required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        Home type
                    </h4>
                    <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                        <option value={''} disabled>Please select type</option>
                        <option value={'Single family'}>Single family</option>
                        <option value={'Condo'} >Condo</option>
                        <option value={'Townhouse'} >Townhouse</option>
                        <option value={'Multi family'} >Multi family</option>
                        <option value={'Apartment'} >Apartment</option>
                        <option value={'Mobile'} >Mobile</option>
                        <option value={'Coop unit'} >Coop unit</option>
                        <option value={'Vacant land'} >Vacant land</option>
                        <option value={'Other'} >Other</option>
                    </select>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        Bed
                    </h4>
                    <input value={bed} type="integer" onChange={(e)=>setBed(e.target.value)} placeholder="0" required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        Bath
                    </h4>
                    <input value={bath} type="integer" onChange={(e)=>setBath(e.target.value)} placeholder="0" required/>
                </label>

                <label>
                    <h4 id="listing-form-h4">
                        Finished square feet
                    </h4>
                    <input value={sqft} type="integer" onChange={(e)=>setSqft(e.target.value)} required/>
                </label>

                <label>
                <h4 id="listing-form-h4">
                    Lot size
                </h4>
                    <input value={lotSize} type="integer" onChange={(e)=>setLotSize(e.target.value)} required/>
                </label>

                <label>
                <h4 id="listing-form-h4">
                    Year built
                </h4>
                    <input value={yearBuilt} type="integer" onChange={(e)=>setYearBuilt(e.target.value)} required/>
                </label>

                <label id="describe-input">
                <h4 id="listing-form-h4">
                    Describe your home
                </h4>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                </label>

                </div>

                <button type="submit" className="post-button">Edit post</button>
            </form>
        </div>
    )
}