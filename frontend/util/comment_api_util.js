export const addComment = comment => (
  $.ajax ({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  })
);

export const deleteComment = (photoId, commentId) => (
  $.ajax({
    method: 'DELETE',
    url:`api/comments/${commentId}`,
    data: {photo_id: photoId}
  })
);
