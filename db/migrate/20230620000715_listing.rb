class Listing < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :street_address, unique: true, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.integer :bed, null: false
      t.integer :bath, null: false
      t.integer :sqft, null: false
      t.integer :lot_size, null: false
      t.string :type, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :year_built, null: false
      
      t.timestamps
    end
  end
end
