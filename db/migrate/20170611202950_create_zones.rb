class CreateZones < ActiveRecord::Migration[5.1]
  def change
    create_table :zones do |t|
      t.decimal :min_lat, precision: 10, scale: 8
      t.decimal :max_lat, precision: 10, scale: 8
      t.decimal :min_long, precision: 10, scale: 8
      t.decimal :max_long, precision: 10, scale: 8
      t.integer :user_id

      t.timestamps
    end
  end
end
