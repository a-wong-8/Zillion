class Renamecolumnagain < ActiveRecord::Migration[7.0]
  def change
    rename_column :listings, :category, :type
  end
end
