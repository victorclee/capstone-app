class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.decimal :lat, precision: 10, scale: 8
      t.decimal :long, precision: 10, scale: 8
      t.integer :device_id

      t.timestamps
    end
  end
end
