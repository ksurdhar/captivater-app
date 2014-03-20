class UrlGetter 

  CONSUMER_KEY = ENV["NOUN_PROJ_KEY"]
  CONSUMER_SECRET = ENV["NOUN_PROJ_SECRET"]

  def self.filter_words(words)

  end

  def self.build_url(word)

    consumer = OAuth::Consumer.new(CONSUMER_KEY, CONSUMER_SECRET, :site => "http://thenounproject.com/")
    event_url = "http://api.thenounproject.com/icon/" + word 

    # early return if the noun doesn't match
    if(!event_url)
      return nil
    end

    access_token = OAuth::AccessToken.new(consumer)
    response = access_token.get(event_url)

    response_body = response.body

    response_arr = response_body.split(" ")
    url_pos = response_arr.index("\"preview_url\":") + 1

    response_arr[url_pos]

    Url.create({url: response_arr[url_pos]})
   
  end 

end




