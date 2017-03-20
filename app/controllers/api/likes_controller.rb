class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      # render
    else
      #render
    end
  end

  def destroy
    user = User.find_by(id: like_params[:user_id])
    @like = Like.find_by(photo_id: like_params[:photo_id], user: user)
    @like.destroy
    # render
  end

  private

  def like_params
    params.require(:like).permit(:photo_id, :user_id)
  end
end
