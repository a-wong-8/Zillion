import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BuyListing from './BuyListing'
import banner from './banner2.png'
import './BuyPage.css'

export default function HomePage () {
    const listings = useSelector((state)=> Object.values(state.listings))
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    // const slogan = ['This. The. House.', 'Find it. Buy it. Repeat it.', 'Home Is Where Your Story Begins.'];
    // let item = slogan[Math.floor(Math.random() * slogan.length)];
    
    let newListing;

    useEffect(()=> {
        newListing = listings.filter(listing => 
            (listing.streetAddress.toLowerCase().includes(query.toLowerCase())) || 
            listing.city.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(newListing);
    },[query])

    const showDropdown = query.length > 0;

    return (
        <>
        <div className='banner-container'>
            <img className='banner' src={banner} alt=""></img>

            <div className='search-bar-container'>
                <div className="slogan">
                    Find it. Buy it. Repeat.
                     {/* { item } */}
                </div>

                <input type='text' className='search' placeholder='Enter an address, city, or ZIP code                                                                          🔎' onChange={e => setQuery(e.target.value)}/>

                { showDropdown && (
                    <div className='search-results'>
                        {searchResults.map(listing => (
                            <ul key={listing.streetAddress}>
                                <li key={listing.id}>  
                                    <Link to={`/listings/${listing.id}`}>
                                    {listing.streetAddress}, {listing.city} {listing.zipCode} 
                                    </Link>
                                </li>
                            </ul>
                            ))}
                    </div>
                )}

            </div>
        </div>
        
        <h1 className="intro">Homes for you</h1>
        <BuyListing />
        </>
    )
};

// this makes a home page w list of all the listings  
