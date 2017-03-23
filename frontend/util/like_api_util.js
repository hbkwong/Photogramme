export const addLike = photoId => (
  $.ajax({
    method: 'POST',
    url: "/api/likes",
    data: { like: { photo_id: photoId } }
  })
);

export const deleteLike = (photoId, userId) => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/likes/${photoId}`,
    data: { like: { photo_id: photoId, userId } }
  })
);
