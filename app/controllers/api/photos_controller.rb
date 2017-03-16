class Api::PhotosController < ApplicationController
  def index
    user = User.find_by(username: params[:username])
    @photos = Photo.where(user_id: user.id)
    # render 'api/photos/index'
    render json: @photos
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url)
  end
end
