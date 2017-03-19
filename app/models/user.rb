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

  has_many :photos
    # foreign_key: :user_id,
    # primary_key: :id,
    # class_name: "Photo"

  validates :username, :password_digest, :session_token, :email, :name, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
