class Textblock < ActiveRecord::Base
  belongs_to :user
  has_many :sentences
end
