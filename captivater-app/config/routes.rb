CaptivaterApp::Application.routes.draw do
  root to: "site#root"
  devise_for :users

  namespace :api, :defaults => { :format => :json } do
    resources :users, only: [:show]
    resources :textblocks, only: [:new, :create, :show, :index]
    resources :urls, only: [:create]
  end
  
end
