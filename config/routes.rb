Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :photos, only: [:create, :destroy, :show, :index]
  end

  root "static_pages#root"
end
