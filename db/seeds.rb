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
  
    Listing.destroy_all
    
    puts 'Creating listings...'

    a = Listing.create!(
      street_address: '15525 Maubert Ave',
      city: 'San Leandro',
      state: 'CA',
      zip_code: 94578,
      bed: 3,
      bath: 1,
      sqft: 884,
      lot_size: 5227,
      category: 'Single family',
      description: 'Welcome To This Charming Single-Family Residence with Brick Walkway and Planter Box! Bright Living Room Boasts Natural Lighting and Decorative Gas Fireplace Insert. The Kitchen/Dinning Features Built-In Decorative Cabinets Including Ironing Board, Gas Stove, Refrigerator and Granite Countertops/Backsplash. This Delightful Home Offers a Third Bedroom or Family Room Option, Providing You with the Flexibility to Create the Space That Suits Your Needs. Laundry Room with Cabinets, Utility Sink, Washer and Dryer.  Imagine Entertaining Your Family and Friends on the Beautiful Deck, Overlooking the Spacious Backyard. Additional Features: Freshly Painted Interiors, New Carpet, Dual-Pane Windows and Newer Water Heater. Conveniently Located Near San Leandro Schools, Hiking/Biking Trails near Lake Chabot, Oakland Zoo and Bayfair Mall. Commuters Delight: Minutes to HWY 580, 238, 880 and BART Stations. Come Make this Home Yours!',
      price: 675000,
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
      
      puts "Attaching images..."

      alpha = ('a'..'z').to_a
      
        Listing.first(5).each_with_index do |listing, index1|
          5.times do |index2|
            listing.images.attach(
              io: URI.open("https://zillion-seeds.s3.us-west-1.amazonaws.com/#{alpha[index1]}#{index2 + 1}.png"), 
              filename: "#{alpha[index1]}#{index2 + 1}.png"
              )
          end
        end

        # a.images.attach(
        #   io: URI.open("https://zillion-seeds.s3.us-west-1.amazonaws.com/a.jpg"), 
        #   filename: "a.jpg"
        #   )
        # b.images.attach(
        #   io: URI.open("https://zillion-seeds.s3.us-west-1.amazonaws.com/b.jpg"), 
        #   filename: "b.jpg"
        #   )
        # c.images.attach(
        #   io: URI.open("https://zillion-seeds.s3.us-west-1.amazonaws.com/c.jpg"), 
        #   filename: "c.jpg"
        #   )

puts "Done! =)"