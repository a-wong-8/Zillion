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
    
    puts 'Creating seed data...'
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
      description: 'Welcome to this charming single-family residence.',
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
      description: 'Washington Manor home with convenient access.',
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
      description: 'Amazing fixer OPPORTUNITY!!!',
      price: 385000,
      year_built: 1960,
      user_id: 2
      )
      
      puts "Attaching images..."

      alpha = ('a'..'z').to_a
      
        Listing.first(3).each_with_index do |listing, index1|
          3.times do |index2|
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

puts "Done!"