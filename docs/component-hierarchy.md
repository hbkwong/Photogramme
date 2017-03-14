## Component Hierarchy

**AuthFormContainer**
- AuthForm

**NavContainer**
- SearchContainer

**FeedContainer**
- NavContainer
- FeedIndex
  - PhotoListItem
    - CommentContainer
    - CommentItem

**ProfileContainer**
- NavContainer
- ProfileIndex

**PhotoContainer**
- PhotoDetail
- CommentContainer
  - CommentItem

**ProfileEditContainer**
- ProfileForm

**AddPhotoContainer**
- AddPhoto

**CommentContainer**
- CommentItem

**FollowingContainer**
- UserListItem

**FollowerContainer**
- UserListItem


## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-in" | "AuthFormContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/" | "FeedContainer" |
| "/:id" | "ProfileContainer" |
| "/:id/edit" | "ProfileEditContainer" |
| "/:id/following" | "FollowingContainer" |
| "/:id/followers" | "FollowerContainer" |
| "/upload" | "AddPhotoContainer" |
| "/photos/:id" | "PhotoDetailContainer" |
