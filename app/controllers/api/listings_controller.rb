class Api::ListingsController < ApplicationController

  wrap_parameters include: Listing.attribute_names + ['streetAddress', 'zipCode', 'lotSize', 'yearBuilt', :images]

    def index 
        # @listings = Listing.all
        @listings = Listing.all.sort { |a,b| b.created_at <=> a.created_at }
        # @listing = @listings[0]
        render :index
    end
    
    def show
        # @listing = Listing.find_by(id: params[:id])
        @listing = Listing.find(params[:id])
    end
    
    def create 
        # @user_id = current_user.id // wrong way 
        @listing = Listing.new(listing_params)
        @listing.user_id = current_user.id
        # debugger
        
        if @listing.save
            render :show
            # render partial: "api/listings/listing", locals: { listing: @listing }
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])

        if @listing.update(listing_params)
          render :show
        else
          render json: @listing.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @listing = Listing.find_by(id: params[:id])
        @listing.destroy
        head :no_content
    end

    private

    def listing_params
        params.require(:listing).permit(:street_address, :city, :state, :zip_code, :bed, :bath, :sqft, :lot_size, :category, :description, :price, :year_built, :images)
    end
end
