require 'oauth'
require 'json'

CONSUMER_KEY = "5147553f000649a2b75f5c56b13402cb"
CONSUMER_SECRET = "d21df2dc6e9b43118f09968f7219372c"

CONSUMER = OAuth::Consumer.new(CONSUMER_KEY, CONSUMER_SECRET, :site => "http://thenounproject.com/")
event_url = "http://api.thenounproject.com/icon/aasda"

access_token = OAuth::AccessToken.new(CONSUMER)
response = access_token.get(event_url)

puts response.body
p response.body.split(" ").include?("<title>404")
# response_body = response.body

# response_arr = response_body.split(" ")
# url_pos = response_arr.index("\"preview_url\":") + 1
# p response_arr[url_pos]

# puts response.body

