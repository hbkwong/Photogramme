class Api::FollowsController < ApplicationController
  # follow user
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    if @follow.save
      render json: {
        id: @follow.id,
        follower: current_user,
        follower_id: current_user.id,
        following_id: params[:following_id],
        following: User.find(follow_params[:following_id]),
        following_followers: User.find(follow_params[:following_id]).followers
        }, status: 200
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  # unfollow user
  def destroy
    @follow = Follow.find_by(follow_params)

    if @follow.delete
      render json: {
        id: @follow.id,
        follower: @follow.follower,
        follower_id: params[:following_id],
        following_id: @follow.following.id,
        following: User.find(follow_params[:following_id]),
        following_followers: User.find(follow_params[:following_id]).followers
        }, status: 200
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
