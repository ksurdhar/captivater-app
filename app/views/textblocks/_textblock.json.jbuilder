json.(textblock, :id, :title, :body, :user_id, :created_at, :updated_at)

json.urls(textblock.urls) do |url|
  json.partial!("urls/url", :url => url)
end
