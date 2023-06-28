
@listings.each do |listing|
  userIds = Save.where(listing_id: listing.id).pluck(:user_id) # added 
    json.set! listing.id do
      json.extract! listing, :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
      json.saved  userIds.include?(current_user.id) ? true : false

      json.imageUrl listing.images.attached? ? listing.images.map { |image| image.url } : nil
    end
  end

  # @listing.images.map { |image| image.url }
  
  # json.array! @listings do |listing|
  #   json.partial! 'api/listings/listing', :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
  #   # json.imageUrl listing.images.attached? ? listing.images[0].url : nil
  # end
  
  # json.array! @listings do |listing|
  #   json.extract! listing,:id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
  #   json.imageUrl listing.images.attached? ? listing.images[0].url : nil
# end