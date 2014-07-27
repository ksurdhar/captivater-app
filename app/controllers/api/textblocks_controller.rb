require 'url_getter.rb'
class Api::TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)

    if @textblock.save
      ActiveRecord::Base.transaction do
        urls_arr = []
        filtered_words = UrlGetter.filter_words(@textblock.body)
        urls_arr += UrlGetter.build_url(filtered_words, @textblock)
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
    params.require(:textblock).permit(:body, :title, :urls)
  end
end

