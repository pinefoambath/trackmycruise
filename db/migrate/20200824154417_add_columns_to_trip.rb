class AddColumnsToTrip < ActiveRecord::Migration[6.0]
  def change
    # add_column :trips, :wind_gusts, :integer
    add_column :trips, :trip_type, :string
  end
end
