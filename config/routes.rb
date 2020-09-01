Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :users, only: [:show, :update, :destroy]

  resources :trips, only: [:index, :show, :new, :create, :destroy, :update]

  get 'export', to: 'trips#export'

  get 'trips/:id/edit', to: 'trips#edit', as: 'edit_trip'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
