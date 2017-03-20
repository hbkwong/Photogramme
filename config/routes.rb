Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :photos, only: [:create, :destroy, :show, :index]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end

  root "static_pages#root"
end
