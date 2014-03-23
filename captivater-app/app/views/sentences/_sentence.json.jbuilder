json.(sentence, :id, :body, :textblock_id, :created_at, :updated_at)

json.urls(sentence.urls) do |url|
  json.partial!("urls/url", :url => url)
end
