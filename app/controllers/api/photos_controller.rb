class Api::PhotosController < ApplicationController
  def index
    if current_user
      if current_user.followers.length.zero?
        @user = current_user
        @photos = Photo.all
      else
        users_arr = [current_user]
        current_user.followings.each { |following| users_arr << following }
        @user = current_user
        @photos = Photo.where(user: users_arr).order(created_at: :desc)
      end
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render '/api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    render '/api/photos/show'
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])

    if @photo
      @photo.destroy
      render json: { }
    else
      render json: ["Photo does not exist"], status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :caption, :location)
  end
end
