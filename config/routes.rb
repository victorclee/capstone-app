Rails.application.routes.draw do
  #user routes
  get '/' => 'users#new'
  post '/users' => 'users#create'

  #device routes
  get '/devices' => 'devices#new'
  post '/devices' => 'devices#create'

  #zone routes
  get '/zones' => 'zones#new'
  post '/zones' => 'zones#create'

  #location routes
  get '/locations/:zone_id/new' => 'locations#new'
  post '/locations' => 'locations#create'
  get'/locations/:id' => 'locations#show'

  #session routes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
