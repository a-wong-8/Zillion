import { useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function BuyListingIndex({listing}) {

    return (
        <div className="display-container">

        <ul >
            <li>
            <Link to={`/listings/${listing.id}`}>

            <ul key={listing.id}>
                <li>
                    ${listing.price}
                </li>

                <li>
                    {listing.bed} bds | {listing.bath} ba | {listing.sqft} sqft | {listing.category}
                </li>

                <li>
                    {listing.streetAddress}
                </li>
                
                <li>
                    {listing.city}, {listing.state} {listing.zipCode}
                </li>
                <br></br>
            </ul>

            </Link>
            </li>
        </ul>

        </div>
    )    
}

// this makes one item of one property 