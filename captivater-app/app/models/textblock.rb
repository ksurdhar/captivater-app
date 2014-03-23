class Textblock < ActiveRecord::Base
  belongs_to :user
  has_many :urls
end
