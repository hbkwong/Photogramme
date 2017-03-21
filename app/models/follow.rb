# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower, :following, presence: true
  validates :follower, uniqueness: { scope: :following }

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: "User"

  belongs_to :following,
    foreign_key: :following_id,
    class_name: "User"
end
