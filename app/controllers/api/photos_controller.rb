class Api::PhotosController < ApplicationController
  def index
    # user = User.find_by(username: params[:username])
    # @photos = Photo.where(user_id: user.id)
    # # render 'api/photos/index'
    # render json: @photos
    @photos = Photo.all
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
