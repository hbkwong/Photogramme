# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user, :photo, presence: true
  validates :user, uniqueness: { scope: :photo }

  belongs_to :user
  belongs_to :photo
end
