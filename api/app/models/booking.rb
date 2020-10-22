class Booking < ApplicationRecord
  belongs_to :space

  validates_presence_of :description, :start_date, :end_date
end
