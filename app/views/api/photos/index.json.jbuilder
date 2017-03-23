# json.array! @photos do |photo|
#   json.partial! '/api/photos/photo', locals: { photo: photo }
# end

@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end
end
