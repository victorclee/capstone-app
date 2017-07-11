class Api::V1::ZonesController < ApplicationController
  def update
    @zone = Zone.find(params[:id])
    @zone.assign_attributes(
                        min_lat: params["minLat"],
                        max_lat: params["maxLat"],
                        min_long: params["minLong"],
                        max_long: params["maxLong"]
                        )
    if @zone.save
      render json: {message: "Zone updated"}, status: 200
    else
      render json: {message: "Update error", errors: @zone.errors.full_messages }, status: 422
    end
  end
end
