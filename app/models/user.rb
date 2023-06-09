# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :email, uniqueness: true, length: {in: 3..255}, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true 
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :listings
  
  has_many :saves, 
  foreign_key: :user_id,
  class_name: :Save

  has_many :saved_listings,
  through: :saves,
  source: :listing 

  def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      if user && user.is_valid_password?(password)
        user
      else 
        nil 
      end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    obj = BCrypt::Password.new(self.password_digest)
    obj.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    # self.update!(session_token: self.session_token)
    self.save!
    self.session_token
  end
  
  private

  def generate_unique_session_token
    # in a loop:
      # use SecureRandom.base64 to generate a random token
      # use `User.exists?` to check if this `session_token` is already in use
      # if already in use, continue the loop, generating a new token
      # if not in use, return the token

    session_token = SecureRandom.base64
    while User.exists?(session_token: session_token)
      session_token = SecureRandom.base64
    end
    return session_token

  end

  def ensure_session_token
    # if `self.session_token` is already present, leave it be
    # if `self.session_token` is nil, set it to `generate_unique_session_token`

    # if self.session_token.nil?
    #   session_token = generate_unique_session_token
    # end
    self.session_token ||= generate_unique_session_token
  end

end
