![Alt Text](readme/readmelogo.png)
Zillion is a clone of Zillow, a real estate website.

## Technologies
This project was made using:
Frontend: React, Redux, JavaScript, CSS, and Google Maps JavaScript API
Backend: PostgreSQL, Rails, Ruby, and AWS
Features
### User Authentication
Zillion uses a combination of frontend and server-side validations to provide the user with a smooth and secure experience.
![Alt Text](readme/signin.gif)
```
    const special = /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const uppers = /[A-Z]/g;
    const lowers = /[a-z]/g;
    const numbers = /[0-9]/g;

    useEffect(()=> {
      passwordChecker()
      setErrors([])
    },[password, characters])

    const passwordChecker = () => {
      if (password.length >= 6) setCharacters(true);
      else setCharacters(false);

      if (password.match(uppers)) setUpper(true);
      else setUpper(false);

      if (password.match(lowers)) setLower(true);
      else setLower(false);

      if (password.match(numbers)) setNumber(true);
      else setNumber(false);

      if (password.match(special)) setSpecialChar(true);
      else setSpecialChar(false);        
    }
```

### Create, Update, and Delete Listings
Logged in users can create, read, update, or delete listings. 
![Alt Text](readme/sell.png)

### Listing Map
Listings can be easily located on the embedded Google map on the "Buy" page with markers of the price. When the listing map component is mounted, click listeners are applied to all of the listing markers that links to the listing when clicked.
![Alt Text](readme/map.png)

### Listing Search
Users can search listings by address, city, or zip code, from the search bar of the home page. The search results appears in a drop down menu that allows the user to select the link to the listing.
![Alt Text](readme/search.png)