class Api::UrlsController < ApplicationController

  def create
    @url = Url.new(url_params)
    if @url.save
      render json: @url
    else
      render json: @url.errors.full_messages, status: 402
    end 
  end

  private
  def url_params
    params.require(:url).permit(:url, :word, :textblock_id)
  end
end
