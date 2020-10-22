require 'rails_helper'

RSpec.describe 'Bookings API', type: :request do
  let!(:spaces) { create_list(:space, 10) }
  let!(:bookings) { create_list(:booking, 10, space: spaces.first) }
  let(:booking_id) { bookings.first.id }

  # Test suite for GET /bookings
  describe 'GET /bookings' do
    before { get '/bookings' }

    it 'returns bookings' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end