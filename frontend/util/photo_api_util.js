export const fetchPhotos = username => (
  $.ajax ({
    method: 'GET',
    url: '/api/photos',
    data: { username }
  })
);

export const fetchPhoto = id => (
  $.ajax ({
    method: 'GET',
    url: `/api/photos/${id}`
  })
);

export const postPhoto = photo => {
  $.ajax ({
    method: 'POST',
    url: '/api/photos',
    data: { photo }
  });
};

export const deletePhoto = id => {
  $.ajax ({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};
