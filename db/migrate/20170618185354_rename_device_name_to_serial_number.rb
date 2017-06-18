class RenameDeviceNameToSerialNumber < ActiveRecord::Migration[5.1]
  def change
    rename_column :devices, :name, :serial_number
  end
end
