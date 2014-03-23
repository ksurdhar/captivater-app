class Textblock < ActiveRecord::Base
  extend BulkMethodsMixin
  belongs_to :user
  has_many :sentences
end
