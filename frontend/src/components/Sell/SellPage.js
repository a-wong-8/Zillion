import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createListing } from "../../store/listing";
import './SellPage.css'

export default function SellPage() {

    const session = useSelector((state)=> Object.values(state.session))

    useEffect(() => {
        if (session[0] === null) {
            window.alert('Please sign in or create a new account to post a listing.')
            window.location.href = `/`;
        }
    }, [session])
  
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
    const[ imageFile, setImageFile] = useState (null);
    // const [imageUrls, setImageUrls] = useState ([]);

    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('listing[streetAddress]', streetAddress);
        formData.append('listing[city]', city);
        formData.append('listing[state]', state);
        formData.append('listing[zipCode]', zipCode);
        formData.append('listing[bed]', bed);
        formData.append('listing[bath]', bath);
        formData.append('listing[sqft]', sqft);
        formData.append('listing[lotSize]', lotSize);
        formData.append('listing[category]', category);
        formData.append('listing[description]', description);
        formData.append('listing[price]', price);
        formData.append('listing[yearBuilt]', yearBuilt);
        // if (imageFile) formData.append('listing[images]', imageFile);
        
        if (imageFile) {
                if (imageFile.length !== 0) {  
                    imageFile.forEach(image => {
                    formData.append('listing[images][]', image);
                    })
                }
                // if (response.ok) {
                //     setImageFile([]);
                //     setImageUrls([]);
                // }
          }       
        try  {
            const listing = await (dispatch(createListing(formData)))
            window.alert('Listing was successfully posted.')
            window.location.href = `/`;
        } catch (error) {
            window.alert(error);
        }
    }

    const handleFiles = ({ currentTarget }) => {
        const files = Array.from(currentTarget.files);
        setImageFile(files);
        // if (files.length !== 0) {
        //   let filesLoaded = 0;
        //   const urls = [];
        //   Array.from(files).forEach((file, index) => {
        //     const fileReader = new FileReader();
        //     fileReader.readAsDataURL(file);
        //     fileReader.onload = () => {
        //       urls[index] = fileReader.result;
        //       if (++filesLoaded === files.length)
        //         setImageUrls(urls);
        //     }
        // });
        // }
        // else setImageUrls([]);
      }

    return (
        <div className="sell-form">
            <h1 id="for-sale-by-owner">For Sale By Owner Listing</h1>
            <h3 id="post-incentive">Post once and your home will be listed on Zillion, reaching buyers on the largest real estate network on the Web. Plus, home shoppers receive emails about new homes on the market - including yours.</h3>
            <form className="listing-form" onSubmit={handleSubmit}>

                <label id="sell-price">Set your price
                <br></br>
                    <input value={price} type="integer" placeholder="$" onChange={(e)=>setPrice(e.target.value)} required/>
                </label>

                <label id="photos">
                    <h3 id="photos-h3">
                        Photos
                    </h3>
                    <input id="photo-input" className="photo-input" type="file" onChange={handleFiles} required multiple accept=".jpg, .jpeg, .png"/>

                    {/* <label for="photo-input" className="photo-button">
                        Add New Photo
                    </label> */}

                    <h5 id="photo-note">
                        * Upload multiple photos by holding the 'command' key on Mac, or 'ctrl' key on Windows. 
                    </h5>
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

                <button type="submit" className="post-button">Post for sale by owner</button>
            </form>
        </div>
    )
}