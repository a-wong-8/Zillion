import BuyListing from './BuyListing'
import './BuyPage.css'

import banner from './banner2.png'

export default function BuyPage () {
    
    return (
        <>
        <div className='banner-container'>
                <img className='banner' src={banner} alt=""></img>
            <div className='search-bar-container'>
                <input type='text' className='search' placeholder='Enter an address, neighborhood, city, or ZIP code'/>
            </div>
        </div>
            <h1>Homes for you</h1>
            <BuyListing />
        </>
    )
};

// this makes a list of all the listings 
