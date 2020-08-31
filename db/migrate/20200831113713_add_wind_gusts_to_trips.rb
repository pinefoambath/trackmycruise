class AddWindGustsToTrips < ActiveRecord::Migration[6.0]
  def change
    add_column :trips, :wind_gusts, :integer
  end
end
