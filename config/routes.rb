Rails.application.routes.draw do
  # User routes
  get '/signup' => 'users#new'
  post '/users' => 'users#create'



end
