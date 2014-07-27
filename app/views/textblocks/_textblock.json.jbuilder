json.(textblock, :id, :title, :body, :created_at, :updated_at)

json.urls(textblock.urls) do |url|
  json.partial!("urls/url", :url => url)
end
