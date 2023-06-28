json.extract! @listing, :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
json.imageUrl @listing.images.attached? ? @listing.images.map {|image| image.url} : nil

userIds = Save.where(listing_id: @listing.id).pluck(:user_id) # added 
json.saved  userIds.include?(current_user.id) ? true : false

# @listing.images.map { |image| image.url }