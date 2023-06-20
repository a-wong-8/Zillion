class Listing < ApplicationRecord
    validates :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :type, :description, :price, :year_built, presence: true
    validates :street_address, uniqueness: true 
    validates :state, :bed, :bath, length: {in: 1..2} 
    validates :year_built, length: {is: 4}
end
