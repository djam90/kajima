require 'rails_helper'

RSpec.describe 'Spaces API', type: :request do
  # initialize test data
  let!(:spaces) { create_list(:space, 10) }
  let(:space_id) { spaces.first.id }

  # Test suite for GET /spaces
  describe 'GET /spaces' do
    # make HTTP get request before each example
    before { get '/spaces' }

    it 'returns spaces' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end