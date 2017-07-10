class Api::V1::ZonesController < ApplicationController
  def update
    @zone = Zone.find(params[:id])
    @zone.assign_attributes(
                        min_lat: params[:min_lat],
                        max_lat: params[:max_lat],
                        min_long: params[:min_long],
                        max_long: params[:max_long]
                        )
    if @zone.save
      render json: {message: "Zone updated"}, status: 200
    else
      render json: {message: "Update error", errors: @zone.errors.full_messages }, status: 422
    end
  end
end
