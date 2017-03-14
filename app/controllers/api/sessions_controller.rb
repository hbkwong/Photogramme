class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_crendentials(params[:user][:username], params[:user][:password])
    if @user
      log_in_user(@user)
      render 'api/users/show'
    else
      render json: {error: ['Invalid username/password combination']}, status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      current_user.reset_session_token
      session[:session_token] = nil
      @current_user = nil
      render 'api/users/show'
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

end
