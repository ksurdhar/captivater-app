json.(textblock, :id, :title, :body, :user_id, :created_at, :updated_at)


json.sentences(textblock.sentences.eager_load(:urls)) do |sentence|
  json.partial!("sentences/sentence", :sentence => sentence)
end