export const fetchPhotos = username => (
  $.ajax ({
    method: 'GET',
    url: '/api/photos',
    data: { username }
  })
);
