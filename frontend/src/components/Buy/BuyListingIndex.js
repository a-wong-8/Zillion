
export default function BuyListingIndex({listing}) {

    return (

        <ul key={listing.id}>
            <li>
                ${listing.price}
            </li>

            <li>
                {listing.bed} bds | {listing.bath} ba | {listing.sqft} sqft | {listing.category}
            </li>
            <li>
                {listing.streetAddress}, {listing.city}, {listing.state} {listing.zipCode}
            </li>
            <br></br>
        </ul>

    )    
}

// this makes one item of one property 