@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :price
    end
  end
  