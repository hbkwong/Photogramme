class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.profile_photo_url = "http://res.cloudinary.com/instagramme/image/upload/v1491887414/happy-dog2_zbx1bp.jpg"
    @user.bio = "Let's go on an adventure!"

    if @user.save
      log_in_user(@user)
      render 'api/users/show'
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit([:username, :password, :email, :name])
  end

end
