import { useState } from "react";
import { useDispatch } from "react-redux"
import { createListing } from "../../store/listing";


export default function SellPage() {
    const[ streetAddress, setStreetAddress] = useState('');
    const[ city, setCity] = useState('');
    const[ state, setState ] = useState('');
    const[ zipCode, setZipCode] = useState('');
    const[ bed, setBed] = useState('');
    const[ bath, setBath] = useState('');
    const[ sqft, setSqft] = useState('');
    const[ lotSize, setLotSize] = useState('');
    const[ category, setCategory] = useState('');
    const[ description, setDescription] = useState('');
    const[ price, setPrice] = useState('');
    const[ yearBuilt, setYearBuilt] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newListing = {
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
        dispatch(createListing(newListing));
    }

    return (
        <>
            <h1>For Sale By Owner Listing</h1>
            <form className="listing-form" onSubmit={handleSubmit}>
                <label>Street address
                    <input value={streetAddress} type="text" onChange={(e)=>setStreetAddress(e.target.value)} required/>
                </label>

                <label>City
                    <input value={city} type="text" onChange={(e)=>setCity(e.target.value)} required/>
                </label>

                <label>State
                    <input value={state} type="text" onChange={(e)=>setState(e.target.value)} required/>
                </label>

                <label>Zip code
                    <input value={zipCode} type="integer" onChange={(e)=>setZipCode(e.target.value)} required/>
                </label>

                <label>Bed
                    <input value={bed} type="integer" onChange={(e)=>setBed(e.target.value)} required/>
                </label>

                <label>Bath
                    <input value={bath} type="integer" onChange={(e)=>setBath(e.target.value)} required/>
                </label>

                <label>Finished square feet
                    <input value={sqft} type="integer" onChange={(e)=>setSqft(e.target.value)} required/>
                </label>

                <label>Lot size
                    <input value={lotSize} type="integer" onChange={(e)=>setLotSize(e.target.value)} required/>
                </label>

                <label>Home type
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

                <label>Describe your home
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                </label>

                <label>Set your price
                    <input value={price} type="integer" onChange={(e)=>setPrice(e.target.value)} required/>
                </label>

                <label>Year built
                    <input value={yearBuilt} type="integer" onChange={(e)=>setYearBuilt(e.target.value)} required/>
                </label>

                <button type="submit" className="post-button">Post for sale by owner</button>
            </form>
        </>
    )
}