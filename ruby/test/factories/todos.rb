FactoryGirl.define do
  factory :todo do
    name Faker::Lorem.sentence
    completed Faker::Boolean
  end
end