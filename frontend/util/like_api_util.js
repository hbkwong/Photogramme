export const addLike = id => (
  $.ajax ({
    method: 'POST',
    url: "/api/likes",
    data: { like: { photo_id: id } }
  })
);

export const deleteLike = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/likes/${id}`
    // data: {like}
  })
);
