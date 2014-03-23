require 'JSON'
class UrlGetter 

  CONSUMER_KEY = ENV["NOUN_PROJ_KEY"]
  CONSUMER_SECRET = ENV["NOUN_PROJ_SECRET"]

  def self.filter_words(string)

    exceptions = %w{ aboard about above across after against along amid among anti around as
        at before behind below beneath beside besides between beyond but by concerning
        considering despite down during except excepting excluding following for from in
        inside into like minus near of off on onto opposite outside over past per plus regarding
        round save since than through to toward towards under underneath unlike until up upon
        versus via with within without the to then when a distrust and there was} 

    filtered_words = string.downcase.split(" ").select { |word| exceptions.include?(word) == false }

  end

  def self.build_url(words, sentence)

    consumer = OAuth::Consumer.new(CONSUMER_KEY, CONSUMER_SECRET, :site => "http://thenounproject.com/")

    urls_arr = []

    words.each do |word|

      event_url = "http://api.thenounproject.com/icon/" + word 
      access_token = OAuth::AccessToken.new(consumer)
      response = access_token.get(event_url)
      
      next if response.class == Net::HTTPNotFound

      response_hash = JSON.parse(response.body)

      urls_arr.push({ url: response_hash["icon"]["preview_url"], word: word, sentence_id: sentence.id })
    end

    return urls_arr.uniq    
   
  end 

end




