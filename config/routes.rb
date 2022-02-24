Rails.application.routes.draw do
  resources :users
  resources :products do
    resources :reviews
  end

  get '/users/:user_id/products', to: 'products#get_user_products'
  get '/reviews', to: 'reviews#get_all_reviews'

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
