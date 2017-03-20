json.array! @photos do |photo|
  json.partial! '/api/photos/photo', locals: { photo: photo }
end
