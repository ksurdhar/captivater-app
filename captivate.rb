require 'oauth'
require 'debugger'

CONSUMER_KEY = "5147553f000649a2b75f5c56b13402cb"
CONSUMER_SECRET = "d21df2dc6e9b43118f09968f7219372c"

CONSUMER = OAuth::Consumer.new(CONSUMER_KEY, CONSUMER_SECRET, :site => "http://thenounproject.com/")
event_url = "http://api.thenounproject.com/icon/walk"

access_token = OAuth::AccessToken.new(CONSUMER)
response = access_token.get(event_url)
puts response.body

