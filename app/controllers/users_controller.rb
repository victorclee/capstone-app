class UsersController < ApplicationController
  def new

  end
  def create
    user = User.new(
                    first_name: params[:first_name],
                    last_name: params[:last_name],
                    email: params[:email],
                    phone_number: params[:phone_number],
                    address_1: params[:address_1],
                    address_2: params[:address_2],
                    city: params[:city],
                    state: params[:state],
                    zip: params[:zip],
                    password: params[:password],
                    password_confirmation: params[:password_confirmation]
                    )
    if user.save
      session[:user_id] = user.id
      flash[:success] = "Successfully Created Account"
      redirect_to '/devices'
    # else

    end
  end
end
