require 'url_getter.rb'


class TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)
    @textblock.user_id = current_user.id
    if @textblock.save

      text = @textblock.body

      filtered_words = UrlGetter.filter_words(text)
      UrlGetter.build_url(filtered_words, @textblock)

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
