class Textblock < ActiveRecord::Base
  before_save :clean_body
  validates :body, presence: true
  has_many :urls

  def clean_body
    last_char = self.body.split().last
    if last_char != "." || last_char != "!" || last_char != "?"
      self.body << "."
    end
  end
end
