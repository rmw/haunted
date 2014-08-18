Rails.application.routes.draw do

  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup

  root 'home#index'
  post '/', to: 'rooms#generate'
  get '/rooms', to: 'rooms#generate'
  get '/:room_session', to: 'rooms#show'
  get '/rooms/one_wall', to: 'rooms#one_wall'
end
