export const fetchPhotos = () => (
  $.ajax ({
    method: 'GET',
    url: '/api/photos'
  })
);
