export const fetchProfile = id => (
  $.ajax ({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUserPhoto = user => (
  $.ajax ({
    method: 'PATCH',
    url: `/api/users/${user.get("user[id]")}`,
    contentType: false,
    processData: false,
    data: user
  })
);

export const updateUser = user => (
  $.ajax ({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  })
);
