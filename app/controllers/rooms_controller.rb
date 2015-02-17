class RoomsController < ApplicationController

  def index
  end

  def show
    @room_session = params[:room_session]
  end

  def generate
    sample_pool = [*"a".."z"] + [*"0".."9"]
    room_session = sample_pool.sample(6).join("")
    redirect_to "/#{room_session}"
  end

end
