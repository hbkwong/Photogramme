export const addComment = comment => (
  $.ajax ({
    method: "POST",
    url: "api/comments",
    dataType: "json",
    contentType: false,
    processData: false,
    data: comment
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url:`api/comments/${id}`,
  })
);
