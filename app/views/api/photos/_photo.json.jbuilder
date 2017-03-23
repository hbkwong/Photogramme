json.extract! photo, :id, :caption, :location, :likes, :user_id, :url, :user, :comments, :liking_users
json.time photo.since_taken
# json.username photo.user.username

json.comments photo.comments do |comment|
  json.set! comment.id
  json.body comment.body
  json.created_at comment.created_at
  json.user do
    json.extract! comment.user, :username
  end
end
