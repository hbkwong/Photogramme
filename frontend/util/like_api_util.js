export const addLike = id => (
  $.ajax ({
    method: 'POST',
    url: "/api/likes",
    data: { like: { photo_id: id } }
  })
);

export const deleteLike = like => (
  $.ajax ({
    method: 'DELETE',
    url: `api/likes/${like.photo_id}`,
    data: { like }
  })
);
