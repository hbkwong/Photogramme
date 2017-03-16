# Schema Information

## users
column name     | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
email            | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique
name             | string    | not null
bio              | text      |
profile_photo_url| text      |

## photos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
url             | text      | not null
caption         | text      |
location        | string    |
user_id         | integer   | not null, foreign key (references users), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [following_id]
following_id| integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed unique [photo_id]
photo_id    | integer   | not null, foreign key (references photos), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed
