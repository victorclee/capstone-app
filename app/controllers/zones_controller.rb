class ZonesController < ApplicationController
  def new
    
  end
  def create
    @zone = Zone.new(
                    user_id: current_user.id,
                    min_lat: params[:min_lat],
                    max_lat: params[:max_lat],
                    min_long: params[:min_long],
                    max_long: params[:max_long]
                    )
    if @zone.save
      flash["success"] = "You've successfully saved a safety zone!"
      redirect_to "/locations"
    end
  end
end
