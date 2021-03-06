class SessionsController < ApplicationController
  def new
    
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = "Successfully logged in"
      if current_user.id
        redirect_to "/zones/1"
      else
        render "/devices"
      end
    else
      flash[:warning] = "Invalid email or password"
      redirect_to "/login"
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Successfully logged out"
    redirect_to '/'
  end

end
