CaptivaterApp::Application.routes.draw do
  root to: "site#root"

  namespace :api, :defaults => { :format => :json } do
    resources :textblocks, only: [:new, :create, :show]
    resources :urls, only: [:create]
  end
  
end
