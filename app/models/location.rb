class Location < ApplicationRecord
  belongs_to :device
  has_one :user, through: :device
end
