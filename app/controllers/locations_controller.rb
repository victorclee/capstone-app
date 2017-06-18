class LocationsController < ApplicationController
  def new
    @zone_id = params[:zone_id]
  end
  def create
    @location = Location.new(
                            device_id: current_user.devices.first.id, 
                            lat: params[:lat],
                            long: params[:long]
                            )
    if @location.save
      flash["success"] = "You've successfully set a location!"
      redirect_to "/locations/#{@location.id}"
    end
  end

  def show
    @location = Location.find(params[:id])
  end


end
