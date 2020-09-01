class Trip < ApplicationRecord

  belongs_to :user
  has_one_attached :photo

  validates :date, presence: true
  validates :time, presence: true
  validates :longitude, presence: true
  # validates :latitude, presence: true
  # validates :wave_length, presence: true
  # validates :wave_height, presence: true
  # validates :air_temperature, presence: true
  # validates :sea_temperature, presence: true
  # validates :wind_speed, presence: true
  # validates :wind_direction, presence: true

end
