class Renamecolumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :listings, :type, :category
  end
end
