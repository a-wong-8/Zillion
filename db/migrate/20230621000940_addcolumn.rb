class Addcolumn < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :user_id, :integer, null: false, foreign_key: true
    add_column :saves, :user_id, :integer, null: false, foreign_key: true 
    add_index :listings, :user_id
    add_index :saves, :user_id
  end
end
