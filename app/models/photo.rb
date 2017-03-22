# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :text             not null
#  caption    :text
#  location   :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  has_many :comments
  belongs_to :user

  has_many :likes

  has_many :liking_users,
    through: :likes,
    source: :user

  validates :user, presence: true
  validates :url, presence: true

  def since_taken
    mins = ((Time.now - self.created_at) / 1.minute).round
    hrs = ((Time.now - self.created_at) / 1.hour).round

    # 168 hours == 1 week
    if hrs >= 168
      result = "#{(hrs / 168).round}w"
    elsif hrs >= 24
      result = "#{(hrs / 24).round}d"
    elsif hrs >= 1
      result = "#{hrs}h"
    else
      result = "#{mins}m"
    end

    result
  end
end
