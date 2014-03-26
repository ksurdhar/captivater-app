json.array!(@textblocks) do |textblock|
  json.partial!("textblocks/textblock", :textblock=> textblock)
end