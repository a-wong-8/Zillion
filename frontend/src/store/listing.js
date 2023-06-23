import csrfFetch from "./csrf";

// actions
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const REMOVE_LISTING = 'listings/REMOVE_LISTING';

const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
})


// functions
export const fetchListings = () => async(dispatch) => {
    const response = await fetch(`/api/listings`);

    if (response.ok) {
        const listing = await response.json();
        dispatch(receiveListings(listing))
    }
}

export const fetchListing = (listingId) => async(dispatch) => {
    const response = await fetch(`/api/listings/${listingId}`);

    if (response.ok) {
        const listing = await response.json();
        dispatch(receiveListing(listing))
    }
}

export const createListing = (FormData) => async(dispatch) => {
    const response = await csrfFetch(`/api/listings`, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(listing)
        body: FormData
    });

    if (response.ok) {
        const listing = await response.json();
        dispatch(receiveListing(listing))
    }
}

export const updateListing = (listing) => async(dispatch) => {
    const response = await csrfFetch(`/api/listings/${listing.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const listing = await response.json();
        dispatch(receiveListing(listing))
    }
}

export const deleteListing = (listingId) => async(dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeListing(listingId))
    }
}

// reducer 
export default function listingsReducer(state={}, action) {
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            return {...state, [action.listing.id]:action.listing}
        case REMOVE_LISTING:
            const newState = {...state}    
            delete newState[action.listingId]
            return newState;
        default:
            return state;
    }
}