class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.text :url
      t.references :textblock, index: true

      t.timestamps
    end
  end
end
