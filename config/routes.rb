Rails.application.routes.draw do
  #user routes
  get '/' => 'users#new'
  post '/users' => 'users#create'

  #device routes
  get '/devices' => 'devices#new'
  post '/devices' => 'devices#create'

  #location routes
  get '/locations' => 'locations#new'
  post '/locations' => 'locations#create'
  # get'/locations/:id' => 'locations#show'

  #zone routes
  get '/zones' => 'zones#new'
  post '/zones' => 'zones#create'
  get '/zones/:id' => 'zones#show'

  #session routes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
