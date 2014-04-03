require 'json'
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

    all_words = []
    sentences_arr = string.downcase.split(/([.?!])/)
    sentences_arr.each { |sentence| all_words += sentence.split(" ") }
    all_words.map! { |word| word.gsub(/\W+/, '') }
    all_words.uniq.select { |word| exceptions.include?(word) == false }
  end

  def self.build_url(words, textblock)

    consumer = OAuth::Consumer.new(CONSUMER_KEY, CONSUMER_SECRET, :site => "http://thenounproject.com/")

    urls_arr = []

    words.each do |word|

      event_url = "http://api.thenounproject.com/icon/" + word 
      access_token = OAuth::AccessToken.new(consumer)
      response = access_token.get(event_url)

      #create a consumer, create an access token, get json using accesstoken
      
      next if response.class == Net::HTTPNotFound
      response_hash = JSON.parse(response.body)

      urls_arr.push({ url: response_hash["icon"]["preview_url"], word: word, textblock_id: textblock.id })
    end

    return urls_arr   
   
  end 

end




