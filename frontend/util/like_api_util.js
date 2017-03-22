export const addLike = photoId => (
  $.ajax({
    method: 'POST',
    url: "/api/likes",
    data: { like: { photo_id: photoId } }
  })
);

export const deleteLike = (photoId, username) => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/likes/${photoId}`,
    data: { like: { photo_id: photoId, username } }
  })
);
