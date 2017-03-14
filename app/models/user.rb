# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  name              :string           not null
#  bio               :text
#  profile_photo_url :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ApplicationRecord
end
