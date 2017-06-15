class User < ApplicationRecord
  has_secure_password

  has_many :devices
  has_many :locations, through: :devices
  has_many :zones

end
