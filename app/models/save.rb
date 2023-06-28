# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  listing_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
class Save < ApplicationRecord
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
    belongs_to :listing

end
