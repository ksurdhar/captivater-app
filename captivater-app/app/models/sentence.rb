class Sentence < ActiveRecord::Base
  extend BulkMethodsMixin
  belongs_to :textblock
  has_many :urls
end
