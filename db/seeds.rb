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
  {date: Date.new(2018, 6, 21), time: Time.parse("09:53"), latitude: "3,14334", longitude: "4,332201", description: "Sunny day", wave_height: 2, wave_length: 10, wind_speed: 22, wind_direction: "east", wind_gusts: 30, air_temperature: 24, sea_temperature: 16 },
  {date: Date.new(2019, 7, 12), time: Time.parse("08:33"), latitude: "5,11214", longitude: "4,890075", description: "Cloudy day", wave_height: 4, wave_length: 12, wind_speed: 30, wind_direction: "north-east",wind_gusts: 42, air_temperature: 22, sea_temperature: 14 },
  {date: Date.new(2020, 8, 23), time: Time.parse("15:21"), latitude: "2,33135", longitude: "3,223518", description: "Sunny day", wave_height: 1, wave_length: 8, wind_speed: 25, wind_direction: "south",wind_gusts: 36, air_temperature: 28, sea_temperature: 18 }]

  trips.each do |attributes|
    trip = Trip.new(attributes)
    trip.user = users_array.sample
    trip.save!
    puts "belongs to #{trip.user.email}"
  end
  
  puts "Finished!"
