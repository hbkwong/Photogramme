# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

User.delete_all

guest = User.create!(
  username: "guest",
  password: "password",
  name: "Guest User",
  email: "guest@guest.com",
  bio: "I am a guest user of Instagramme 😎",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489969971/5w9Q2MF_yofpor.jpg"
)

User.create!(
  username: "fernanda06",
  password: "password",
  name: "Fernanda M.",
  email: "fernanda@instagramme.com",
  bio: "💃🏻 ¡Me encanta bailar! 💃🏻",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970947/Fernanda_Mora_lga5tu.jpg"
)

User.create!(
  username: "beep",
  password: "password",
  name: "Gilbert Schmitt",
  email: "gilbert@instagramme.com",
  bio: "Florida native. Professional cyclist. Technology enthusiast.",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970947/Paul_Schmitt_obrjwt.jpg"
)

User.create!(
  username: "delrian",
  password: "password",
  name: "Andrea del Rio",
  email: "andrea@instagramme.com",
  bio: "⚽️ 🏀 🏈 ⚾️ 🎾 🏐",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970945/Andrea_del_Rio_nqkvht.jpg"
)

User.create!(
  username: "andrewj",
  password: "password",
  name: "Andrew Jiang",
  email: "andrewj@instagramme.com",
  bio: "Go Cal Bears! 🐻 🏀",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970945/Andrew_Jiang_bikfwx.jpg"
)

User.create!(
  username: "beebeean09",
  password: "password",
  name: "Viv Lee",
  email: "vivian@instagramme.com",
  bio: "Food, travel, and laughs. 🍜 ✈️ 😂",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970927/Vivian_Lee_rxguww.jpg"
)

User.create!(
  username: "KingoftheHill",
  password: "password",
  name: "Brandon Hill",
  email: "brandon@instagramme.com",
  bio: "2017 Poker World Champion ♠️",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970943/Brandon_Hill_zwyamr.jpg"
)

User.create!(
  username: "J-SON",
  password: "password",
  name: "Jason Reeder",
  email: "jason@instagramme.com",
  bio: "📷 🌎 Street photographer curently living in London, England",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970943/Jason_Reeder_hbpyn8.jpg"
)

User.create!(
  username: "fafafariba",
  password: "password",
  name: "Fariba Massah",
  email: "fariba@instagramme.com",
  bio: "Loving the California sun!",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970944/Fariba_Massah_ufsvma.jpg"
)

User.create!(
  username: "terryoshea",
  password: "password",
  name: "Terry O'Shea",
  email: "terry@instagramme.com",
  bio: "Lights, camera, action! 🎭 🎬",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970940/Terry_O_Shea_l6epd2.jpg"
)

User.create!(
  username: "chasingdreams",
  password: "password",
  name: "Chase Armstrong",
  email: "chase@instagramme.com",
  bio: "'If your dreams don't scare you, they aren't big enough'",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970938/Chase_Armstrong_a8zcni.jpg"
)

User.create!(
  username: "imbaoss",
  password: "password",
  name: "Bae Lee",
  email: "bao@instagramme.com",
  bio: "Wall Street stock trader turned professional chef! 🍽",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970936/Bao_Le_mepnto.jpg"
)

User.create!(
  username: "jonwright",
  password: "password",
  name: "Jonathan Wright",
  email: "jon@instagramme.com",
  bio: "'Some people want it to happen, some wish it would happen, others make it happen.",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970937/Jonathon_Wright_nwdhf8.jpg"
)

User.create!(
  username: "hyunckim",
  password: "password",
  name: "Hyun Chul Kim",
  email: "hck@instagramme.com",
  bio: "Washington, DC transplant now living in beautiful San Francisco, CA!",
  profile_photo_url: "http://res.cloudinary.com/instagramme/image/upload/v1489970945/Hyun_Chul_Kim_ni1hcc.jpg"
)

# Photos

Photo.delete_all

Photo.create!(
  url: "http://res.cloudinary.com/instagramme/image/upload/v1490028608/k7tvoxieu0ca5vqcqvvg.jpg",
  caption: "Old school cool",
  location: "San Francisco, CA",
  user_id: 1
)

Photo.create!(
  url: "http://res.cloudinary.com/instagramme/image/upload/v1490034152/jason-thomas-186778_yhcdmk.jpg",
  caption: "On top of the world!",
  location: "Scotland",
  user_id: 1
)

Photo.create!(
  url: "http://res.cloudinary.com/instagramme/image/upload/v1490034173/austin-neill-159603_pzvsaq.jpg",
  caption: "Great day at the beach 🏖️",
  location: "Venice Beach, CA",
  user_id: 1
)

Photo.create!(
  url: "http://res.cloudinary.com/instagramme/image/upload/v1490034238/aaron-burden-168408_fhtmgr.jpg",
  caption: "Loving the pacific coast",
  location: "PCH, CA",
  user_id: 1
)

Photo.create!(
  url: "http://res.cloudinary.com/instagramme/image/upload/v1490034213/web-agency-29200_ml8alz.jpg",
  caption: "Rustic.",
  location: "Laguna Beach, CA",
  user_id: 1
)

Like.create!(
  user_id: 1
  photo_id: 1
)

Like.create!(
  user_id: 1
  photo_id: 2
)

Like.create!(
  user_id: 1
  photo_id: 3
)

Like.create!(
  user_id: 1
  photo_id: 4
)

Like.create!(
  user_id: 1
  photo_id: 5
)

Like.create!(
  user_id: 1
  photo_id: 1
)

Like.create!(
  user_id: 2
  photo_id: 1
)

Like.create!(
  user_id: 3
  photo_id: 1
)

Like.create!(
  user_id: 4
  photo_id: 1
)

Like.create!(
  user_id: 1
  photo_id: 2
)

Like.create!(
  user_id: 2
  photo_id: 2
)

Like.create!(
  user_id: 3
  photo_id: 2
)
