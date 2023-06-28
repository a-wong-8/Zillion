import csrfFetch from "./csrf";

// actions
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const REMOVE_LISTING = 'listings/REMOVE_LISTING';

export const SAVE_LISTING = 'saves/SAVE_LISTING';
export const UNSAVE_LISTING = 'saves/UNSAVE_LISTING';
export const RECEIVE_SAVES = 'saves/RECEIVE_SAVES';


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

// for saves ----------------------------------------------------
const receiveSaveListing = (listingId, userId) => ({
    type: SAVE_LISTING,
    listingId,
    userId
})

const removeSaveListing = (listingId, userId) => ({
    type: UNSAVE_LISTING,
    listingId,
    userId
})

const receiveSaves = (saves) => ({
    type: RECEIVE_SAVES,
    saves
})

// functions ----------------------------------------------------
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
        body: FormData
    });

    if (response.ok) {
        const listing = await response.json();
        dispatch(receiveListing(listing))
    } else {
        let error = await response.text()
        throw new Error(JSON.parse(error))
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

// for saves --------------------------------------------------------------
export const fetchSaves = () => async (dispatch) => {
    const response = await fetch('/api/saves');

    if (response.ok) {
      const saves = await response.json();
      dispatch(receiveListings(saves));
    }
};

export const saveListing = (listingId, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/saves`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            save: {
                listing_id: listingId,
                user_id: userId,
            },
        }),
    });

    if (response.ok) {
        const save = await response.json();
        dispatch(receiveSaveListing(save))
    }
}

export const unsaveListing = (listingId, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/saves/62`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            save: {
                listing_id: listingId,
                user_id: userId
            }
        })
    });

    if (response.ok) {
        const listing = await response.json();
        dispatch(removeSaveListing(listing))
    }
}

// reducer ------------------------------------------------------------
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
        case RECEIVE_SAVES:
            return action.saves;
        case SAVE_LISTING:
            const { listingId, userId } = action; 
            return {...state, [listingId]: {...state[listingId], saved: true, listing_id: listingId, user_id: userId}};
        case UNSAVE_LISTING:
            return {...state, [action.listingId]: {...state[action.listingId], saved: false}};
        default:
            return state;
    }
}