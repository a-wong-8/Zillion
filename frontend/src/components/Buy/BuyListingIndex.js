import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function BuyListingIndex({listing}) {

    const priceFormatter = (price) => {
        price = price.toString();
        let newPrice = '';

        for (let i = 0; i < price.length; i++) {
            newPrice += price[i];
            
            if ((price.length - i - 1) % 3 === 0 && i !== price.length - 1) {
              newPrice += ',';
            }
          }
        return newPrice;
    }

    const categoryFormatter = (category) => {
        switch (category) {
            case 'category1':
                return 'Single family'
            case 'category2':
                return 'Condo'
            case 'category3':
                return 'Townhouse'
            case 'category4':
                return 'Multi family'
            case 'category5':
                return 'Apartment'
            case 'category6':
                return 'Mobile'
            case 'category7':
                return 'Coop unit'
            case 'category8':
                return 'Vacant land'
            case 'category9':
                return 'Other'
        }
    }

    return (
<>
        <div className="display-container">

            <Link to={`/listings/${listing.id}`}>

            <div className="display-item">

            <ul id="list-container">

                <li>
                    <div>
                    {listing.imageUrl && listing.imageUrl.length > 0 && (
                        <img src={listing.imageUrl[0]} className="first-img" alt="First Image" />
                        )}
                    </div>
                </li>

                <li id="price">
                    ${priceFormatter(listing.price)}
                </li>

                <li id="bed-bath"> 
                    {listing.bed} beds | {listing.bath} bath | {listing.sqft} sqft
                </li>

                <li id="category">
                    {categoryFormatter(listing.category)}
                </li>

                <li id="street">
                    {listing.streetAddress}  
                </li>

                <li id="city">
                    {listing.city}, {listing.state} {listing.zipCode}
                </li>
                
                <br></br>

            </ul>
            
            </div>

            </Link>
            </div>
</>
     
    )    
}

// this makes one item of one property 