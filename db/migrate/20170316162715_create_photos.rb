class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.text :url, null: false
      t.text :caption
      t.string :location
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :photos, :user_id
  end
end
