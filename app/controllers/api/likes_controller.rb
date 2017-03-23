class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
    user_id: current_user.id,
    photo_id: like_params[:photo_id]
    )

    if @like.save
      render json: {
        id: @like.id,
        photo_id: like_params[:post_id],
        photo: Photo.find(like_params[:photo_id]),
        user_id: current_user.id,
        user: current_user
      }, status: 200
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find_by(id: like_params[:user_id])
    @like = Like.find_by(
      photo_id: like_params[:photo_id],
      user_id: like_params[:user_id]
    )

    if @like.destroy
      render json: {
        id: @like.id,
        photo_id: like_params[:post_id],
        photo: Photo.find(like_params[:photo_id]),
        user_id: current_user.id,
        user: current_user
      }, status: 200
    end
  end

  private

  def like_params
    params.require(:like).permit(:photo_id, :user_id)
  end
end
