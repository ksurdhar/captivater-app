class Textblock < ActiveRecord::Base
  validates :body, presence: true

  belongs_to :user
  has_many :urls
end
