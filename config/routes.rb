Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  resources :listings, only: [:show]
  
  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:create, :update, :destroy, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: :create
    resources :saves, only: [:index, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"

end
