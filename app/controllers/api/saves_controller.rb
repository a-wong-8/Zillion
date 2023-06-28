class Api::SavesController < ApplicationController

    wrap_parameters include: Save.attribute_names + ['listingId', 'userId']

    def index
        @listings = current_user.saved_listings
        render "api/listings/index"
        # @saves = Save.all
        # render :index
    end

    def create
        @save = Save.new(save_params)
        
        if @save && @save.save
            render :show
        else
            render json: @save.errors.full_messages, status: 422
        end

    end

    def destroy
        listingId = params[:listing_id]
        userId = params[:user_id]

        @save = Save.find_by(listing_id: listingId, user_id: userId)
        @save.destroy
        head :no_content
    end

    def save_params
        params.require(:save).permit(:listing_id, :user_id)
    end

end
