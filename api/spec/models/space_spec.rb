require 'rails_helper'

RSpec.describe Space, type: :model do
  it { should have_many(:bookings).dependent(:destroy) }

  it { should validate_presence_of(:name) }
end
