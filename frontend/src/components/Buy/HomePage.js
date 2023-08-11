import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import banner from './banner3.png';
import { fetchListings } from '../../store/listing';
import BuyListingIndex from './BuyListingIndex';
import Footer from '../Navigation/Footer';
import './BuyPage.css'
import skyline from './skyline.png';

export default function HomePage () {
    const listings = useSelector((state)=> Object.values(state.listings))
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch(); //
    
    // const slogan = ['This. The. House.', 'Find it. Buy it. Repeat it.', 'Home Is Where Your Story Begins.'];
    // let item = slogan[Math.floor(Math.random() * slogan.length)];

    useEffect(()=> {
        dispatch(fetchListings())
    },[dispatch])

    let dupList = [...listings];
    dupList = dupList.slice(0,10);
    
    let newListing;

    useEffect(()=> {
        newListing = listings.filter(listing => 
            (listing.streetAddress.toLowerCase().includes(query.toLowerCase())) || 
            listing.city.toLowerCase().includes(query.toLowerCase()) || 
            listing.zipCode.toString().includes(query));
        setSearchResults(newListing);
    },[query])

    const showDropdown = query.length > 0;

    return (
        <>
        <div className='banner-container'>
            <img className='banner' src={banner} alt=""></img>

            <div className='search-bar-container'>
                <div className="slogan">
                    {/* Find it. Buy it. Repeat. */}
                    Home is where your story begins.
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
        
        <h1 className="intro">Homes for you in the San Francisco Bay Area</h1>

        <div className='main'>
            <div className='home-page-listings'>
                {/* <BuyListing /> */}
                {dupList.map(listing => <BuyListingIndex listing={listing}/>)}

            </div>
        </div>

        <section className='skyline'>
            <img src={skyline}/>
        </section>
        <Footer/>
        </>
    )
};

// this makes a home page w list of all the listings  
