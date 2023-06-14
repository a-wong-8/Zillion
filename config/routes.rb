Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'

  # namespace :api, defaults: {format: :json} do 
  # end
  
  namespace :api, defaults: { format: :json } do
    resources :test
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end
end
