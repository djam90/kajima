require 'rails_helper'

RSpec.describe Booking, type: :model do
  it { should belong_to(:space) }

  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:start_date) }
  it { should validate_presence_of(:end_date) }
end
