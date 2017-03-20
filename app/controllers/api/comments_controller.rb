class Api::CommentsController < ApplicationController
  def create
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end
end
