class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.date :date
      t.time :time
      t.integer :latitude
      t.integer :longitude
      t.string :description
      t.float :wave_height
      t.float :wave_length
      t.integer :wind_speed
      t.integer :wind_direction
      t.integer :air_temperature
      t.integer :sea_temperature
      t.integer :wind_gusts
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
