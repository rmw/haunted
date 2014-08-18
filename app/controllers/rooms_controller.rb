class RoomsController < ApplicationController

  def generate
    sample_pool = [*"a".."z"] + [*"0".."9"]
    room_session = sample_pool.sample(6).join("")
    redirect_to "/#{room_session}"
  end

  def show
    @room_session = params[:room_session]
  end

  def one_wall
    @js = "one_wall"
    render :show
  end

end
