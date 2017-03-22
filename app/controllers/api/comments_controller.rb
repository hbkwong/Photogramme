class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render json: {
        id: @comment.id,
        photo: Photo.find(comment_params[:photo_id]),
        photo_id: comment_params[:photo_id],
        user: current_user,
        user_id: current_user.id,
        body: @commment.body
      }, status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.photo.user.id == current_user.id
      if @comment.delete
        render json: {
          id: @comment.id,
          photo_id: @comment.photo_id,
          photo: @comment.photo,
          user: @comment.user,
          user_id: @comment.user_id
        }, status: 200
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ["Action prohibited"], status: 403
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
