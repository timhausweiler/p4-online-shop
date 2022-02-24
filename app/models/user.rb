class User < ApplicationRecord
  has_many :products, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :first_name, presence: true
  validates :last_name, presence: true
end
