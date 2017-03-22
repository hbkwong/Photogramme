export const addComment = commentInfo => (
  $.ajax ({
    method: 'POST',
    url: '/api/comments',
    data: commentInfo,
    dataType: 'json',
    contentType: false,
    processData: false
  })
);

export const deleteComment = id => (
  $.ajax ({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
