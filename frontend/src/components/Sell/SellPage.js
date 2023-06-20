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
    const[ type, setType] = useState('');
    const[ description, setDescription] = useState('');
    const[ price, setPrice] = useState('');
    const[ yearBuilt, setYearBuilt] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const newListing = {
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            bed: bed,
            bath: bath,
            sqft: sqft,
            lotSize: lotSize,
            type: type,
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
                    <input value={streetAddress} type="text" onChange={(e)=>setStreetAddress(e.target.value)}/>
                </label>

                <label>City
                    <input value={city} type="text" onChange={(e)=>setCity(e.target.value)}/>
                </label>

                <label>State
                    <input value={state} type="text" onChange={(e)=>setState(e.target.value)}/>
                </label>

                <label>Zip code
                    <input value={zipCode} type="integer" onChange={(e)=>setZipCode(e.target.value)}/>
                </label>

                <label>Bed
                    <input value={bed} type="integer" onChange={(e)=>setBed(e.target.value)}/>
                </label>

                <label>Bath
                    <input value={bath} type="integer" onChange={(e)=>setBath(e.target.value)}/>
                </label>

                <label>Finished square feet
                    <input value={sqft} type="integer" onChange={(e)=>setSqft(e.target.value)}/>
                </label>

                <label>Lot size
                    <input value={lotSize} type="integer" onChange={(e)=>setLotSize(e.target.value)}/>
                </label>

                <label>Home type
                    <select value={type} onChange={(e)=>setType(e.target.value)}>
                        <option >Single family</option>
                        <option >Condo</option>
                        <option >Townhouse</option>
                        <option >Multi family</option>
                        <option >Apartment</option>
                        <option >Mobile</option>
                        <option >Coop unit</option>
                        <option >Vacant land</option>
                        <option >Other</option>
                    </select>
                </label>

                <label>Describe your home
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </label>

                <label>Set your price
                    <input value={price} type="integer" onChange={(e)=>setPrice(e.target.value)}/>
                </label>

                <label>Year built
                    <input value={yearBuilt} type="integer" onChange={(e)=>setYearBuilt(e.target.value)}/>
                </label>

                <button type="submit" className="post-button">Post for sale by owner</button>
            </form>
        </>
    )
}