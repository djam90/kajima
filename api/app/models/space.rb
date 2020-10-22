class Space < ApplicationRecord
  has_many :bookings, dependent: :destroy

  validates_presence_of :name
end
