require 'url_getter.rb'

class Api::TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)
    @textblock.user_id = current_user.id

    if @textblock.save

      ActiveRecord::Base.transaction do

        sentence_arr = []
        
        @textblock.body.split(".").each do |sentence|
          sentence_arr.push({ body: sentence, textblock_id: @textblock.id })
        end

        Sentence.create_many(sentence_arr)

        urls_arr = []

        @textblock.sentences.each do |sentence|
          filtered_words = UrlGetter.filter_words(sentence.body)
          urls_arr += UrlGetter.build_url(filtered_words, sentence)
        end

        Url.create_many(urls_arr)
        
      end

      render "textblocks/show"
    else
      flash.now[:errors] = @textblock.errors.full_messages
      render :new
    end
  end

  def show
    @textblock = Textblock.find(params[:id])
    render "textblocks/show"
  end

  private
  def textblock_params
    params.require(:textblock).permit(:body, :title, :sentences)
  end
end

