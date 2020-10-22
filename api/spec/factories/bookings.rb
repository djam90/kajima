FactoryBot.define do
  factory :booking do
    description { Faker::Lorem.words }
    start_date { Date.today + 2.days }
    end_date { Date.today + 4.days }
    space_id { nil }
  end
end