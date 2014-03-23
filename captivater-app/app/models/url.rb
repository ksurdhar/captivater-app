class Url < ActiveRecord::Base
  extend BulkMethodsMixin
  belongs_to :sentence
end
