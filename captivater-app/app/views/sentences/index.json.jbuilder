json.array!(@sentences) do |sentence|
  json.partial!("sentences/sentence", :sentence => sentence)
end