Rails.application.routes.draw do
  #user routes
  get '/home' => 'users#new'
  post '/users' => 'users#create'

  #session routes
  # get '/login'

  #device routes
  get '/devices' => 'devices#new'
  post '/devices' => 'devices#create'

  #zone routes
  get '/zones' => 'zones#new'
  post '/zones' => 'zones#create'

  #location routes
  get '/locations' => 'locations#new'
  post '/locations' => 'locations#create'
end
