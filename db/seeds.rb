# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    Save.destroy_all
    Listing.destroy_all
    
    puts 'Creating listings...'

    a = Listing.create!(
      street_address: '221 Del Rosa Way',
      city: 'San Mateo',
      state: 'CA',
      zip_code: 94403,
      bed: 3,
      bath: 1,
      sqft: 884,
      lot_size: 5227,
      category: 'Single family',
      description: 'Welcome To This Charming Single-Family Residence with Brick Walkway and Planter Box! Bright Living Room Boasts Natural Lighting and Decorative Gas Fireplace Insert. The Kitchen/Dinning Features Built-In Decorative Cabinets Including Ironing Board, Gas Stove, Refrigerator and Granite Countertops/Backsplash. This Delightful Home Offers a Third Bedroom or Family Room Option, Providing You with the Flexibility to Create the Space That Suits Your Needs. Laundry Room with Cabinets, Utility Sink, Washer and Dryer.  Imagine Entertaining Your Family and Friends on the Beautiful Deck, Overlooking the Spacious Backyard. Additional Features: Freshly Painted Interiors, New Carpet, Dual-Pane Windows and Newer Water Heater. Conveniently Located Near San Leandro Schools, Hiking/Biking Trails near Lake Chabot, Oakland Zoo and Bayfair Mall. Commuters Delight: Minutes to HWY 580, 238, 880 and BART Stations. Come Make this Home Yours!',
      price: 975000,
      year_built: 1948,
      user_id: 1
      )

    b = Listing.create!(
      street_address: '981 Purdue St',
      city: 'San Leandro',
      state: 'CA',
      zip_code: 94579,
      bed: 3,
      bath: 1,
      sqft: 1081,
      lot_size: 5227,
      category: 'Single family',
      description: 'Washington Manor Home with Convenient Access to Washington Manor Park & San Leandro Family Aquatic Center... Living Room with Wood Burning Fireplace and Built-in Book Shelves... Kitchen with Ample Cabinets + New Smooth-top Range/Convection Oven & Air Fryer... Dining Area with Ceiling Fan... Bath with Shower-over-tub with Tile Surround & Sliding Glass Doors...Newer Interior Paint...Dual Pane Windows... Updated Electrical with Outdoor Plugs... New Roof... Private Court Yard Fully Fenced & Patio... Backyard with Storage Shed... Front Automatic Sprinklers... Easy Access to Freeways, Shopping, Kaiser Permanente Hospital & Medical Center, Parks, Post Office, Library, Restaurants, Public Transportation, B.A.R.T., San Leandro Marina & Golf Course & More.',
      price: 772800,
      year_built: 1951,
      user_id: 1
      )

    c = Listing.create!(
      street_address: '3300 Glenly Rd',
      city: 'Oakland',
      state: 'CA',
      zip_code: 94605,
      bed: 3,
      bath: 2,
      sqft: 1528,
      lot_size: 10454,
      category: 'Single family',
      description: 'No Open Houses. Agents, easy to show, no appointment needed. Amazing fixer OPPORTUNITY!!! Contractor’s or investor\'s special. Come and restore this sweet 1960\'s level-in home with spacious backyard on a generously-sized corner lot along with two car garage. Nearby are the wonderful trails of both King Estates and Leona Canyon Open Space Parks, and well as the fantastic Oakland Zoo. Needing major work throughout, the home will not qualify for a standard loan. The property holds incredible potential!   **PLEASE NOTE, listing agent does not not represent buyers.**',
      price: 385000,
      year_built: 1960,
      user_id: 2
      )
    
    d = Listing.create!(
      street_address: '1003 Foster St',
      city: 'Alameda',
      state: 'CA',
      zip_code: 94502,
      bed: 2,
      bath: 2,
      sqft: 1035,
      lot_size: 2518,
      category: 'Single family',
      description: 'Welcome to this beautifully updated single-level home in Alameda which offers 1,035 sqft of living space, 2 bedrooms, 2 bathrooms, an open living room, updated kitchen with stainless steel appliances, in-unit laundry, and an attached 2-car garage. The private backyard is perfect for outdoor entertaining. The low HOA fee of $250/mo. makes it an attractive option. The home is located in a well-maintained community and within walking distance to top-rated schools, shopping, dining, and entertainment options. Alameda Beach, with its stunning views and outdoor recreational activities, is just a short distance away. Close to the Ferry Terminal and easy access to the freeways!  Don\'t miss the chance to experience the unique lifestyle that Alameda has to offer!',
      price: 998000,
      year_built: 1989,
      user_id: 2
    )

    e = Listing.create!(
      street_address: '19661 Betrose Ct',
      city: 'Castro Valley',
      state: 'CA',
      zip_code: 94546,
      bed: 3,
      bath: 3,
      sqft: 1558,
      lot_size: 5227,
      category: 'Single family',
      description: 'Welcome to this wonderful tri-level home located on a peaceful cul-de-sac within the esteemed Castro Valley School District. This property offers a spacious layout with three bedrooms and two and a half bathrooms. As you enter, you\'ll be captivated by the vaulted ceilings in the living room, creating an open and airy ambiance. Step onto the luxury vinyl tile flooring that adds a touch of elegance and modernity to the space. The home has been thoughtfully refreshed with several rooms recently painted and offering a move-in ready experience. Storage will never be an issue with numerous closets, an attached garage and two additional storage sheds in the low maintenance, tiered backyard. The backyard itself offers a tranquil retreat, perfect for relaxation and entertaining. The property is also sewer lateral compliant, has air conditioning and the dual pane windows throughout to offer energy efficiency. With its convenient location close to Downtown Castro Valley, you\'ll have easy access to a variety of shops, dining, and entertainment options. Don\'t miss this exceptional opportunity to own a home in such a sought-after location, with its ample storage, and proximity to top-rated schools and vibrant amenities.',
      price: 1100000,
      year_built: 1954,
      user_id: 3
    )

    f = Listing.create!(
      street_address: '465 30th St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: 94131,
      bed: 3,
      bath: 2,
      sqft: 1426,
      lot_size: 2395,
      category: 'Single family',
      description: 'This charming, updated home in the close-knit neighborhood community of Upper Noe Valley is move-in ready and yet has the potential to be significantly expanded to evolve with new life chapters. Completely detached and flooded with light, the home features an oversized living and dining room that frame downtown San Francisco and Bay Bridge views. A true 3 bedroom with an open living/dining room, the home comes with a separate family room that walks out directly to the rear garden creating a comfortable separation between the quiet and active parts of the home. A large eat-in kitchen comes with Corian countertops, new appliances and is flooded with morning light. Directly off the kitchen, a mudroom with laundry hookups make this part of the home very functional and supportive of a busy lifestyle. The home is complete with 2 large finished basement rooms that can flex in multiple ways (gym, workshop, office, storage). Hardwood floors, built-in shelving, and period tile accentuate the character of the home. Close to the Upper Noe Rec center and the Muni J line, coffee, restaurants and shops this is a dream location.',
      price: 1495000,
      year_built: 1910,
      user_id: 1
    )    

    g = Listing.create!(
      street_address: '112 Donald Dr',
      city: 'Moraga',
      state: 'CA',
      zip_code: 94556,
      bed: 5,
      bath: 3,
      sqft: 1921,
      lot_size: 10118,
      category: 'Single family',
      description: 'This gorgeous home shines brightly with designer updates at every turn! This property features 5 bedrooms, 2.5 bathrooms with 1921 sqft of living space on a spacious 10,120 sqft lot. The kitchen and bathrooms are remarkable! The gorgeous kitchen comes with SS appliances, Quartz Calacatta Nouveau countertops and Mattone Calacatta Backsplash. A Luxurious master suite with a walk-in closet and a truly master bath featuring a dual sink vanity, alluring fixtures, a stall shower with 24x48 Italian Porcelain that sparkles. New modern lighting including LED recessed lights throughout, an updated furnace and a new A/C to warm up or cool down with efficiency. An entertainer\'s backyard perfect for family gatherings, parties or BBQs. The one is not to be missed!',
      price: 1549000,
      year_built: 1958,
      user_id: 1
    )  

    h = Listing.create!(
      street_address: '1711 Ward St',
      city: 'Berkeley',
      state: 'CA',
      zip_code: 94703,
      bed: 3,
      bath: 2,
      sqft: 1434,
      lot_size: 6075,
      category: 'Single family',
      description: 'Extensively remodeled home meets the needs of a modern East Bay lifestyle. With an eye to preserving architectural integrity, owners created a beautiful 2-level space with 3BR 2BA. Custom upgrades feature new interior and exterior paint, new laminate flooring, a completely new kitchen, new bathrooms, new backyard, new doors and much more. Home boasts a large light-filled living room with fireplace and a formal dining room. Three ample bright bedrooms with natural light and ventilation. Spacious Backyard with inviting paved patio area for al fresco dining.Spacious backyard is also ideal for "building an ADU ". Detached garage at the end of a long newly paved driveway with ample tandem parking. Great central Berkeley location with many nearby attractions: short distance to Ashby BART station or Downtown, UC Berkeley, Berkeley Library with Tool Lending Library, Berkeley Bowl Marketplace, San Pablo Park, Grove Parks with tennis & basketball courts, sports, recreation and picnicking.',
      price: 998888,
      year_built: 1908,
      user_id: 1
    )  

    i = Listing.create!(
      street_address: '3484 Pinewood Dr',
      city: 'Hayward',
      state: 'CA',
      zip_code: 94542,
      bed: 5,
      bath: 3,
      sqft: 2678,
      lot_size: 13068,
      category: 'Single family',
      description: 'This stunning property has recently undergone a complete renovation, boasting modern finishes throughout. Step inside through the inviting double doors and discover a main level that exudes elegance. The formal living room is enhanced by an electric fireplace. Ample natural lighting floods the space. The open kitchen is a chef\'s dream, featuring a large center island, You\'ll find a 6-burner gas stove and a convenient beverage fridge, adding a touch of luxury to this culinary haven. The main level of this home comprises two spacious bedrooms and a stylishly appointed bath. The primary suite is a true retreat, offering access to the new deck and showcasing a generously sized walk-in closet. The modern bath is a sanctuary, complete with a standalone bathtub, a rain shower, an LED mirror, and a double sink. The lower level presents an opportunity for a separate in-law suite. This area boasts a spacious family room, a large counter space with a beverage fridge, while the dining area is perfect for enjoying meals together. There are two beds and a full bath on this level, providing ample space and privacy for extended family or guests. The recently plastered pool is the perfect addition for those warm summer days, and it comes with all-new pool equipment.',
      price: 1330000,
      year_built: 1972,
      user_id: 1
    )  

    j = Listing.create!(
      street_address: '34233 Myrtle Ln',
      city: 'Union City',
      state: 'CA',
      zip_code: 94587,
      bed: 4,
      bath: 3,
      sqft: 2114,
      lot_size: 5134,
      category: 'Single family',
      description: 'Welcome to this exquisite home featuring 4 bedrooms and 3 bathrooms spread across a generous 2,114 square feet.The main floor showcases a full bedroom & bathroom,providing convenience & versatility for residents or guests seeking single-level living.The centerpiece of the home is the expansive open kitchen,complete with sleek granite countertops that exude luxury.The double oven enhances culinary possibilities, while the large eat-in area creates a welcoming space for casual dining or entertaining friends and family.Upstairs, you\'ll discover the lavish master bedroom suite,The luxurious master bathroom features a garden tub for ultimate relaxation,spacious stall shower, & double sinks.Convenience is further emphasized by the inclusion of an upstairs laundry area.The remaining bedrooms on the upper level are generously sized, providing room for personalization & comfortable living.',
      price: 1499888,
      year_built: 1999,
      user_id: 1
    )  

    k = Listing.create!(
      street_address: '1624 Farringdon Ct',
      city: 'San Jose',
      state: 'CA',
      zip_code: 95127,
      bed: 4,
      bath: 2,
      sqft: 1398,
      lot_size: 6911,
      category: 'Single family',
      description: 'A must-see! Qualify for Citi home run 10% down no MI loan. Great Move in ready 4bed 2bath single home located in a better neighborhood of east san jose! Sunny & bright. 6911sf lot. Fully updated and like new. Modern kitchen, white cabinets (not painted), big island, and lots of counter space. Open floor plan, kitchen overlooking the living.Brand new stainless refrigerator, stove, hood & dishwasher. Cozy Electric fireplace with remote control. Good bedroom size, with an extra large room in the back with a permit (4th bed) able to direct access to the backyard & potential to be an in-law unit or  ADU. Updated baths, new vanity, luxury large rain shower with 2nd handset. Central HVAC. Level-5 new wall texture. Fresh paint in & out. Beautiful front yard with wider driveway for more cars. Great cul-de-sac location with no through traffic.Peaceful neighbors. Near schools, restaurants, shopping centers, and parks. Easy commute to Capitol Expy, 680/280/101/87. Don\'t miss this!',
      price: 1199000,
      year_built: 1971,
      user_id: 1
    )  

      puts "Attaching images..."

      alpha = ('a'..'z').to_a
      
        Listing.first(11).each_with_index do |listing, index1|
          5.times do |index2|
            listing.images.attach(
              io: URI.open("https://zillion-seeds.s3.us-west-1.amazonaws.com/#{alpha[index1]}#{index2 + 1}.png"), 
              filename: "#{alpha[index1]}#{index2 + 1}.png"
              )
          end
        end

puts "Done! =)"