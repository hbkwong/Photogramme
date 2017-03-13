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
| "/" | "AuthFormContainer" |
| "/" | "FeedContainer" |
| "/:username" | "ProfileContainer" |
| "/:username/edit" | "ProfileEditContainer" |
| "/:username/following" | "FollowingContainer" |
| "/:username/followers" | "FollowerContainer" |
| "/:username/add" | "AddPhotoContainer" |
| "/:photo_id/?:taken-by/:username" | "PhotoDetailContainer" |
