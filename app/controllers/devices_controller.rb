class DevicesController < ApplicationController
  def new
    
  end
  def create
    device = Device.new(
                        user_id: current_user.id,
                        serial_number: params[:serial_number]
                        )
    if device.save
      flash["success"] = "You've successfully saved a device to your account!"
      redirect_to "/locations"
    end
  end

end
