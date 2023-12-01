import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import banner from './banner3.png';
import { fetchListings } from '../../store/listing';
import BuyListingIndex from './BuyListingIndex';
import Footer from '../Navigation/Footer';
import './BuyPage.css'
import skyline from './skyline.png';
import buy from './buy.jpg';
import sell from './sell.jpg';

export default function HomePage () {
    const listings = useSelector((state)=> Object.values(state.listings))
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch(); 
    const history = useHistory();

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
                    Home is where your story begins.
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

        <section className='gray'>
            <div id='sell-a-home-container' onClick={()=>history.push('/sell')}>
                <img src={sell}></img>
                <h1>Sell a home</h1>
                <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                <button >See your options</button>
            </div>
            <div id='buy-a-home-container' onClick={()=>history.push('/buy')}>
                <img src={buy}></img>
                <h1>Buy a home</h1>
                <p>No matter the type of home you are looking for, we can help you find it.</p>
                <button >Explore homes</button>
            </div>
        </section>

        <section className='skyline'>
            <img src={skyline}/>
        </section>
        <Footer/>
        </>
    )
};

// this makes a home page w list of all the listings  
