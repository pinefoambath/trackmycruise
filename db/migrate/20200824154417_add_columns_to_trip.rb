class AddColumnsToTrip < ActiveRecord::Migration[6.0]
  def change
    add_column :trips, :wind_gusts, :integer
    add_column :trips, :type, :string
  end
end
