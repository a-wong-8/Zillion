@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :price, :user_id
    end
  end
  
  # :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :user_id


  