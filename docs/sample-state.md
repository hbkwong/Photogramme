```js
{
  currentUser: {
    id: 1,
    username: "instagrammer"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPhotos: {errors: ["cannot be blank"]},
  },
  user: {
    id: 1,
    username: "instagrammer",
    about: "Taking photos all around the world!",
    followers: [2, ...],
    following: [2, ...],
    photos: [2, ...]
  },
  photo: {
    detail: {
      1: {
        url: "assets/images/default",
        author_id: 1,
        author: "",
        caption: "What a great view!",
        created_at: "date",
        comments: {
          1: {
            username: "hbk",
            body: "This is awesome!"
          }
        },
        likes: {
          1: {
            id: 1,
            username: "instagrammer"
          }
        }
      }
    }
  },
  follows: {
    1: {
      follower_id: 1,
      following_id: 6
    }
  }
}
```
