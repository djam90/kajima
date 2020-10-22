# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

spaces = Space.create([{ name: 'Space 1'}, { name: 'Space 2'}, { name: 'Space 3'}])

Booking.create([
                 {
                   description: 'MOT',
                   start_date: Date.today + 2.days,
                   end_date: Date.today + 4.days,
                   space: spaces.first
                 },
                 {
                   description: 'MOT and Service',
                   start_date: Date.today + 3.days,
                   end_date: Date.today + 7.days,
                   space: spaces.first
                 },
                 {
                   description: 'Brakes',
                   start_date: Date.today + 3.days,
                   end_date: Date.today + 7.days,
                   space: spaces.first
                 },
                 {
                   description: 'Tyres',
                   start_date: Date.today + 3.days,
                   end_date: Date.today + 7.days,
                   space: spaces.second
                 },
                 {
                   description: 'Bodywork',
                   start_date: Date.today + 1.days,
                   end_date: Date.today + 7.days,
                   space: spaces.second
                 }
               ])