require 'url_getter.rb'


class TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)
    @textblock.user_id = current_user.id

    if @textblock.save

      #split the body, filter / omit, return array
      #for each in the array, build a url, if there is something to return

      #build url helper method should do the actual building. can be passed a textblock to build through

      #could use a %w{} approach
      
      words = @textblock.body
      filtered_words = UrlGetter.filter_words(words)
      filter_words.each do |word|
        UrlGetter.build_url(word)
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
    params.require(:textblock).permit(:body, :title, :urls)
  end
end
