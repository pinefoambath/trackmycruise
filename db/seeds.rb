# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning the database... "
Trip.destroy_all
User.destroy_all

puts "Creating users..."

cook = {email: "capncook@seashanties.com", first_name: "Captain James", last_name: "Cook", password: "123456"}
nelson = {email: "bigboypantsnelson@thenavy.com", first_name: "Horatio", last_name: "Nelson", password: "123456"}
drake = {email: "giantsquidman@drakeenterprises.com", first_name: "Francis", last_name: "Drake", password: "123456"}

[ cook, nelson, drake ].each do |attributes|
    user = User.create!(attributes)
    puts "Created #{user.email}"
  end

  p User.all

  users_array = User.all

  puts "Creating trips..."

  trips = [
  {date: Date.new(2019, 6, 21), time: Time.parse("14:53"), latitude: "3,14135", longitude: "2,332201", description: "Great day sailing", wave_height: 4, wave_length: 10, wind_speed: 20, wind_direction: "east", air_temperature: 20, sea_temperature: 17, wind_gusts:25 },
  {date: Date.new(2020, 4, 03), time: Time.parse("13:53"), latitude: "5,14000", longitude: "3,332201", description: "Rough day with plenty of waves", wave_height: 3, wave_length: 10, wind_speed: 22, wind_direction: "east", air_temperature: 24, sea_temperature: 22, wind_gusts:30 },
  {date: Date.new(2018, 1, 26), time: Time.parse("09:44"), latitude: "4,14334", longitude: "4,332201", description: "Ran out of food", wave_height: 2, wave_length: 4, wind_speed: 20, wind_direction: "east", air_temperature: 28, sea_temperature: 19, wind_gusts: 28 },
  {date: Date.new(2019, 3, 29), time: Time.parse("10:53"), latitude: "3,14334", longitude: "4,330000", description: "I got a sunburn", wave_height: 1, wave_length: 6, wind_speed: 23, wind_direction: "east", air_temperature: 25, sea_temperature: 17, wind_gusts: 30 },
  {date: Date.new(2018, 5, 14), time: Time.parse("11:49"), latitude: "3,14334", longitude: "4,332201", description: "It rained all day", wave_height: 3, wave_length: 10, wind_speed: 22, wind_direction: "east", air_temperature: 24, sea_temperature: 16, wind_gusts:35 },
  {date: Date.new(2018, 4, 29), time: Time.parse("13:53"), latitude: "3,14334", longitude: "4,332201", description: "I did not feel so well", wave_height: 3, wave_length: 7, wind_speed: 27, wind_direction: "east", air_temperature: 26, sea_temperature: 21, wind_gusts: 30 },
  {date: Date.new(2019, 6, 21), time: Time.parse("04:53"), latitude: "3,14334", longitude: "4,332201", description: "We ran out of water", wave_height: 1, wave_length: 6, wind_speed: 16, wind_direction: "east", air_temperature: 24, sea_temperature: 16, wind_gusts:28 },
  {date: Date.new(2018, 6, 27), time: Time.parse("09:53"), latitude: "3,14334", longitude: "4,332201", description: "Sunny day", wave_height: 2, wave_length: 10, wind_speed: 22, wind_direction: "east", air_temperature: 24, sea_temperature: 16, wind_gusts:27 },
  {date: Date.new(2019, 7, 12), time: Time.parse("08:33"), latitude: "5,11214", longitude: "4,890075", description: "Cloudy day", wave_height: 4, wave_length: 12, wind_speed: 30, wind_direction: "north-east", air_temperature: 22, sea_temperature: 14, wind_gusts:32 },
  {date: Date.new(2020, 8, 23), time: Time.parse("15:21"), latitude: "2,33135", longitude: "3,223518", description: "Sunny day", wave_height: 1, wave_length: 8, wind_speed: 25, wind_direction: "south", air_temperature: 28, sea_temperature: 18, wind_gusts:30 }]

  trips.each do |attributes|
    trip = Trip.new(attributes)
    trip.user = users_array.sample
    trip.save!
    puts "belongs to #{trip.user.email}"
  end

  puts "Finished!"
