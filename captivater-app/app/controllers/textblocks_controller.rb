require 'url_getter.rb'


class TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)
    @textblock.user_id = current_user.id
    if @textblock.save

      sentences = @textblock.body.split(".")

      sentences.each do |sentence|
        @textblock.sentences.create({ body: sentence })
      end

      @textblock.sentences.each do |sentence|
        filtered_words = UrlGetter.filter_words(sentence.body)
        UrlGetter.build_url(filtered_words, sentence)
      end

      redirect_to textblock_url(@textblock)
    else
      flash.now[:errors] = @textblock.errors.full_messages
      render :new
    end
  end

  def show
    @textblock = Textblock.find(params[:id])
  end

  private
  def textblock_params
    params.require(:textblock).permit(:body, :title, :sentences)
  end
end

#when we create a block, we create sentences from the body, for each sentence we create urls