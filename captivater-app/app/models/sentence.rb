class Sentence < ActiveRecord::Base
  belongs_to :textblock
  has_many :urls
end
