@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
      json.imageUrl listing.images.attached? ? listing.images[0].url : nil
    end
  end

  # :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :price, :user_id
  
  # json.array! @listings do |listing|
  #   json.partial! 'api/listings/listing', :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
  #   # json.imageUrl listing.images.attached? ? listing.images[0].url : nil
  # end
  
  # json.array! @listings do |listing|
  #   json.extract! listing,:id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id
  #   json.imageUrl listing.images.attached? ? listing.images[0].url : nil
# end