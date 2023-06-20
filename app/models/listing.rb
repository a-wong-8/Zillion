# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  zip_code       :integer          not null
#  bed            :integer          not null
#  bath           :integer          not null
#  sqft           :integer          not null
#  lot_size       :integer          not null
#  type           :string           not null
#  description    :text             not null
#  price          :integer          not null
#  year_built     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Listing < ApplicationRecord
    validates :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, presence: true
    validates :street_address, uniqueness: true 
    validates :state, :bed, :bath, length: {in: 1..2} 
    validates :year_built, length: {is: 4}

    enum category: {
        category1: 'Single family',
        category2: 'Condo',
        category3: 'Townhouse',
        category4: 'Multi family',
        category5: 'Apartment',
        category6: 'Mobile',
        category7: 'Coop unit',
        category8: 'Vacant land',
        category9: 'Other'
      }
end
