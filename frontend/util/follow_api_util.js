export const addFollow = following_id => (
  $.ajax ({
    method: 'POST',
    url: '/api/follows',
    data: { follow: { following_id } }
  })
);

export const deleteFollow = followingInfo => (
  $.ajax ({
    method: 'DELETE',
    url: `api/follows/${followingInfo}`,
    data: { follow: followingInfo }
  })
);
