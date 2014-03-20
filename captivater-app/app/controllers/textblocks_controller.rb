class TextblocksController < ApplicationController

  def new
    @textblock = Textblock.new
  end

  def create
    @textblock = Textblock.new(textblock_params)
    # @textblock.user_id = current_user.id

    if @textblock.save
      #run script to get urls here
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
    params.require(:textblock).permit(:body, :title)
  end
end
