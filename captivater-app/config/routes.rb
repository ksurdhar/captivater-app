CaptivaterApp::Application.routes.draw do
  root to: "textblocks#new"
  devise_for :users

  resources :users, only: [:show]
  resources :textblocks, only: [:new, :create, :show]
  
end
