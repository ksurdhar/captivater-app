class Url < ActiveRecord::Base
  extend BulkMethodsMixin
  belongs_to :textblock
end
